# Raj G — Portfolio Website

A personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Features a distinctive "sticker board" design system with intentional motion, accessible interactions, and static-first performance.

**Live:** [rajg.dev](https://rajg.dev) (deployed on Vercel)

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14.2 (App Router, React 18, TypeScript) |
| Styling | Tailwind CSS 3.4 + PostCSS |
| Fonts | `@fontsource` (Bricolage Grotesque, Figtree, Caveat) — self-hosted WOFF2 |
| Icons | `lucide-react` (outline, 2px stroke) |
| Images | `next/image` with explicit dimensions, lazy loading |
| Contact | Supabase (anon key, browser insert) |
| Deploy | Vercel (static export, ISR not needed) |
| Node | 18.19.1 (pinned; Next 15+ requires Node 20+) |

---

## Design System: "Sticker Board"

A hand-crafted, paper-and-ink aesthetic with deliberate imperfections.

### Palette (CSS variables in `app/globals.css`)

| Token | Hex | Use |
|-------|-----|-----|
| `--paper` | `#FFF3D6` | Page background |
| `--card` | `#FFFFFF` | Sticker/card backgrounds |
| `--ink` | `#1C1713` | Primary text, borders, shadows |
| `--ink-soft` | `#5A4E44` | Secondary text |
| `--tomato` | `#FF5A36` | Primary CTAs (one per page) |
| `--marigold` | `#FFC93C` | Secondary accents, hover states |
| `--mint` | `#BFE3D0` | Success/constructive highlights |
| `--blush` | `#FFE1D6` | Problem/background bands |

### Core Primitives

- **Sticker** — white card, 2px ink border, hard offset shadow (`4px 4px 0`), slight deterministic tilt (`--tilt` CSS variable). Press = translate + shadow shrink. Hover (pointer) = wiggle animation.
- **Frame** — screenshot container with same border/shadow system.
- **Tag / Chip** — pill-shaped labels, solid or dashed variants.
- **Button** — min-height 44px, hard shadow, press/tap feedback.

### Typography

- **Display** — Bricolage Grotesque 800, `clamp(2.5rem, 8vw, 5.25rem)`
- **H2** — Bricolage 800, `clamp(1.875rem, 4.5vw, 3rem)`
- **H3** — Bricolage 700, `1.375rem`
- **Body** — Figtree 400/500, `1.0625rem` / `1.6` leading
- **Handwritten** — Caveat 600 for personal notes

### Motion Philosophy

- **One orchestrated moment per page** (home: hero sticker slap; case studies: metric count-up + flow draw).
- Everything disabled under `prefers-reduced-motion: reduce` — final states remain visible.
- No layout animations; only transform/opacity.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out).

---

## Project Structure

```
Portfolio Website/
├── ARCHITECTURE.md      # Technical overview (this file's source)
├── DESIGN.md            # Visual design tokens & rules
├── SPEC.md              # Behavioural specification
├── CONTENT.md           # Copy reference (source of truth)
├── CASE_STUDY.md        # Long-form case study copy
├── images/              # Original assets (photos, screenshots)
├── public/              # Repo-root static files (resume PDF)
└── portfolio/           # Next.js application
    ├── app/
    │   ├── layout.tsx           # Root layout, font imports, metadata
    │   ├── page.tsx             # Home page composition
    │   ├── globals.css          # Design tokens, primitives, animations
    │   ├── not-found.tsx        # 404 page
    │   ├── lib/
    │   │   ├── supabase.ts      # Browser Supabase client
    │   │   ├── motion.ts        # useInView hook (IntersectionObserver)
    │   │   └── useStickerPress.ts # Pointer/touch press + wiggle logic
    │   ├── components/
    │   │   ├── SiteNav.tsx      # Desktop sticky + mobile bottom nav
    │   │   ├── Header.tsx       # Home hero sticker cluster
    │   │   ├── WorkSection.tsx  # Project cards (2-col desktop)
    │   │   ├── SkillsSection.tsx
    │   │   ├── HowIBuildSection.tsx
    │   │   ├── HobbiesSection.tsx
    │   │   ├── ContactSection.tsx
    │   │   ├── ContactForm.tsx  # Supabase insert + mailto fallback
    │   │   ├── PressableSticker.tsx
    │   │   ├── StatSticker.tsx  # Animated count-up
    │   │   ├── ScrollProgress.tsx
    │   │   └── casestudy/       # Case study section components
    │   │       ├── SectionFrame.tsx
    │   │       ├── Hero.tsx
    │   │       ├── MetricStickers.tsx
    │   │       ├── ProblemStory.tsx
    │   │       ├── FeatureShowcase.tsx
    │   │       ├── ArchitectureFlow.tsx
    │   │       ├── ChallengeCards.tsx
    │   │       ├── ResultsLessons.tsx
    │   │       ├── StackSection.tsx
    │   │       ├── ProjectNav.tsx
    │   │       └── Signature.tsx
    │   └── work/*/page.tsx      # 5 case study routes (static data)
    ├── public/                  # Served assets (raj.jpg, screenshots, resume)
    ├── scripts/
    │   ├── check-markers.mjs    # Build guard: fails on [CHECK]/[REPLACE]
    │   └── motion-check.mjs     # 37-check Playwright suite
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── next.config.js
    └── .env                     # Gitignored (Supabase keys)
```

