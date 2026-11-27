import { chromium } from "playwright-core";
import os from "node:os";
import path from "node:path";

const BASE = "http://localhost:3000";
const EXE = path.join(
  os.homedir(),
  ".cache/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell"
);
const routes = ["pride", "kindled", "fresher-counter", "gexp", "gst-reconciler"];
const sizes = [
  ["d", 1440, 1000, false],
  ["m", 390, 844, true],
];

const browser = await chromium.launch({ executablePath: EXE });

for (const route of routes) {
  for (const [name, width, height, mobile] of sizes) {
    const context = await browser.newContext({
      viewport: { width, height },
      deviceScaleFactor: 1,
      hasTouch: mobile,
      isMobile: mobile,
    });
    const page = await context.newPage();
    await page.goto(`${BASE}/work/${route}`, { waitUntil: "networkidle" });
    const docHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < docHeight; y += 600) {
      await page.evaluate((nextY) => window.scrollTo(0, nextY), y);
      await page.waitForTimeout(90);
    }
    await page.evaluate(() =>
      Promise.all(
        [...document.images].map((img) =>
          img.complete
            ? null
            : new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve;
              })
        )
      )
    );
    await page.waitForTimeout(1000);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.screenshot({
      path: `/tmp/opencode/after-${route}-${name}.png`,
      fullPage: true,
    });
    const info = await page.evaluate(() => ({
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
      h1: document.querySelectorAll("h1").length,
      h2: document.querySelectorAll("h2").length,
      metrics: document.querySelectorAll(".section .sticker").length,
      features: document.querySelectorAll("ul li.sticker").length,
      stack: document.querySelectorAll(".chip-solid").length,
    }));
    console.log(route, name, JSON.stringify(info));
    await context.close();
  }
}

await browser.close();
