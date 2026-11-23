# SPEC.md: Raj G portfolio, page behaviour and content

> Last updated: 2026-11-23 (matches the shipped site)

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

1. **Hero** – headline, sub-line, two buttons, circular photo avatar with handwritten name, stat stickers (2,000+ students / About 1,000 games / 2 novels), handwritten "(yes, really)".
2. **Work** – bento grid of six project stickers: PRIDE (feature, spans 2 columns, real stats), Kindled, Fresher's counter, Gexp, GST Reconciler, Fake Job Posting Detector. Screenshots (where provided) sit above the stack chips. Each card has a CTA plus "Read the story" where a case-study page exists.
3. **What I can build** – six capability stickers (Web apps, Desktop/mobile, Data/ML, Logins/files/email, Putting things online, Working with people). Colours rotate: card, mint, blush, marigold. Max 8 chips in "Built and shipped with", max 6 in "Used or familiar with" (row hidden when empty). No percentage bars, no star ratings, no technology logos.
4. **How I build** – four numbered steps (start with a real person, ship the smallest useful version, put it in front of real users, fix what breaks). Closing line: "I use AI coding tools as my hands. I decide what gets built, read what they write, and fix what breaks." Blush band.
5. **Games** – console strip (text chips, SNES to PS3 & PC). Static "About 1,000" figure (deliberately not a count-up, so it never reads as exact), caption "games I play". Top 5 as stickers ranked 5 down to 1 with large Display numerals and Raj-supplied box-art thumbnails; one short line per game from CONTENT.md. Marigold band.
6. **Words** – two book‑shaped stickers (Hands That Remember, Sword That Talks). Status chip `in progress` on both. Hook paragraphs pending from Raj; genre lines shown meanwhile. Say "I write", never "author", until something is published.
7. **Contact** – tomato band. Large email address (mailto link), LinkedIn button, GitHub button, Download resume button, then the Supabase contact form (name, email, message). Footer sign‑off in Handwritten, centred: "Built by Raj G in Chennai."

**Section ids for anchors and scroll‑spy:** `work`, `skills`, `games`, `words`, `contact`.

### 2.2 Case‑study pages (`/work/pride`, `/work/kindled`, `/work/fresher-counter`, `/work/gexp`, `/work/gst-reconciler`)

All five routes are live. Single column, 62ch reading width, no tilt on body content.

Order:

1. Title and tag (H1 + tag chip), intro line.
2. **At-a-glance strip** – role, stack, status, link. Metadata, not a fifth beat.
3. Problem in one sentence.
4. Why I built it.
5. What it does (features).
6. How it went (real usage, what broke).
7. Screenshot (where provided), above the Stack section.
8. Stack as solid tech chips (with a link to `/#skills` on the home page).
9. CTA links (live site / repo) and "Back to work" at the top and bottom.

**Copy rules:** no emoji, no em dashes (commas/full stops instead), "God helped me" at most once per study and only where it genuinely happened (PRIDE, Gexp). No `[CHECK]`/`[REPLACE]` markers may reach the build output (enforced by `scripts/check-markers.mjs`).

