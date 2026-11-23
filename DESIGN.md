# DESIGN.md: Raj G portfolio, "sticker board" style

Read this before writing any UI. It defines how the site looks and moves.
Copy lives in `CONTENT.md`. Behaviour and pages live in `SPEC.md`. If this file
conflicts with either, this file wins on visuals and those files win on content
and behaviour.

## 1. The idea in one paragraph

The site is a board covered in stickers. Warm paper background, thick ink
outlines, hard offset shadows, slight tilts, and a few hand-drawn marks. Cards
are stickers. Stats are stickers. The only loud colours are tomato and
marigold, and they appear in small, deliberate doses. The personality comes
from real content (Raj's own screenshots, photo, doodles and voice), not from
effects. Playful, but every page must still read as a professional portfolio
within two seconds.

The one memorable thing: the hero sticker cluster that "slaps" onto the board on
first load. Everything else stays calm so that moment lands. Do not add other
attention-grabbing effects.

## 2. Hard rules (the "must not look AI-made" list)

Do not do any of these. If a component seems to need one, redesign the component.

- No dark mode. Light only. Set `color-scheme: light`.
- No gradients, glassmorphism, blurred shadows, glows, or neon.
- No purple, indigo or blue-to-purple anything.
- No soft grey drop shadows. Shadows are hard, offset, zero blur, ink coloured.
- No row of three identical rounded cards. Vary size, tilt and radius by importance.
- No ALL CAPS labels. No small tracked-out eyebrow above headings.
- No meta strings joined with middle dots (A · B · C).
- No single word in a headline highlighted, italicised or recoloured.
- No numbered markers (01, 02, 03) unless the content is a real sequence. The
  games top 5 is a real ranking, so numbers are allowed there only.
- No arrow glyph appended to button or link text.
- No monospace font for small labels.
- No fade-up-on-scroll on every section. No hover transition on everything.
- No stock illustrations, stock photos, or emoji.
- No lorem ipsum. If copy is missing, stop and ask for it.
- No game box art, console logos, or other copyrighted artwork. Use text only.
- No skill bars, percentages, star ratings, or technology logos in the skills
  section.

## 3. Colour

Six named colours. Nothing else.

| Token | Name | Hex | Role |
| --- | --- | --- | --- |
| `--paper` | Paper | `#FFF3D6` | Page background |
| `--card` | Card | `#FFFFFF` | Sticker faces, text panels |
| `--ink` | Ink | `#1C1713` | All text, all outlines, all shadows |
| `--tomato` | Tomato | `#FF5A36` | Primary buttons, one accent sticker per view |
| `--marigold` | Marigold | `#FFC93C` | Highlight stickers, focus ring, games band |
| `--mint` | Mint | `#BFE3D0` | Secondary sticker fill, tags |
| `--blush` | Blush | `#FFE1D6` | Tertiary sticker fill, how-I-build band |

Plus one text tone: `--ink-soft: #5A4E44` for secondary text on paper or card.

Usage rules:

- Ink on every fill. Never white text. Never coloured text, with one exception:
  tomato text is allowed only at 24px or larger on paper.
- Marigold is never used for text.
- At most one tomato element per screen section besides the primary button.
- Page background is Paper. Full-bleed colour bands are limited to three on the
  whole page: Blush (how I build), Marigold (games), Tomato (contact).
- Verify every text and fill pair for WCAG AA contrast before finishing.

```css
:root {
  color-scheme: light;
  --paper: #FFF3D6;
  --card: #FFFFFF;
  --ink: #1C1713;
  --ink-soft: #5A4E44;
  --tomato: #FF5A36;
  --marigold: #FFC93C;
  --mint: #BFE3D0;
  --blush: #FFE1D6;

  --line: 2px solid var(--ink);
  --line-heavy: 3px solid var(--ink);
  --shadow-hard: 4px 4px 0 var(--ink);
  --shadow-hard-lg: 6px 6px 0 var(--ink);
  --shadow-hard-sm: 2px 2px 0 var(--ink);

  --r-sticker: 12px;
  --r-panel: 20px;
  --r-pill: 999px;
}
```

## 4. Typography

Three families, no more. Self-host and subset to Latin. Use variable fonts
where possible to keep file count low.

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display | Bricolage Grotesque | 700, 800 | Headlines, sticker titles, numerals |
| Body | Figtree | 400, 500, 700 | Paragraphs, buttons, nav, tags |
| Handwritten | Caveat | 600 | Margin notes only. Max 3 uses per page |

Scale (fluid, mobile first):

| Style | Size | Line height | Family |
| --- | --- | --- | --- |
| Display XL (hero) | `clamp(2.5rem, 8vw, 5.25rem)` | 1.02 | Display 800 |
| H2 (section) | `clamp(1.875rem, 4.5vw, 3rem)` | 1.08 | Display 800 |
| H3 (card title) | `1.375rem` | 1.2 | Display 700 |
| Body | `1.0625rem` | 1.6 | Body 400 |
| Small | `0.9375rem` | 1.5 | Body 400 |
| Tag / caption | `0.875rem` | 1.3 | Body 500 |
| Margin note | `1.5rem` | 1.1 | Handwritten |

Rules:

- Minimum text size anywhere is 14px. No 11px text (the preview mockup used it
  for illustration only).
- Sentence case everywhere. Headlines, buttons, tags, nav.
- Line length for paragraphs: 45 to 65 characters. Use `max-width: 62ch`.
- Left-align all body text and headlines. Centre only the footer sign-off.
- Handwritten text is a margin note: short, slightly rotated (-4 to -2 degrees),
  never a label that carries essential information.
- Letter-spacing: 0 on body. -0.01em on Display XL and H2.

## 5. Layout and spacing

- Container: `max-width: 1200px`, side padding 20px (mobile), 32px (tablet),
  48px (desktop).
- Grid: 4 columns on mobile, 8 on tablet, 12 on desktop. Gap 16, 24, 24.
- Breakpoints: 360 (base), 640, 1024, 1280.
- Spacing scale (px): 4, 8, 12, 16, 24, 32, 48, 72, 112. Use only these.
- Section vertical padding: 72 on mobile, 112 on desktop.
- Section divider: a dashed 2px ink line like a sticker sheet perforation. Use
  it only between paper sections. Colour bands need no divider.

Alignment: everything left-aligned on a visible grid. Stickers break the grid
only through tilt and small offsets (max 12px), never through random placement.

### Page flow

```
Hero            paper
What people said paper       (one or two real quotes, only if provided)
Work            paper        (bento grid of project stickers)
Skills          paper        (capability stickers, see section 7)
How I build     blush band
Games           marigold band
Words           paper        (two novels)
Contact         tomato band  (footer sign-off inside)
```

Work and Skills are both on paper. Separate them with the dashed perforation
divider. Section ids for anchors and scroll-spy: `work`, `skills`, `games`,
`words`, `contact`.

### Hero wireframe

Desktop (12 columns):

```
[ raj g.   work  skills  games  words  resume  [say hi] ]
|                                |               |
|  I build things people         |  [sticker]    |
|  actually use.                 |     [sticker] |
|  Apps for my college, my       |  [sticker]    |
|  dad's business, and anyone    |   (yes, really)
|  who wants to learn for free.  |               |
|  [see my work]  [say hi]       |               |
```

Mobile (4 columns): headline, one-line sub, two buttons, then the sticker
cluster stacked and overlapping slightly, then the bottom floating nav.

Headline is plain. No highlighted word. The sticker cluster and the handwritten
note carry the personality.

## 6. Shape language

- Outlines: `--line` (2px) on stickers, `--line-heavy` (3px) on hero elements.
- Shadows: hard offset only. Resting `--shadow-hard`. Large hero stickers
  `--shadow-hard-lg`. Small chips `--shadow-hard-sm`. On screens under 640px,
  reduce each by 1px.
- Radii vary by role on purpose: chips and buttons are pills, stickers are 12px,
  big panels are 20px, screenshots are 10px. Do not use one radius everywhere.
- Tilt: stickers rotate between -3 and +3 degrees. Assign tilt by index from a
  fixed list so it is deterministic and never changes between renders:
  `[-3, 2, -1.5, 1.5, -2, 3, -1, 2.5]`. Halve every value under 640px.
- Never tilt text a person has to read at length (case-study body copy, forms).
- Overlap: stickers may overlap neighbours by up to 12px. Later stickers sit on
  top. Overlap must never hide text.

## 7. Components

### Sticker (base)
Card or colour fill, `--line`, `--shadow-hard`, `--r-sticker`, padding 12 to 16,
optional tilt. Everything else below is a variant.

### Stat sticker
Hero cluster and elsewhere. Display 700 number or short phrase plus a Body line.
Real facts only (see `CONTENT.md`). Fills rotate through marigold, card, mint.

### Buttons
- Primary: tomato fill, ink text, `--line`, `--shadow-hard`, pill radius.
  Min height 48px. Label is a verb phrase in sentence case ("See my work").
- Secondary: paper fill, same outline and shadow.
- Pressed state: translate 2px 2px and shrink shadow to `--shadow-hard-sm`.
- Hover (pointer devices only): translate -2px -2px and grow shadow to
  `--shadow-hard-lg`. No colour change.

### Nav
- Desktop (1024+): top bar. Logo "raj g." in Display 800 (links to the top of
  the home page), then pill links: work, skills, games, words, resume. "Say hi"
  is the tomato pill and jumps to contact. "Resume" opens the PDF in a new tab.
  The pill for the section currently in view gets marigold fill (scroll-spy
  state change, not an animation).
- Mobile: floating bottom pill, ink fill, paper icons with visible text labels
  under each icon (labels at 14px). Exactly four items, in this order: Work,
  Skills, Games, Contact. Icons from the single icon set: briefcase, wrench,
  gamepad, mail. The current section's item gets a marigold circle behind its
  icon. Respect `env(safe-area-inset-bottom)`. Each target at least 44x44px.
- Mobile also shows the small "raj g." logo at the top-left of the page (not
  sticky). It scrolls to the top. The resume link on mobile lives in the
  contact section.
- On case-study pages the nav is replaced by a "Back to work" pill at the top
  and bottom. The mobile bottom pill is not shown there.
- Include a visible "skip to content" link as the first focusable element.

### Project sticker
Anatomy: tag chip (type of project), title (H3), one-line problem, optional
screenshot, one CTA. Sizes:

- Feature (PRIDE portal): spans 2 columns on desktop, shows screenshot.
- Standard (Kindled, Fresher's counter, Gexp, GST Reconciler): 1 column.
- Small (Also built: Fake Job Posting Detector, Hand Gesture system): compact,
  no screenshot, title and one line.

Fills vary: card, blush, mint, marigold (feature uses card). The CTA verb
matches the project type: "Visit site", "Get the APK", "Get the .exe",
"Read the story". Every featured project also links to its case-study page.

### Tag chip
Pill, `--line`, `--shadow-hard-sm`, 14px Body 500, lower-case text such as
"college", "family business", "for learners", "tool for an accountant".

### Skills section: capability stickers
The skills section answers "what can this person build?" Each sticker is one
capability, proven by real projects. Six stickers (content in `CONTENT.md`).

Layout: bento grid on desktop (two wide stickers, four standard), single
column on mobile with every sticker fully visible (no accordions, no carousels).
Tilt and fills follow the normal sticker rules. Fills rotate through card, mint,
blush, marigold.

Anatomy of a capability sticker, top to bottom:

1. Title (H3): the capability in plain words, such as "Web apps with logins
   and databases".
2. One sentence (Body) on what Raj can build with it.
3. Row label in Body 500 sentence case: "Built and shipped with". Below it, tech
   chips: solid chips, card fill, `--line`. Maximum 8 chips.
4. Row label: "Used or familiar with". Below it, tech chips in a quieter style:
   paper fill, 2px dashed ink outline, no shadow. Maximum 6 chips. This row is
   optional per sticker.
5. Row label: "Seen in". Below it, project chips: marigold fill, `--line`,
   `--shadow-hard-sm`. Each is a link. It goes to the project's case-study
   page if one exists, otherwise to its GitHub repo (opens in a new tab,
   with an external-link icon). Accessible name: "PRIDE portal case study".

Rules:

- No percentage bars, star ratings, skill meters, or "proficiency" labels.
- No technology logos. Text chips only (logos are trademarks and add clutter).
- A technology appears under "Built and shipped with" only if it is used in a
  listed project. Everything else goes in the dashed "Used or familiar with" row
  or is left out.
- Tech chips are not links. Only project chips are links.
- Section intro (H2 plus one sentence) sits above the grid, left-aligned.
- Hover (pointer devices): project chips use the button hover lift. Tech chips
  do not react.
- Case-study pages list their stack as the same solid tech chips, plus a link
  back to the `#skills` anchor on the home page.

### Quote strip ("What people said")
Appears only if real quotes exist. Never write or polish a quote on someone's
behalf. One or two stickers, card fill, tilt no more than 1.5 degrees. The quote
is Body 500 at 1.25rem (not handwritten). Under it: name and role in Body 400,
`--ink-soft`. No avatars, no quotation-mark icons. If no quotes are provided,
the section does not render and leaves no empty gap.

### Screenshot frame
Image inside `--line`, 10px radius, `--shadow-hard`. Sensitive data (Gexp and GST
Reconciler screenshots) must be blurred or replaced with fake data before use.
For apps with no live link, show a short looping screen recording
(muted, `playsinline`, poster frame, under 2MB) in the same frame.

### Die-cut photo
Raj's photo with a thick white outline (8px) and an ink outer line, as a
sticker on the About block. One photo only.

### Doodles
A small set of hand-drawn SVG marks: arrow, star, squiggle, circle. Ink stroke,
2 to 3px, no fill. Maximum 5 on the whole page. Raj draws them, or they are
traced from his sketches. No icon packs for decoration.

### Icons
Functional only (nav, external link, download). One outline icon set, 24px,
2px stroke, ink colour.

### Games section (marigold band)
- Timeline strip of consoles as text chips from SNES to PS3, with a short
  branch for Dreamcast and Sega. Text only, no logos.
- "About 1000 games" count-up on first view, with final value shown instantly
  under reduced motion.
- Top 5 as stickers, ranked 5 down to 1 with large Display numerals. The number 1
  sticker is the largest and uses card fill with a tomato numeral. One short
  line per game from `CONTENT.md`.
- Optional: Raj's own photo of his shelf in a screenshot frame.
- Mobile: timeline scrolls horizontally with scroll-snap; top 5 stack.

### Words section (novels)
Two book-shaped stickers built in CSS: tall rectangle, a thicker spine edge on
the left, title in Display 800, an "in progress" chip. No invented cover art.
Hook paragraph below each, 62ch max.

### Contact (tomato band)
Large email address in Display 800 as a mailto link, then LinkedIn and GitHub
as secondary buttons. No phone number on the site. Footer sign-off in
Handwritten, centred.

### Case-study page
Single column, 62ch reading width, no tilt on body content. Order: title and
tag, the problem in one sentence, why Raj built it, what it does, how it went
(real usage, what broke), stack as solid tech chips (with a link to `#skills`
on the home page), links. Screenshots in frames between sections. "Back to
work" link at the top and bottom.

## 8. Motion

Principle: one orchestrated moment, plus motion that responds to a person's
action. Nothing else moves.

1. Hero slap (page load, once): the hero stickers scale from 1.25 to 1 and
   settle into their tilt, staggered 90ms, 450ms each, ease-out with a small
   overshoot. Total under 1.1s. Headline and buttons are visible immediately
   and do not animate.
2. Press and hover on buttons and project stickers as described above.
   Duration 120ms.
3. Sticker wiggle on hover (pointer devices only): rotate +/-2 degrees once,
   200ms. Only on stat stickers and project stickers.
4. Games count-up: one time, 900ms.
5. Optional easter egg (last build phase): typing the Konami code makes the
   cursor a pixel arrow and drops a handful of pixel-art stickers once.

Under `prefers-reduced-motion: reduce`: no slap, no wiggle, no count-up, no
easter egg animation. Everything renders in its final state.

Never animate layout properties. Animate `transform` and `opacity` only.

## 9. Accessibility

- WCAG AA contrast for all text and UI. Re-check every fill and ink pair.
- Visible focus on everything focusable:
  `outline: 3px solid var(--ink); outline-offset: 3px;` plus
  `box-shadow: 0 0 0 6px var(--marigold)`.
- Tap targets at least 44x44px.
- Logical heading order, one H1 per page, landmarks for header, main, nav, footer.
- Tilt is decorative. Screen reader order follows DOM order, which must be the
  reading order.
- Meaningful alt text on every screenshot. Decorative doodles are `aria-hidden`.
- Never use colour alone to carry meaning.

## 10. Performance and responsive quality floor

- Mobile first. Verify at 360, 390, 768, 1280 and 1440px widths.
- No horizontal page scroll at any width. Only the games timeline scrolls
  sideways, inside its own container.
- Images: WebP or AVIF, explicit width and height, lazy-load below the fold,
  `srcset` for screenshots.
- Fonts: three families, Latin subset, `font-display: swap`, preload the display
  font only.
- No 3D, no canvas, no video over 2MB, no animation libraries beyond what the
  motion list above needs.
- Targets on a mid-range Android phone over 4G: LCP under 2.5s, CLS under 0.1,
  Lighthouse performance 90+, accessibility 100.

## 11. Assets Raj must provide

- One photo of himself (clear, good light).
- Screenshots or short screen recordings for: PRIDE portal, Kindled, Fresher's
  counter, Gexp, GST Reconciler. Blur or fake all private data.
- A photo of the game shelf (optional).
- 3 to 5 hand-drawn doodles or sketches to trace (arrow, star, squiggle).
- Resume PDF.

## 12. Definition of done for visuals

- Every item in section 2 is checked and absent.
- Looks correct at all five test widths.
- Reduced-motion mode shows a finished page with no animation.
- Keyboard-only walkthrough works start to finish.
- One person who has never seen the site says what it is within five seconds.
