# ARCHITECTURE.md: Raj G portfolio, technical overview

> Last updated: 2026-11-24

High-level overview of the portfolio's architecture, data model and deployment.
Lives alongside CONTENT.md (copy), DESIGN.md (visuals), SPEC.md (behaviour) and
CASE_STUDY.md (case-study source copy).

## 1. Tech stack (as shipped)

- **Framework:** Next.js **14.2.15** (App Router) with TypeScript, React **18**.
  Pinned by the environment: the dev machine runs **Node 18.19.1**, which rules
  out Next 15/16 and Tailwind v4 (`@tailwindcss/oxide` needs Node 20+).
- **Styling:** Tailwind CSS **v3.4.17** + PostCSS + Autoprefixer. Design tokens
  from DESIGN.md live in `app/globals.css` (`:root` CSS variables) and
  `tailwind.config.js` (colors, shadows, fonts). `color-scheme: light` only.
- **Fonts:** `@fontsource` packages (Bricolage Grotesque, Figtree, Caveat),
  imported as CSS in `app/layout.tsx`; woff2 emitted at build. (`next/font`
  does not resolve these families on Next 14.)
- **Motion:** plain CSS only — hero "slap" keyframes (overshoot), button hover/press,
  smooth anchor scroll, Games count-up (900ms on first intersection), sticker wiggle
  (hover/tap on stat/project stickers). No animation library. Everything disabled under
  `prefers-reduced-motion: reduce`. The Games figure animates once; static under reduced motion.
- **Icons:** `lucide-react`, outline set, 2px stroke (nav + external-link).
- **Images:** `next/image` with explicit width/height, `sizes`, lazy loading
  below the fold; sources in `portfolio/public/` and `portfolio/public/images/`.
- **Contact form:** `@supabase/supabase-js` v2, browser client, anon insert
  into a `contacts` table (see §5). No other backend; no database for content.
- **Content:** typed data inline in components/pages (no MDX, no CMS).
  `CONTENT.md` and `CASE_STUDY.md` are the copy references; the live code is
  the source of truth.

## 2. Data model

### 2.1 Work cards — `app/components/WorkSection.tsx`

```ts
type Project = {
  title: string;
  tag: string;            // "college" | "for learners" | "family business" | "for accountants" | ""
  cardLine: string;
  href: string;           // CTA target (live site or repo)
  ctaLabel: string;       // "Visit site" | "Get the APK" | "Get the .exe" | "Read the story"
  stack: string[];
  fill: string;           // CSS var
  tilt: string;
  feature?: boolean;      // PRIDE spans 2 columns, screenshot on right at desktop
  small?: boolean;        // Fake Job: compact card, no stack chips
  story?: string;         // internal case-study route
  screenshot?: { src: string; width: number; height: number };
};
```

Six cards: PRIDE (feature), Kindled, Fresher's counter, Gexp, GST Reconciler,
Fake Job Posting Detector (repo-only, no case-study page; small, no stack chips).

### 2.2 Case studies — `app/components/CaseStudy.tsx`

```ts
type CaseStudyData = {
  title: string; tag: string; intro: string;
  glance: { role; stack; status; linkLabel; linkHref };  // metadata strip, not a beat
  problem: string; why: string; features: string[]; howWent: string;
  stack: string[];
  screenshot?: { src; width; height };   // rendered above the Stack section
  repo: string; live?: string;
};
```

Each route is a thin `page.tsx` holding one `CaseStudyData` object:
`app/work/{pride,kindled,fresher-counter,gexp,gst-reconciler}/page.tsx`.
Copy rules: no emoji, no em dashes, "God helped me" at most once per study
(PRIDE and Gexp only), no unconfirmed `[CHECK]`/`[REPLACE]` markers.

## 3. Build pipeline

1. `npm run build` = `next build && node scripts/check-markers.mjs`.
2. **Marker guard:** `scripts/check-markers.mjs` scans `.next/server/app` and
   `.next/static` text output and **fails the build** if `[CHECK` or
   `[REPLACE` appears anywhere. Unconfirmed copy can never ship.
