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

async function newPage(width, height, options = {}, initScript) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
    ...options,
  });
  const page = await context.newPage();
  page.setDefaultTimeout(5000);
  if (initScript) await page.addInitScript(initScript);
  await page.goto(BASE, { waitUntil: "domcontentloaded" });
  return { page, context };
}

for (const width of [360, 390, 768, 1280, 1440]) {
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

for (const width of [1280, 1440]) {
  const { page, context } = await newPage(width, 900);
  await page.waitForTimeout(300);
  const stats = await page.evaluate(() =>
    [...document.querySelectorAll('section[aria-labelledby="hero-title"] .sticker')].map((el) => ({
      display: getComputedStyle(el).display,
      padding: Number.parseFloat(getComputedStyle(el).paddingTop),
      spans: [...el.querySelectorAll(":scope > span")].map((span) => getComputedStyle(span).display),
    }))
  );
  check(
    `hero stat stickers use block layout @${width}`,
    stats.length === 3 &&
      stats.every((stat) => stat.display === "flex" && stat.padding >= 16 && stat.spans.every((s) => s === "block")),
    JSON.stringify(stats)
  );
  await context.close();
}

{
  const { page, context } = await newPage(1440, 900, {}, () => {
    window.__counterSamples = [];
    document.addEventListener("DOMContentLoaded", () => {
      window.__counterTimer = setInterval(() => {
        const value = [...document.querySelectorAll(".tabular-nums")].map((el) => el.textContent).join(" | ");
        if (value && window.__counterSamples.at(-1) !== value) window.__counterSamples.push(value);
      }, 16);
    });
  });
  await page.waitForTimeout(3000);
  const states = await page.evaluate(() => {
    clearInterval(window.__counterTimer);
    return window.__counterSamples;
  });
  check(
    "count-up never shows negative values",
    states.length > 5 && !states.some((state) => state.includes("-")),
    `${states.length} states`
  );
  check("count-up ends at final values", states.at(-1) === "2,000+ | About 1,000 | 2", `final=${states.at(-1)}`);
  await context.close();
}

{
  const { page, context } = await newPage(360, 700, { hasTouch: true, isMobile: true });
  const targets = await page.evaluate(() => {
    const size = (el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { w: Math.round(r.width), h: Math.round(r.height) };
    };
    const logo = [...document.querySelectorAll("a")].find(
      (a) => a.textContent.trim() === "Raj G" && a.getBoundingClientRect().width > 0
    );
    const mail = document.querySelector('#contact a[href^="mailto:"]');
    return {
      nav: [...document.querySelectorAll('nav[aria-label="Sections"] a')].map(size),
      logo: size(logo),
      mail: size(mail),
    };
  });
  check(
    "mobile tap targets are at least 44px",
    targets.nav.length === 4 &&
      [...targets.nav, targets.logo, targets.mail].every((t) => t && t.w >= 44 && t.h >= 44),
    JSON.stringify(targets)
  );
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
  check("stat shows final SSR value before view", before === "2,000+", `value=${before}`);

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
  const timeline = await page.evaluate(() => {
    const line = document.querySelector(".timeline-line");
    const cards = [...document.querySelectorAll("#how-i-build .relative ol > li")];
    const rect = line.getBoundingClientRect();
    const top = Math.min(...cards.map((card) => card.getBoundingClientRect().top));
    const hits = [0.15, 0.35, 0.5, 0.65, 0.85].map((fraction) =>
      document.elementFromPoint(rect.x + rect.width * fraction, rect.y + 1) === line
    );
    return { gap: Math.round(top - rect.bottom), hits: hits.filter(Boolean).length };
  });
  check(
    "timeline line sits above step cards",
    timeline.gap >= 4 && timeline.hits === 5,
    `gap=${timeline.gap}px hits=${timeline.hits}/5`
  );

  const hierarchy = await page.evaluate(() => {
    const grid = document.querySelector("#work .grid");
    const cards = [...grid.children].map((card) => Math.round(card.getBoundingClientRect().width));
    const ctas = [...grid.querySelectorAll(".btn")];
    return {
      columns: getComputedStyle(grid).gridTemplateColumns.split(" ").length,
      cards,
      primary: ctas.filter((cta) => cta.classList.contains("btn-primary")).length,
      total: ctas.length,
    };
  });
  check(
    "work grid has two columns and one primary CTA",
    hierarchy.columns === 2 &&
      hierarchy.total === 6 &&
      hierarchy.primary === 1 &&
      hierarchy.cards[0] > 900 &&
      hierarchy.cards.at(-1) > 900 &&
      hierarchy.cards.slice(1, -1).every((width) => width < 700),
    JSON.stringify(hierarchy)
  );

  await page.evaluate(() => window.scrollTo(0, 0));
  const bars = await page.evaluate(() =>
    [...document.querySelectorAll(".progress-bar")].map((el) => {
      const rect = el.getBoundingClientRect();
      return { y: Math.round(rect.y), count: document.querySelectorAll(".progress-bar").length };
    })
  );
  check(
    "single desktop progress bar under header",
    bars.length === 1 && bars[0].y >= 60 && bars[0].y <= 70,
    JSON.stringify(bars)
  );
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
  const errors = await page.evaluate(() => ({
    focused: document.activeElement?.id,
    alerts: document.querySelectorAll('[role="alert"]').length,
  }));
  check(
    "form errors are announced and focused",
    errors.focused === "contact-name" && errors.alerts >= 3,
    JSON.stringify(errors)
  );

  await page.evaluate(() => document.querySelector("#hobbies").scrollIntoView({ behavior: "instant" }));
  await page.waitForTimeout(1200);
  const images = await page.evaluate(() =>
    [...document.querySelectorAll("#hobbies img")].map((img) => ({
      complete: img.complete,
      width: img.naturalWidth,
    }))
  );
  check(
    "repair images load through next/image",
    images.length === 2 && images.every((img) => img.complete && img.width > 0),
    JSON.stringify(images)
  );
  await context.close();
}

{
  const { page, context } = await newPage(1280, 800);
  await page.goto(`${BASE}/work/pride`, { waitUntil: "domcontentloaded" });
  const meta = await page.evaluate(() => ({
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.getAttribute("content"),
    nav: Boolean(document.querySelector('nav[aria-label="Case study"]')),
    footer: Boolean(document.querySelector("footer")),
    h1: document.querySelectorAll("h1").length,
    alt: document.querySelector("main img")?.getAttribute("alt") ?? "",
  }));
  check(
    "case study has route-specific metadata",
    meta.title === "PRIDE portal | Raj G" &&
      meta.description ===
        "One platform for college competitions, used by 2,000+ students for a whole semester.",
    JSON.stringify(meta)
  );
  check(
    "case study has landmarks and alt text",
    meta.nav && meta.footer && meta.h1 === 1 && meta.alt.includes("screenshot"),
    JSON.stringify(meta)
  );
  await context.close();
}

await browser.close();

const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
if (failed.length) process.exitCode = 1;
