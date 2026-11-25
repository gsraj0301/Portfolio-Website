# SPEC.md: Raj G portfolio, page behaviour and content

> Last updated: 2026-11-25 (matches the shipped site)

This file defines the pages, navigation, motion and content behaviour for the
portfolio website. Copy lives in `CONTENT.md`. Visual rules live in `DESIGN.md`.
If this file conflicts with either, this file wins on behaviour and DESIGN.md
wins on visuals.

## 1. Global

- **Site title:** `Raj G | Apps people actually use`
- **Meta description:** `Second-year AI and Data Science student in Chennai. I build full-stack apps for my college, for businesses and free learning.`
- **Language:** English (India)
- **Social preview image:** 1200×630 px sticker‑style card with "Raj G" and the headline. Generated from the hero component at build time.
- **Language switch:** Not implemented – site is English only.

## 2. Page structure

### 2.1 Home page (`/`)

Section order (from top to bottom):

1. **Hero** – headline, sub-line, two buttons, die-cut photo sticker with handwritten name, stat stickers (2,000+ students / About 1,000 games / 2 novels), handwritten "(yes, really)".
2. **What people said** – conditional quote strip (renders only if real quotes exist; no empty gap).
3. **Work** – two-column bento grid of six project stickers: PRIDE (feature, spans 2 columns, screenshot on right at desktop, no stats panel), Kindled, Fresher's counter, Gexp, GST Reconciler, Fake Job Posting Detector (compact full-width row, no stack chips). PRIDE is the only tomato primary CTA; the other five are paper secondary. Card anatomy: tag, title, card line, optional screenshot, stack chips, CTA, "Read the story" link when case study exists.
4. **What I can build** – six capability stickers (Web apps, Desktop/mobile, Data/ML, Logins/files/email, Putting things online, Working with people). Colours rotate: card, mint, blush, marigold. Max 8 chips in "Built and shipped with", max 6 in "Used or familiar with" (row hidden when empty). No percentage bars, no star ratings, no technology logos.
5. **How I build** – four numbered tilt-varied stickers (start with a real person, ship the smallest useful version, put it in front of real users, fix what breaks). The desktop dashed connector draws above the cards with a small gap. Closing line: "I use AI coding tools as my hands. I decide what gets built, read what they write, and fix what breaks." Blush band.
6. **Hobbies** – marigold band. Heading "When I'm not coding", intro line. Games sticker with animated count-up "About 1,000" (900ms on first intersection, final under reduced motion), console strip (text chips), text-only top 5 ranked 5→1 (no box art). Old PCs sticker: 5 PCs / 3 laptops display numerals, copy, optional repair photos in screenshot frames. Writing sticker: two book stickers (Hands That Remember, Sword That Talks) with genre, status `in progress`, no hooks. Reading sticker: two paragraphs. Chess sticker: inline SVG checkerboard + copy. Tinkering omitted. No box art, no console logos, no clip art.
7. **Contact** – tomato band, two-column desktop layout. Left: large email (mailto), LinkedIn/GitHub/Resume buttons. Right: Supabase contact form with labels (no placeholders), honeypot, inline errors announced with `role="alert"` (submit focuses the first invalid field), 1,000 char limit, card-fill submit "Send message"/"Sending", success "Got it. I'll reply soon.", error with mailto fallback, privacy line. Footer sign‑off in Handwritten, centred: "Built by Raj G in Chennai." Hero and Contact now live inside the same `<main>` landmark as the rest of the page.

**Section ids for anchors and scroll‑spy:** `work`, `skills`, `hobbies`, `contact`.

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
9. CTA links (live site / repo) and "Back to work" at the top and bottom, wrapped in nav and footer landmarks. Each route supplies its own title and description metadata and descriptive screenshot alt text.

**Copy rules:** no emoji, no em dashes (commas/full stops instead), "God helped me" at most once per study and only where it genuinely happened (PRIDE, Gexp). No `[CHECK]`/`[REPLACE]` markers may reach the build output (enforced by `scripts/check-markers.mjs`).

