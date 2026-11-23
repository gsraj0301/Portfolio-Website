# SPEC.md: Raj G portfolio, page behaviour and content

This file defines the pages, navigation, motion and content behaviour for the
portfolio website. Copy lives in `CONTENT.md`. Visual rules live in `DESIGN.md`.
If this file conflicts with either, this file wins on behaviour and DESIGN.md
wins on visuals.

## 1. Global

- **Site title:** `Raj G | Apps people actually use`
- **Meta description:** `Second-year AI and Data Science student in Chennai. I build full-stack apps for my college, for businesses and free learning.`
- **Language:** English (India)
- **Social preview image:** 1200×630 px sticker‑style card with "raj g." and the headline. Generated from the hero component at build time.
- **Language switch:** Not implemented – site is English only.

## 2. Page structure

### 2.1 Home page (`/`)

Section order (from top to bottom):

1. **Hero** – stat stickers, primary/secondary buttons, handwritten note, God‑helped‑me moment if applicable.
2. **What I can build** – six capability stickers (Web apps, Desktop/mobile, Data/ML, Logins/files/email, Deploying, Working with people). Colours rotate: card, mint, blush, marigold. Max 8 chips in "Built and shipped with", max 6 in "Used or familiar with". No percentage bars, no star ratings, no technology logos.
3. **How I build** – four numbered steps (start with a real person, ship the smallest useful version, put it in front of real users, fix what breaks). Closing line about AI tools in your own words. [CHECK: closing line about AI tools].
4. **Games** – console strip (text chips, SNES to PS3, branch for Dreamcast and Sega). "About 1000 games" count‑up on first view, final value shown instantly under reduced motion. Top 5 as stickers ranked 5 down to 1 with large Display numerals, one short line per game from CONTENT.md. Marigold band. Optional: Raj's own photo of his shelf.
5. **Words** – two book‑shaped stickers (Hands That Remember, Sword That Talks). Status chip `in progress` on both. Hook paragraph below each, 62ch max. Say "I write", never "author", until something is published.
6. **Contact** – tomato band. Large email address (mailto link), LinkedIn button, GitHub button, Download resume button. Footer sign‑off in Handwritten, centred: "Built by Raj G in Chennai. Now go play something."

**Section ids for anchors and scroll‑spy:** `work`, `skills`, `games`, `words`, `contact`.

### 2.2 Case‑study pages (`/work/pride`, `/work/kindled`, `/work/fresher-counter`, `/work/gexp`, `/work/gst-reconciler`)

Single column, 62ch reading width, no tilt on body content.

Order:

1. Title and tag (H3 + tag chip).
2. Problem in one sentence.
3. Why I built it.
4. What it does (features).
5. How it went (real usage, what broke).
6. Stack as solid tech chips (with a link to `#skills` on the home page).
7. "Back to work" link at the top and bottom.

**Screenshots** – in frames between sections. Must blur or fake all private data. For apps with no live link, show a short looping screen recording (muted, `playsinline`, poster frame, under 2MB) in the same frame.

### 2.3 404 page (`/404`)

- Heading: `Page not found`
- Line: `This sticker fell off the board.`
- Button: `Go home`

### 2.4 Navigation

**Desktop (1024+):** top bar. Logo "raj g." in Display 800 (links to the top of the home page), then pill links: `work`, `skills`, `games`, `words`, `resume`. `say hi` is the tomato pill and jumps to `#contact`. The pill for the section currently in view gets marigold fill (scroll‑spy state change, not an animation). Include a visible "skip to content" link as the first focusable element.

**Mobile:** floating bottom pill, ink fill, paper icons with visible text labels under each icon (labels at 14px). Exactly four items, in this order: `Work`, `Skills`, `Games`, `Contact`. The current section's item gets a marigold circle behind its icon. Respect `env(safe-area-inset-bottom)`. Each target at least 44×44px.

**On case‑study pages** the nav is replaced by a "Back to work" pill at the top and bottom. The mobile bottom pill is not shown there.

### 2.4 Skills section

Six capability stickers (content in `CONTENT.md`). Layout: bento grid on desktop (two wide stickers, four standard), single column on mobile with every sticker fully visible (no accordions, no carousels). Tilt and fills follow the normal sticker rules. Fills rotate through card, mint, blush, marigold.

Anatomy of a capability sticker, top to bottom:

1. Title (H3): the capability in plain words, such as "Web apps with logins and databases".
2. One sentence (Body) on what Raj can build with it.
3. Row label in Body 500 sentence case: "Built and shipped with". Below it, tech chips: solid chips, card fill, `--line`. Maximum 8 chips.
4. Row label: "Used or familiar with". Below it, tech chips in a quieter style: paper fill, 2px dashed ink outline, no shadow. Maximum 6 chips. This row is optional per sticker.
5. Row label: "Seen in". Below it, project chips: marigold fill, `--line`, `--shadow-hard-sm`. Each is a link. It goes to the project's case‑study page if one exists, otherwise to its GitHub repo (opens in a new tab, with an external‑link icon). Accessible name: "PRIDE portal case study".

**Rules:**

