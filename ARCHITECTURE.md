# ARCHITECTURE.md: Raj G portfolio, technical overview

This file gives a high‑level overview of the portfolio website's architecture,
data model and deployment. It is intended to live alongside CONTENT.md and
DESIGN.md.

## 1. Tech stack

- **Framework:** Next.js 16 (App Router) with TypeScript.
- **Styling:** Tailwind CSS v4, tokens exposed via `@theme` as CSS variables
  matching DESIGN.md (`--paper`, `--card`, `--ink`, `--marigold`, `--mint`,
  `--blush`, `--ink-soft`). `color-scheme: light` only.
- **Fonts:** `next/font` for Bricolage Grotesque (Display), Figtree (Body),
  Caveat (Handwritten). Subset to Latin. `font-display: swap`.
- **Motion:** `motion` (the successor to Framer Motion) for the hero slap and the
  games count‑up; CSS for hover/press effects. Reduced‑motion support disables
  all animations via `prefers-reduced-motion: reduce`.
- **MDX:** metadata in `src/data/projects.ts`, narrative in
  `src/content/work/*.mdx` via `next-mdx-remote/rsc` + `gray-matter`. Front‑matter
  supplies title, tag, stack, live/repo links. Body contains the four‑beat case
  study (Problem / Why / What / Broke).
- **Icons:** `lucide-react`, one outline icon set, 24px, 2px stroke, ink colour.
- **Images:** `next/image` with WebP format, explicit width/height, lazy‑load
  below the fold, `srcset` for screenshots.
- **Analytics:** `@vercel/analytics` embedded in the layout.
- **No database / no backend** on the portfolio itself. Case‑study data is
  pre‑generated at build time (`generateStaticParams`). Contact is a
  `mailto:` link. Resume is a static PDF in `public/`.

## 2. Data model

### 2.1 `src/data/projects.ts` (typed cards)

```ts
export type Project = {
  slug:          'pride' | 'kindled' | 'fresher-counter' | 'gexp' | 'gst-reconciler';
  title:         string;
  tag:           'college' | 'for learners' | 'college' | 'family business' | 'tool for an accountant';
  size:          'feature' | 'standard' | 'small';
  cardLine:      string;        // one‑line sticker copy
  cta:           { label: string; href: string; external?: boolean };
  image?: { src: string; alt: string }; // WebP, optional screenshot
  stack:         string[];      // tech chips for the "Seen in" row
  repo?: string;               // GitHub repo URL
  live?: string;               // live demo URL (may be null)
};
```

### 2.2 `src/content/work/*.mdx` (case‑study narrative)

Front‑matter fields (all optional, but at least one should be filled):

| Field | Purpose |
|---|---|
| `title` | Shown as H3 on the case‑study page. |
| `tag` | Tag chip type (maps to PROJECT_TAGS in CONTENT.md). |
| `stack` | Array of tech names; displayed as solid chips on the page and linked to `#skills` on the home page. |
| `live` | Live demo URL; if present, shown as "Visit site" CTA. |
| `repo` | GitHub repo URL; shown as "Read the story" or "Get the APK" etc. |
| `problem` | One‑sentence problem statement. |
| `why` | 2‑3 sentence "Why I built it" paragraph. |
| `what` | 3‑4 bullet points of what the project does. |
| `broke` | Honest "what broke / what I'd change" paragraph. |

The MDX body renders the four‑beat structure; any `[CHECK]` or `[REPLACE]` markers are
kept as‑is and flagged for Raj before launch.

## 3. Build pipeline

1. **Scaffold** – `create-next-app` (or manual) with Tailwind v4 config,
   `next/font` for the three families, `motion` installed.
2. **Content** – Populate `src/data/projects.ts` with the five project cards.
3. **MDX files** – Write `src/content/work/*.mdx` for each case study, filling
   the front‑matter fields from the project READMEs. Keep `[CHECK]` markers
   where a number needs verification.
4. **Static generation** – `generateStaticParams` in `app/work/[slug]/page.tsx`
   generates a static page for each of the five slugs (`pride`, `kindled`,
   `fresher-counter`, `gexp`, `gst-reconciler`). No client‑side routing needed.
5. **Motion** – Import `motion` components for the hero slap and count‑up; all
   other hover/press effects are plain CSS (lighter, automatic reduced‑motion).
6. **SEO** – `next/metadata` or `metadata` export per page, JSON‑LD Person+
   WebSite schema, sitemap (`sitemap.ts`), robots (`robots.ts`).
7. **Deploy** – Vercel. `@vercel/analytics` enabled. Custom domain optional.

## 4. Page‑level behaviour

- **Home page** – Hero sticker cluster "slaps" on first load ( Motion ), then
  settles. Scroll‑spy highlights the current nav pill. All sections are
  vertically padded: 72px on mobile, 112px on desktop. Section divider is a
  dashed 2px ink line between paper sections.
- **Case‑study pages** – "Back to work" link at top and bottom always visible.
  Stack chips under the narrative link to `#skills` on the home page.
- **404** – Static `not-found.tsx`, no redirection.

## 5. Assets Raj must provide (summarised from DESIGN.md §11)

- One photo of himself.
- Screenshots or short screen recordings for PRIDE, Kindled, Fresher's counter,
  Gexp, GST Reconciler (blur or fake all private data).
- 1200×630 social‑preview image.
- 3‑5 hand‑drawn doodles or sketches (arrow, star, squiggle).
- Updated resume PDF (general full‑stack, not the DataAnalyst one).

---
*This file lives alongside CONTENT.md and SPEC.md. It summarises the technical
choices and the data model used by the site. For visual rules, see DESIGN.md.
For content rules, see CONTENT.md.*