**Screenshots** – must blur or fake all private data (GST handles other firms' financial data: fake data only). Provided for PRIDE, Kindled, GST; pending for Fresher's counter and Gexp.

### 2.3 404 page (`/404`)

- Heading: `Page not found`
- Line: `This sticker fell off the board.`
- Button: `Go home`

### 2.4 Navigation

**Desktop (1024+):** sticky top bar. Logo "Raj G" in Display 800 (links to the top of the home page), then pill links: `Work`, `Skills`, `Games`, `Words`, `Resume` (opens the PDF in a new tab). `Say hi` is the tomato pill and jumps to `#contact`. The pill for the section currently in view gets marigold fill (scroll‑spy state change, not an animation). Include a visible "skip to content" link as the first focusable element.

**Mobile:** non-sticky top bar with the "Raj G" logo (left) and a `Resume` pill (right, opens the PDF in a new tab). Plus a floating bottom pill, ink fill, paper icons with visible text labels under each icon (labels at 14px). Exactly four items, in this order: `Work`, `Skills`, `Games`, `Contact`. The current section's item gets a marigold circle behind its icon. Respect `env(safe-area-inset-bottom)`. Each target at least 44×44px.

**Anchor offsets:** `scroll-margin-top` 24px below 1024px, 88px at 1024+ (sticky header). Smooth scrolling, disabled under reduced motion.

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

### 2.5 "Also built" (resolved)

There is no separate strip. **Fake Job Posting Detector** is a standard Work card (no case-study page): "Flags fraudulent job postings: 90% recall, ROC-AUC 0.989, trained on 17,880 Kaggle postings." CTA links to `https://github.com/gsraj0301/Fake-Job-Posting-Detector`. The Data/ML capability sticker's "Seen in" links to the same repo. Hand Gesture system and Traqo were dropped.

### 2.6 Quote strip ("What people said")

Appears only if real quotes exist. Never write or polish a quote on someone's behalf. One or two stickers, card fill, tilt no more than 1.5 degrees. The quote is Body 500 at 1.25rem (not handwritten). Under it: name and role in Body 400, `--ink-soft`. No avatars, no quotation‑mark icons. If no quotes are provided, the section does not render and leaves no empty gap.

### 2.7 Motion (principle: one orchestrated moment, plus motion that responds to a person's action. Nothing else moves.)

1. **Hero slap** (page load, once): the hero stickers scale from 1.25 to 1 and settle into their tilt, staggered 0/90/180ms, 450ms each, ease‑out. Headline and buttons are visible immediately and do not animate. Implemented as CSS keyframes, no library.
2. **Press and hover on buttons and project chips:** Duration 120ms. Translate -2px -2px and grow shadow to `--shadow-hard-lg` on hover; translate 2px 2px and shrink shadow to `--shadow-hard-sm` on press.
3. **Smooth anchor scroll** for nav jumps (auto under reduced motion).

Not implemented (deliberately): games count-up (the figure is static "About 1,000" so it never reads as exact), sticker wiggle, Konami easter egg.

Under `prefers-reduced-motion: reduce`: no slap, no smooth scroll, no transitions. Everything renders in its final state.

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

### 2.9 Contact form (Supabase)

- Fields: name, email, message (all required, labeled, autocomplete on).
- Submit inserts into `public.contacts` via the anon Supabase client; button shows "Sending..." while in flight; success/error render as readable card pills (ink on card, never colour-on-colour). Mailto is the fallback on error.
- Backend requirements: RLS enabled, anon insert policy, and `grant insert on public.contacts to anon` (new Supabase projects do not auto-grant; without it inserts return 401).
- Env: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `portfolio/.env` (gitignored) and in Vercel project settings.

### 2.10 Build guard

`npm run build` runs `next build && node scripts/check-markers.mjs`. The script scans the built output (`.next/server/app`, `.next/static`) and fails the build if `[CHECK` or `[REPLACE` appears anywhere, so unconfirmed copy can never ship.

### 2.11 Replacement checklist (status)

| # | Where it goes | Status |
|---|---|---|
| 1 | Global, social preview | Pending (no OG image yet) |
| 2 | Hero photo | Done (`public/raj.jpg`, compressed 400×400) |
| 3 | What people said | Pending: exact quote, name, role, permission. Section not rendered until provided |
| 4 | PRIDE | Done: copy + screenshot (`images/pride.png`) |
| 5 | Kindled | Done: live URL, stack, GA4 timeline, screenshot (`images/kindled.png`) |
| 6 | Fresher's counter | Copy + live URL done; screenshot pending |
| 7 | Gexp | Copy done (in daily use, two taps); screenshot + APK release link pending (CTA points at repo) |
| 8 | GST Reconciler | Copy + screenshot done (fake data only); .exe release link pending (CTA points at repo) |
| 9 | Also built | Done: Fake Job Posting Detector is a Work card. Hand Gesture/Traqo dropped |
| 10 | Skills | Done: tiers reconciled with projects (Django/Supabase/PythonAnywhere/GitHub Actions/bcrypt) |
| 11 | How I build | Done: AI-tools line in Raj's words |
| 12 | Games | Done: console list, box art, static "About 1,000" |
| 13 | Words | Pending: hook paragraph for each novel |
| 14 | Contact | Done: resume PDF + Supabase form (grant insert required) |

---
*This file lives alongside CONTENT.md and DESIGN.md. All copy must respect the markers `[REPLACE]` (Raj must supply) and `[CHECK]` (Raj must confirm). When a field says `[REPLACE]`, stop and ask for it instead of filling it in.*