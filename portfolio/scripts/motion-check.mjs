import { chromium } from "playwright-core";
import os from "node:os";
import path from "node:path";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const EXE =
  process.env.CHROMIUM_PATH ??
  path.join(
    os.homedir(),
    ".cache/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell"
  );
const SHOTS = "/tmp/opencode";

const browser = await chromium.launch({ executablePath: EXE });
const results = [];

function check(name, ok, detail = "") {
  results.push({ name, ok });
  console.log(`${ok ? "PASS" : "FAIL"} ${name}${detail ? ` (${detail})` : ""}`);
}

async function newPage(width, height, options = {}) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
    ...options,
  });
  const page = await context.newPage();
  page.setDefaultTimeout(5000);
  await page.goto(BASE, { waitUntil: "domcontentloaded" });
  return { page, context };
}

for (const width of [360, 390, 768, 1280]) {
  const { page, context } = await newPage(width, 800, {
    hasTouch: width < 1024,
    isMobile: width < 1024,
  });
  const widths = [];
  for (let i = 0; i < 6; i++) {
    await page.waitForTimeout(200);
    widths.push(await page.evaluate(() => document.documentElement.scrollWidth));
  }
  check(`no horizontal overflow @${width}`, Math.max(...widths) <= width, `max ${Math.max(...widths)}px`);
  await page.screenshot({ path: `${SHOTS}/motion-${width}.png` });
  await context.close();
}

{
  const { page, context } = await newPage(390, 844, { hasTouch: true, isMobile: true });
  await page.evaluate(() => document.querySelector("#work").scrollIntoView());
  await page.waitForTimeout(300);
  const card = page.locator("#work article").first();

  await card.evaluate((el) =>
    el.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, isPrimary: true, button: 0, pointerType: "touch" }))
  );
  check("press class on sticker tap", (await card.getAttribute("class")).includes("is-pressed"));

  await card.evaluate((el) =>
    el.dispatchEvent(new PointerEvent("pointerup", { bubbles: true, isPrimary: true, button: 0, pointerType: "touch" }))
  );
  const after = await card.getAttribute("class");
  const animation = await card.evaluate((el) => getComputedStyle(el).animationName);
  check("wiggle on touch release", after.includes("is-wiggle") && animation === "wiggle", `animation=${animation}`);

  await card.locator("a.btn").first().evaluate((el) =>
    el.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, isPrimary: true, button: 0, pointerType: "touch" }))
  );
  check("CTA tap does not press whole card", !(await card.getAttribute("class")).includes("is-pressed"));

  await page.evaluate(() => document.querySelector("#hobbies").scrollIntoView({ behavior: "instant" }));
  await page.waitForTimeout(900);
  const nav = await page.locator('nav[aria-label="Sections"] a').evaluateAll((els) =>
    els.map((el) => ({
      current: el.getAttribute("aria-current"),
      opacity: getComputedStyle(el.querySelector('span[aria-hidden="true"]')).opacity,
    }))
  );
  check(
    "bottom nav active circle",
    nav.filter((item) => item.current === "true").length === 1 &&
      nav.filter((item) => item.opacity === "1").length === 1 &&
      nav.filter((item) => item.opacity === "0").length === 3,
    JSON.stringify(nav)
  );
  await context.close();
}

{
  const { page, context } = await newPage(360, 500, { hasTouch: true, isMobile: true });
  await page.waitForTimeout(900);
  const stat = page.locator('section[aria-labelledby="hero-title"] .sticker').first();
  const before = await stat.locator("span").first().textContent();
  const playState = await stat.evaluate((el) => getComputedStyle(el).animationPlayState);
  check("stat slap paused below fold", playState === "paused", `play-state=${playState}`);
  check("stat not counted before view", before !== "2,000+", `value=${before}`);

  await stat.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1600);
  const after = await stat.locator("span").first().textContent();
  check("stat counts up on view", after === "2,000+", `value=${after}`);
  check("stat slap armed on view", (await stat.getAttribute("class")).includes("is-armed"));
  await context.close();
}

{
  const { page, context } = await newPage(390, 844, {
    hasTouch: true,
    isMobile: true,
    reducedMotion: "reduce",
  });
  await page.waitForTimeout(600);
  const reduced = await page.evaluate(() => {
    const els = [...document.querySelectorAll(".slap, .note-in")];
    return {
      animations: els.map((el) => getComputedStyle(el).animationName),
      opacities: els.map((el) => getComputedStyle(el).opacity),
      stat: document.querySelector('section[aria-labelledby="hero-title"] .sticker span')?.textContent,
    };
  });
  check("reduced motion: no entrance animations", reduced.animations.every((a) => a === "none"));
  check("reduced motion: elements visible", reduced.opacities.every((o) => Number(o) === 1));
  check("reduced motion: final stat value", reduced.stat === "2,000+", `value=${reduced.stat}`);
  await context.close();
}

{
  const { page, context } = await newPage(1280, 800);
  const line = page.locator(".timeline-line");
  const before = await line.evaluate((el) => getComputedStyle(el).transform);
  await line.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1100);
  const after = await line.evaluate((el) => getComputedStyle(el).transform);
  check("timeline draws on first view", before !== after && after.includes("matrix(1"), `${before} -> ${after}`);

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.keyboard.press("Tab");
  const focus = await page.evaluate(() => ({
    cls: String(document.activeElement?.className ?? ""),
    outline: getComputedStyle(document.activeElement).outlineStyle,
  }));
  check("skip link is first focus", focus.cls.includes("skip-link"), focus.cls);
  check("focus-visible outline", focus.outline === "solid", focus.outline);

  await page.evaluate(() => document.querySelector("#contact").scrollIntoView());
  await page.locator('form button[type="submit"]').click();
  await page.waitForTimeout(60);
  const shake = await page.evaluate(() => {
    const el = document.querySelector("form .shake");
    return el ? getComputedStyle(el).transform : "missing";
  });
  check("form error shake has transform", shake !== "none" && shake !== "missing", `transform=${shake}`);
  await context.close();
}

await browser.close();

const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
if (failed.length) process.exitCode = 1;