**Screenshots** – must blur or fake all private data (GST handles other firms' financial data: fake data only). Provided for PRIDE, Kindled, GST; pending for Fresher's counter and Gexp.

### 2.3 404 page (`/404`)

- Heading: `Page not found`
- Line: `This sticker fell off the board.`
- Button: `Go home`

### 2.4 Navigation

**Desktop (1024+):** sticky top bar. Logo: small round photo first, then `Raj G` in Display 800 (links to the top of the home page), then pill links: `Work`, `Skills`, `Hobbies`, `Resume` (opens the PDF in a new tab). `Say hi` is the tomato pill and jumps to `#contact`. The pill for the section currently in view gets marigold fill (scroll‑spy state change, not an animation). Include a visible "skip to content" link as the first focusable element. Active pill starts empty (no section highlighted on load).

**Mobile:** non-sticky top bar with the photo-plus-`Raj G` logo only (left, no Resume pill). Plus a fixed bottom pill, ink fill, paper icons with visible text labels (14px). Exactly four items, in this order: `Work`, `Skills`, `Hobbies`, `Contact` (icons: briefcase, wrench, coffee, mail). The current section's item gets a marigold circle behind its icon (scales/fades in over 200ms, transform/opacity only); items scale to 95% while pressed. Respect `env(safe-area-inset-bottom)`. Each target at least 44×44px.

**Anchor offsets:** `scroll-margin-top` 24px below 1024px, 88px at 1024+ (sticky header). Smooth scrolling, disabled under reduced motion.

**On case‑study pages** the nav is replaced by a "Back to work" pill at the top and bottom. The mobile bottom pill is not shown there.

### 2.5 Skills section

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

### 2.6 "Also built" (resolved)

There is no separate strip. **Fake Job Posting Detector** is a standard Work card (no case-study page): "Flags fraudulent job postings: 90% recall, ROC-AUC 0.989, trained on 17,880 Kaggle postings." CTA links to `https://github.com/gsraj0301/Fake-Job-Posting-Detector`. The Data/ML capability sticker's "Seen in" links to the same repo. Hand Gesture system and Traqo were dropped.

### 2.7 Quote strip ("What people said")

Appears only if real quotes exist. Never write or polish a quote on someone's behalf. One or two stickers, card fill, tilt no more than 1.5 degrees. The quote is Body 500 at 1.25rem (not handwritten). Under it: name and role in Body 400, `--ink-soft`. No avatars, no quotation‑mark icons. If no quotes are provided, the section does not render and leaves no empty gap.

### 2.8 Motion (principle: one orchestrated moment, plus motion that responds to a person's action. Nothing else moves.)

1. **Hero slap** (first load on desktop, first view under 640px, once): the hero stickers scale from 1.25 to 1 and settle into their tilt, staggered 0/90/180ms, 450ms each, ease‑out with a small overshoot. Total under 1.1s. Under 640px the overshoot is 1.12 and the animation stays paused until the cluster scrolls into view; desktop is unchanged. Headline and buttons are visible immediately and do not animate. Implemented as CSS keyframes, no library.
   - Hero photo sticker slaps in at 270ms delay.
   - Handwritten "(yes, really)" note fades and rises at 360ms delay.
2. **Hero statistics count-up** (first view, once): the "2,000+" and "2 novels" stat stickers count up from 0 over 900ms with ease-out-cubic; SSR renders final value, so no-JS and reduced-motion show the final figure. The first animation frame resets to 0, values are clamped, and no negative number is ever rendered. Staggered 0/90/180ms with the slap.
3. **Games count-up** (first intersection, once): "About 1,000" animates from 0 to 1,000 over 900ms using `requestAnimationFrame`; SSR renders final value; under `prefers-reduced-motion` stays at 1,000.
4. **How I build timeline** (first intersection, once): dashed perforation line draws left-to-right above the four step cards at desktop (≥1024px) over 700ms expo-out, with a small gap so rotated cards cannot cover it; step numbers pop in sequence (100ms + i×160ms). Mobile: no connector (numbers convey sequence).
5. **Sticker wiggle** (hover/tap): stat stickers and project cards wiggle once, 200ms, preserving `--tilt-effective`. Pointer devices wiggle on hover; touch wiggle fires on pointer release; disabled under reduced motion.
6. **Press and hover on buttons and stat/project stickers:** Duration 120ms. Hover: shadow grows to `--shadow-hard-lg` (box-shadow only, no transform conflict with wiggle). Press: translate 2px 2px, shadow shrinks to `--shadow-hard-sm`. Press is pointer-driven so it works on touch devices; touches starting on a card's links or buttons do not press the card, and `pointercancel` clears the press when scrolling takes over.
7. **Contact form micro-interactions:** Invalid fields shake 200ms (transform only); success card scales in 200ms (pop-in); submit button shows `aria-busy` while sending.
8. **Route crossfade** (180ms): opacity crossfade between home and case-study pages via `app/template.tsx`. Disabled under reduced motion.
9. **Scroll progress bar:** one 3px marigold bar, fixed at viewport top on mobile and absolute under the sticky desktop header, scales with scroll. Updates under reduced motion as state indicator.
10. **Smooth anchor scroll** for nav jumps (auto under reduced motion).

Under `prefers-reduced-motion: reduce`: no slap, no count-ups, no timeline, no wiggle, no crossfade, no smooth scroll, no transitions. Everything renders in its final state. Scroll progress bar still updates (state indicator).

Never animate layout properties. Animate `transform` and `opacity` only.

### 2.9 SEO, a11y, performance

- **WCAG AA contrast** for all text and UI. Re‑check every fill and ink pair.
- **Visible focus** on everything focusable: `outline: 3px solid var(--ink); outline-offset: 3px;` plus `box-shadow: 0 0 0 6px var(--marigold)`.
- **Tap targets** at least 44×44px.
- **Logical heading order**, one H1 per page, landmarks for header, main, nav, footer.
- **Meaningful alt text** on every screenshot. Decorative doodles are `aria-hidden`.
- **Never use colour alone** to carry meaning.
- **Mobile first.** Verify at 360, 390, 768, 1280 and 1440px widths.
- **No horizontal page scroll** at any width. Only the console strip scrolls sideways, inside its own container.
- `node scripts/motion-check.mjs` verifies 360, 390, 768, 1280 and 1440px plus stat layout, clamped count-ups, tap targets, timeline placement, CTA hierarchy, single progress bar, form error a11y, image loading and case-study metadata.
- **Images:** JPEG/PNG sources optimized by `next/image` to WebP/AVIF; explicit width and height, lazy‑load below the fold, `srcset` for screenshots.
- **Fonts:** three families, Latin subset, `font-display: swap`, preload the display font only.
- **No 3D, no canvas, no video over 2MB**, no animation libraries beyond what the motion list above needs.
- **Targets on a mid‑range Android phone over 4G:** LCP under 2.5s, CLS under 0.1, Lighthouse performance 90+, accessibility 100.

### 2.10 Contact form (Supabase)

- Fields: name, email, message (all required, labeled above fields, no placeholders, autocomplete on); message max 1,000 chars; honeypot field (`website`) off-screen, `aria-hidden`, `tabIndex=-1`.
- Inline field errors with `AlertCircle` icon and accessible `aria-describedby`; each error has `role="alert"`, and submit focuses the first invalid field.
- Submit inserts into `public.contacts` via the anon Supabase client; button shows "Sending" while in flight; success replaces form with `Got it. I'll reply soon.` (role="status"); error renders as card pill with mailto fallback `The send did not go through. Email me at gsraj.developer@gmail.com instead.` (role="alert"); privacy line `I'll only use your email to reply to you.`.
- Backend requirements: RLS enabled, anon insert policy, and `grant insert on public.contacts to anon` (new Supabase projects do not auto-grant; without it inserts return 401).
- Env: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `portfolio/.env` (gitignored) and in Vercel project settings.

### 2.11 Build guard

`npm run build` runs `next build && node scripts/check-markers.mjs`. The script scans the built output (`.next/server/app`, `.next/static`) and fails the build if `[CHECK` or `[REPLACE` appears anywhere, so unconfirmed copy can never ship.

### 2.12 Replacement checklist (status)

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
| 9 | Fake Job Posting Detector | Done: small Work card, no stack chips |
| 10 | Skills | Done: tiers reconciled with projects (Django/Supabase/PythonAnywhere/GitHub Actions/bcrypt) |
| 11 | How I build | Done: AI-tools line in Raj's words |
| 12 | Hobbies: Games | Done: console list, text-only top 5, animated count-up |
| 13 | Hobbies: Old PCs, Writing, Reading, Chess | Done: copy + repair photos |
| 14 | Contact | Done: resume PDF + Supabase form (grant insert required) |

---
*This file lives alongside CONTENT.md and DESIGN.md. All copy must respect the markers `[REPLACE]` (Raj must supply) and `[CHECK]` (Raj must confirm). When a field says `[REPLACE]`, stop and ask for it instead of filling it in.*