- No percentage bars, star ratings, skill meters, or "proficiency" labels.
- No technology logos. Text chips only.
- A technology appears under "Built and shipped with" only if it is used in a listed project. Everything else goes in the dashed "Used or familiar with" row or is left out.
- Tech chips are not links. Only project chips are links.
- Section intro (H2 plus one sentence) sits above the grid, left-aligned.
- Hover (pointer devices): project chips use the button hover lift. Tech chips do not react.
- Case‑study pages list their stack as the same solid tech chips, plus a link to `#skills` on the home page.

### 2.5 "Also built" strip (under the Skills grid, above Games)

Small stickers, no screenshots, no case‑study pages. Link to GitHub.

- Fake Job Posting Detector: one plain line plus one result you can explain in an interview. Repo: [REPLACE].
- Hand Gesture system: one plain line. [OPTIONAL – only if Raj has a repo].
- Optional, only if Raj wants it: Traqo, a live school‑transport app (`https://busops.onrender.com`). [REPLACE: yes or no, plus one line].

### 2.6 Quote strip ("What people said")

Appears only if real quotes exist. Never write or polish a quote on someone's behalf. One or two stickers, card fill, tilt no more than 1.5 degrees. The quote is Body 500 at 1.25rem (not handwritten). Under it: name and role in Body 400, `--ink-soft`. No avatars, no quotation‑mark icons. If no quotes are provided, the section does not render and leaves no empty gap.

### 2.7 Motion (principle: one orchestrated moment, plus motion that responds to a person's action. Nothing else moves.)

1. **Hero slap** (page load, once): the hero stickers scale from 1.25 to 1 and settle into their tilt, staggered 90ms, 450ms each, ease‑out with a small overshoot. Total under 1.1s. Headline and buttons are visible immediately and do not animate.
2. **Press and hover on buttons and project stickers:** Duration 120ms. Translate -2px -2px and grow shadow to `--shadow-hard-lg` on hover; translate 2px 2px and shrink shadow to `--shadow-hard-sm` on press.
3. **Sticker wiggle on hover** (pointer devices only): rotate +/-2 degrees once, 200ms. Only on stat stickers and project stickers.
4. **Games count‑up** (one time, 900ms).
5. **Optional easter‑egg:** typing the Konami code makes the cursor a pixel arrow and drops a handful of pixel‑art stickers once.

Under `prefers-reduced-motion: reduce`: no slap, no wiggle, no count‑up, no easter‑egg animation. Everything renders in its final state.

Never animate layout properties. Animate `transform` and `opacity` only.

### 2.8 SEO, a11y, performance

- **WCAG AA contrast** for all text and UI. Re‑check every fill and ink pair.
- **Visible focus** on everything focusable: `outline: 3px solid var(--ink); outline-offset: 3px;` plus `box-shadow: 0 0 0 6px var(--marigold)`.
- **Tap targets** at least 44×44px.
- **Logical heading order**, one H1 per page, landmarks for header, main, nav, footer.
- **Meaningful alt text** on every screenshot. Decorative doodles are `aria-hidden`.
- **Never use colour alone** to carry meaning.
- **Mobile first.** Verify at 360, 390, 768, 1280 and 1440px widths.
- **No horizontal page scroll** at any width. Only the games timeline scrolls sideways, inside its own container.
- **Images:** WebP or AVIF, explicit width and height, lazy‑load below the fold, `srcset` for screenshots.
- **Fonts:** three families, Latin subset, `font-display: swap`, preload the display font only.
- **No 3D, no canvas, no video over 2MB**, no animation libraries beyond what the motion list above needs.
- **Targets on a mid‑range Android phone over 4G:** LCP under 2.5s, CLS under 0.1, Lighthouse performance 90+, accessibility 100.

### 2.9 Replacement checklist (from CONTENT.md)

| # | Where it goes | What Raj provides |
|---|---|---|
| 1 | Global, social preview | 1200×630 preview image |
| 2 | Hero | One photo of Raj |
| 3 | What people said | Exact quote, name, role, permission (class incharge, optional second person) |
| 4 | PRIDE | Problem, why, 3 to 4 features, one thing that broke, screenshot |
| 5 | Kindled | Live URL, stack, features, one verified GA4 number, screenshot (after fixing the category typo) |
| 6 | Fresher's counter | Live URL, database, who sees totals, screenshot with no real names |
| 7 | Gexp | Problem, why, who uses it, APK release link, screen recording with blurred data |
| 8 | GST Reconciler | Why, time saved if provable, release link, screen recording with fake data, confirm repo sample data is fake |
| 9 | Also built | Lines and repos for Fake Job Posting Detector and Hand Gesture system, decision on Traqo |
| 10 | Skills | Prune every chip you can't explain in an interview, fill the ML libraries |
| 11 | How I build | Your own closing line about AI tools |
| 12 | Games | Real console list, optional shelf photo |
| 13 | Words | Hook paragraph for each novel |
| 14 | Contact | Resume PDF |

---
*This file lives alongside CONTENT.md and DESIGN.md. All copy must respect the markers `[REPLACE]` (Raj must supply) and `[CHECK]` (Raj must confirm). When a field says `[REPLACE]`, stop and ask for it instead of filling it in.*