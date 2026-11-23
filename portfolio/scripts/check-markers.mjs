import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const roots = [
  join(process.cwd(), ".next", "server", "app"),
  join(process.cwd(), ".next", "static"),
];
const textExt = new Set([
  ".html",
  ".rsc",
  ".txt",
  ".json",
  ".js",
  ".mjs",
  ".css",
  ".xml",
  ".svg",
  ".map",
]);
const markers = ["[CHECK", "[REPLACE"];
const offenders = [];

async function walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      await walk(p);
    } else if (textExt.has(p.slice(p.lastIndexOf(".")))) {
      const text = await readFile(p, "utf8");
      for (const m of markers) {
        if (text.includes(m)) offenders.push(`${p} contains ${m}`);
      }
    }
  }
}

for (const r of roots) await walk(r);

if (offenders.length) {
  console.error(
    "\nFound unconfirmed content markers in the build output:\n  " +
      offenders.join("\n  ") +
      "\n\nReplace every [CHECK]/[REPLACE] marker before shipping.\n"
  );
  process.exit(1);
}

console.log(
  "Content marker check passed: no [CHECK] or [REPLACE] markers in output."
);