---

## Key Features

### Home Page
- Hero sticker cluster with staggered entrance (view-gated < 640px)
- Stat count-ups + timeline draw on first intersection
- Work grid: 2 columns, 6 cards (PRIDE spans 2 cols, Fake Job compact)
- Skills, How I Build, Hobbies, Contact sections
- Mobile bottom nav (Work/Skills/Hobbies/Contact) with safe-area insets

### Case Studies (5 routes)
Each at `/work/{pride,kindled,fresher-counter,gexp,gst-reconciler}`:
- Asymmetric hero (6/6 split) with large screenshot + at-a-glance spec strip
- "Impact at a glance" metric row with varied sticker sizes
- Sticky left rail (4-col) for section headings — headings stay visible while scrolling
- Problem band (blush) with bold pain-point stickers
- "Why I built it" as a large letter card
- Features in 2-col cards + framed "In use" screenshots (browser/phone chrome)
- Architecture flow as vertical stepper with animated dashed connector
- Engineering decisions in asymmetric cards
- Challenges in bento grid with mint "Fix" strips
- Results/Lessons as offset 7/5 panels
- Compact stack strip + marigold next-project card

### Contact Form
- Name, email, message (honeypot, 1000 char max)
- Client-side Supabase insert (anon key)
- Field errors announced via `role="alert"`, focus management
- Success: inline confirmation; Error: mailto fallback with privacy note
- Required Supabase SQL (run once):
```sql
create table contacts (
  id bigint generated by default as identity primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);
alter table contacts enable row level security;
create policy "anon can insert contacts" on contacts for insert to anon with check (true);
grant insert on public.contacts to anon;
```

---

## Commands

```bash
cd portfolio

# Development
npm run dev          # Starts on .next-dev (separate from production build)

# Production build + marker guard
npm run build        # next build && node scripts/check-markers.mjs

# Production server (for motion-check)
PORT=3100 npm run start

# Lint & typecheck
npm run lint
npx tsc --noEmit

# Full motion/visual regression suite (requires production server on BASE_URL)
BASE_URL=http://localhost:3100 node scripts/motion-check.mjs
# 37 checks: overflow, tap targets, animations, reduced motion, image loading,
# case study structure, metadata, form a11y, work grid hierarchy, progress bar
```

---

## Deployment

- **Platform:** Vercel (connected to `gsraj0301/Portfolio-Website`, branch `master`)
- **Env vars (Vercel dashboard):**
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Static assets:** Resume PDF at `/public/raj-g-resume.pdf`
- **Build output:** `.next` (production) / `.next-dev` (dev) — split via `next.config.js` to prevent dev/prod corruption

---

## Design Rules (Enforced)

- **No** dark mode, gradients, glows, soft shadows, purple/indigo
- **No** ALL CAPS eyebrows, numbered section markers, emoji, arrows/em dashes in copy
- **No** nested cards, identical card grids without variation
- **Yes** hard 2px borders, offset shadows, deterministic tilts, sentence-case copy
- **Yes** `prefers-reduced-motion` support on every animation

---

## License

MIT — feel free to study, fork, or adapt. Attribution appreciated.