3. All pages are statically prerendered (no dynamic routes, no server actions).
4. **Dist-dir split:** `next.config.js` sets `distDir` to `.next-dev` under
   `next dev` and `.next` for build/start, so a running dev server can never
   corrupt a production build (this previously caused
   `Cannot find module './379.js'` crashes). Both are gitignored.

## 4. Page-level behaviour

- **Home:** hero sticker cluster slaps in once (CSS, staggered 0/90/180ms);
  IntersectionObserver scroll-spy drives nav active states (active starts empty);
  dashed perforation dividers between paper sections; colour bands (blush/marigold/tomato) need none.
  Section order: Hero, What people said (conditional), Work, Skills, How I build, Hobbies, Contact.
- **Nav:** desktop sticky top bar (Work/Skills/Hobbies/Resume/Say hi; logo `raj g.`);
  mobile top bar with logo only (no Resume pill), plus fixed bottom pill
  (Work/Skills/Hobbies/Contact; icons: briefcase/wrench/coffee/mail) with safe-area inset.
- **Anchors:** `scroll-margin-top` 24px mobile / 88px desktop; smooth scroll
  (auto under reduced motion).
- **Case studies:** "Back to work" top and bottom; at-a-glance metadata strip;
  stack chips link to `/#skills`.
- **404:** styled static `not-found.tsx`.

## 5. Contact form (Supabase)

- Client: `app/lib/supabase.ts` reads `NEXT_PUBLIC_SUPABASE_URL` and
  `NEXT_PUBLIC_SUPABASE_ANON_KEY` (publishable key — safe for the browser).
- Form: `app/components/ContactForm.tsx` inserts `{name, email, message}` into
  `public.contacts`; success/error render as readable card pills; mailto is
  the fallback.
- Fields: name, email, message (labels above, no placeholders, honeypot, 1000 char max).
- Success: `Got it. I'll reply soon.` (replaces form); Error: mailto fallback with privacy line.
- Required SQL (run once in the Supabase SQL editor):

```sql
create table contacts (
  id bigint generated by default as identity primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);
alter table contacts enable row level security;
create policy "anon can insert contacts"
  on contacts for insert to anon with check (true);
grant insert on public.contacts to anon;   -- new projects do not auto-grant
```

- Env vars live in `portfolio/.env` locally (gitignored) and in the Vercel
  project settings for production. Never commit keys; never use a
  `service_role` key in the frontend.

## 6. Deployment

- Vercel, repo `https://github.com/gsraj0301/Portfolio-Website` (branch
  `master`). Set the two `NEXT_PUBLIC_SUPABASE_*` env vars in the dashboard.
- Resume is a static PDF at `portfolio/public/raj-g-resume.pdf`.

## 7. Directory structure

```
Portfolio Website/
├── ARCHITECTURE.md / SPEC.md / DESIGN.md / CONTENT.md / CASE_STUDY.md / memory.md
├── images/                  # Raj's original assets (photo, screenshots)
├── public/                  # repo-root copy of the resume
└── portfolio/               # the Next.js app (run all commands here)
    ├── app/
    │   ├── layout.tsx       # metadata + @fontsource imports
    │   ├── page.tsx         # home composition
    │   ├── globals.css      # design system layer
    │   ├── not-found.tsx
    │   ├── lib/supabase.ts
    │   ├── components/      # SiteNav, Header, WorkSection, SkillsSection,
    │   │                    # HowIBuildSection, HobbiesSection, HobbiesCountUp,
    │   │                    # ContactSection, ContactForm, CaseStudy
    │   └── work/*/page.tsx  # five case studies
    ├── public/              # served assets (raj.jpg, images/, resume PDF)
    ├── scripts/check-markers.mjs
    ├── tailwind.config.js / postcss.config.js / next.config.js
    └── .env                 # gitignored
```

## 8. Open items

- Quote strip not rendered until real quotes + permission are provided.
- Screenshots pending for Fresher's counter and Gexp; APK/.exe release links
  pending (CTAs point at repos meanwhile).
- Supabase `grant insert` must be run before the form accepts submissions.
