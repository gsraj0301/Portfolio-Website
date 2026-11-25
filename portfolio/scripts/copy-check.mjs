import fs from "node:fs";
import path from "node:path";

const routes = ["pride", "kindled", "fresher-counter", "gexp", "gst-reconciler"];
const base = path.join(process.cwd(), "app", "work");

function extractStr(content, key) {
  const m = content.match(new RegExp(`${key}:\\s*"([^"]*)"`, "s"));
  return m ? m[1] : null;
}

function extractChallengesBlock(content) {
  const m = content.match(/challenges:\s*\[([\s\S]*?)\],\s*results:/);
  if (!m) return "";
  const block = m[1];
  const bodies = [...block.matchAll(/body:\s*"([^"]*)"/g)].map((x) => x[1]);
  const fixes = [...block.matchAll(/fix:\s*"([^"]*)"/g)].map((x) => x[1]);
  return [...bodies, ...fixes].join(" ");
}

function words(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9₹' ]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

const STOPLIST = new Set([
  "a","an","the","and","or","but","if","because","as","until","while","of","at","by","for","with","about","against","between","into","through","during","before","after","above","below","to","from","up","down","in","out","on","off","over","under","again","further","then","once","here","there","when","where","why","how","all","each","few","more","most","other","some","such","no","nor","not","only","own","same","so","than","too","very","just","i","me","my","myself","we","our","ours","ourselves","you","your","yours","yourself","yourselves","he","him","his","himself","she","her","hers","herself","it","its","itself","they","them","their","theirs","themselves","what","which","who","whom","this","that","these","those","am","is","are","was","were","be","been","being","have","has","had","having","do","does","did","doing","will","would","should","could","may","might","must","can","shall","said","go","went","come","came","get","got","like"
]);

function contentWords(text) {
  return words(text).filter((w) => !STOPLIST.has(w));
}

function isSubsequence(sentence, combined) {
  let j = 0;
  for (const w of combined) {
    if (w === sentence[j]) j += 1;
    if (j === sentence.length) return true;
  }
  return false;
}

let failed = 0;
for (const route of routes) {
  const file = path.join(base, route, "page.tsx");
  const content = fs.readFileSync(file, "utf8");
  const howWent = extractStr(content, "howWent");
  const results = extractStr(content, "results") || "";
  const lessons = extractStr(content, "lessons") || "";
  const challenges = extractChallengesBlock(content);
  const combined = words(results + " " + challenges + " " + lessons);
  const howSent = sentences(howWent);
  const missing = [];
  for (const s of howSent) {
    const sw = contentWords(s);
    if (sw.length < 3) continue;
    if (!isSubsequence(sw, combined)) missing.push(s);
  }
  if (missing.length) {
    failed += 1;
    console.log(`FAIL ${route}: ${missing.length} howWent sentence(s) not preserved in results/challenges/lessons:`);
    for (const m of missing) console.log(`   - "${m}"`);
  } else {
    console.log(`PASS ${route}: all ${howSent.length} howWent sentences preserved`);
  }
}

function sentences(text) {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

if (failed) {
  console.log(`\n${routes.length - failed}/${routes.length} routes passed copy coverage`);
  process.exitCode = 1;
} else {
  console.log(`\n${routes.length}/${routes.length} routes passed copy coverage`);
}
