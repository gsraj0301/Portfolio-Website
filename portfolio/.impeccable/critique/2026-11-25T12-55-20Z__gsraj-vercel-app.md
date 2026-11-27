---
timestamp: 2026-11-25T12-55-20Z
slug: gsraj-vercel-app
---
# Critique Report: gsraj.vercel.app

## Method
⚠️ DEGRADED: single-context (sub-agents unavailable in this session)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No loading states on navigation; case study pages lack progress indication |
| 2 | Match System / Real World | 3 | Personal portfolio language is natural; technical terms used appropriately |
| 3 | User Control and Freedom | 2 | No skip-to-content on case study pages; back navigation only via "Back to work" links |
| 4 | Consistency and Standards | 2 | Case study pages differ significantly from homepage visual language; inconsistent card patterns |
| 5 | Error Prevention | 2 | Contact form lacks inline validation feedback; honeypot not announced to screen readers |
| 6 | Recognition Rather Than Recall | 2 | Case study navigation requires memorizing project order; no breadcrumbs |
| 7 | Flexibility and Efficiency | 2 | No keyboard shortcuts; contact form tab order includes honeypot |
| 8 | Aesthetic and Minimalist Design | 1 | Case study pages are text-heavy walls; hero images missing on 2/5 pages; excessive vertical rhythm |
| 9 | Error Recovery | 2 | Form errors shown but no inline field highlighting; honeypot trap catches bots but not user errors |
| 10 | Help and Documentation | 1 | No help, no tooltips, no onboarding for case study navigation |
| **Total** | | **19/40** | **Acceptable - Significant improvements needed** |

## Anti-Patterns Verdict

**LLM Assessment**: This portfolio has a distinctive "sticker board" visual identity on the homepage that is completely abandoned on case study pages. The homepage uses tilted cards, hard shadows, warm paper palette, and playful typography. Case study pages revert to generic documentation layout: single-column 68ch text, standard headings, no visual personality. The "side-tab" border on book components (10px left border) is a detected AI slop tell. Case study pages lack the sticker aesthetic entirely—no tilted elements, no hard shadows, no metric stickers, no visual hierarchy beyond heading sizes. Two case studies (Fresher's counter, Gexp) had no screenshots until recently added. The "howWent" sections are massive unbroken paragraphs (126-274 words) mixing outcomes, bugs, fixes, and lessons—violating "one thing at a time" cognitive load principle.

**Deterministic Scan**: Found 1 antipattern: "side-tab" accent border on `.book` component (10px left border in globals.css:329). This is a known AI slop tell.

**Visual Overlays**: Not available (live site inspection used instead of injection).

## Overall Impression

The homepage has a strong, distinctive "sticker board" personality that makes a memorable first impression. But the case study pages—the core content—feel like a different website: generic, text-heavy, visually flat, and lacking the sticker-board personality that makes the homepage memorable. The visual language doesn't carry through. The "howWent" sections are unreadable walls of text mixing outcomes, bugs, fixes, and lessons. Two projects lacked screenshots entirely. The navigation between case studies is minimal (only "Back to work" links).

## What's Working

1. **Homepage visual identity**: The sticker-board aesthetic with tilted cards, hard shadows, warm paper palette, and expressive typography is distinctive and memorable. The hero "slap" animation and metric count-ups are delightful.

2. **Technical execution**: Clean Next.js 14 implementation, proper metadata, static generation, Supabase contact form with proper error handling, proper accessibility basics (skip links, ARIA labels, focus styles).

3. **Content authenticity**: Real projects with real metrics, honest failure stories, genuine voice in writing. The "God helped me" moments feel authentic, not performative.

## Priority Issues

### [P0] Case study pages abandon the homepage visual language entirely
**Why it matters**: The portfolio's unique value proposition is its distinctive visual personality. Abandoning it on the most important pages (the work itself) makes the work feel generic and undermines the brand.
**Fix**: Apply the sticker-board design system to case study pages: hero with screenshot, metric stickers for impact metrics, pain-point chips for problems, feature stickers with screenshot annotations, architecture flow diagrams using chip chains, challenge cards with problem→fix pattern, results/lessons sections.
**Suggested command**: `$impeccable shape case-study-pages`

### [P0] "How it went" sections are unreadable walls of text (126-274 words)
**Why it matters**: These sections mix outcomes, bugs, fixes, and lessons in single paragraphs. Users cannot scan for outcomes vs. failures. Cognitive load exceeds working memory (Miller's Law: 4 items max; these sections have 8+ distinct facts).
**Fix**: Split into three distinct sections: Results (outcomes/metrics), Challenges (problem→fix cards), Lessons (takeaways). Keep every sentence but reorganize visually.
**Suggested command**: `$impeccable distill case-study-pages`

### [P1] Missing screenshots on 2/5 case studies (now added but not integrated)
**Why it matters**: Screenshots are the primary visual evidence of the work. Without them, case studies are just claims.
**Fix**: Integrate the newly added fresher.png and gpexp.jpeg into the case study hero and feature showcase sections with captions.
**Suggested command**: `$impeccable shape case-study-pages`

### [P1] No project-to-project navigation
**Why it matters**: Users who finish one case study have no clear path to the next. Only "Back to work" links exist.
**Fix**: Add "Next project" card at bottom of each case study with title, tag, and CTA, plus "All projects" link.
**Suggested command**: `$impeccable shape case-study-pages`

### [P2] Side-tab accent border on book components (AI slop tell)
**Why it matters**: The 10px left border on `.book` components is a known AI-generated UI tell (detected by deterministic scan).
**Fix**: Replace with subtler accent: full border, background tint, or leading icon/number.
**Suggested command**: `$impeccable quieter book-components`

### [P2] Case study hero sections lack visual hierarchy
**Why it matters**: Current hero uses same heading size as section heads (text-h2). No prominent screenshot, no metric strip, no role/stack chips.
**Fix**: Hero should have larger display heading (text-display), screenshot or typographic composition on right, metric strip below, CTAs prominent.
**Suggested command**: `$impeccable layout case-study-hero`

### [P2] No project-to-project visual personality
**Why it matters**: All 5 case studies use identical template. PRIDE (competition platform), Kindled (learning platform), Fresher's (attendance counter), Gexp (expense tracker), GST (reconciliation tool) have completely different domains but identical presentation.
**Fix**: Per-project visual personality: PRIDE = team-count wall + registration flow; Kindled = curation chips + "what I said no to"; Fresher's = live-count + role matrix; Gexp = offline log → WhatsApp → month-close flow; GST = Tally vs GSTR-2B side-by-side + match-priority ladder.
**Suggested command**: `$impeccable bolder case-study-pages`

### [P3] Contact form honeypot not announced to screen readers
**Why it matters**: The honeypot field has `aria-hidden="true"` but `tabindex="-1"` - screen readers may still announce it confusingly.
**Fix**: Ensure honeypot is truly hidden from AT or remove tabindex.
**Suggested command**: `$impeccable harden contact-form`

### [P3] No skip-to-content on case study pages
**Why it matters**: Keyboard users must tab through header/nav on every case study page.
**Fix**: Add skip link to case study pages.
**Suggested command**: `$impeccable adapt case-study-pages`

## Minor Observations

1. The `.book` component's 10px left border is a detected AI slop pattern (side-tab accent border).
2. Case study pages use `max-w-[68ch]` but homepage uses `max-w-[62ch]` for prose - inconsistency.
3. No breadcrumb or progress indicator in case study navigation.
4. Gexp screenshot is portrait (720×1499) - may need special handling in hero.
3. Fresher's counter screenshot is landscape (1660×907) - good for hero.
4. Contact form honeypot has `tabindex="-1"` but `aria-hidden="true"` - potential AT confusion.

## Questions to Consider

1. **Priority direction**: The top issues are visual hierarchy on case studies, splitting howWent, and adding project navigation. Which area should we tackle first?
2. **Design intent**: The homepage sticker-board personality is strong. Should case studies match it exactly, or have a "documentation mode" that's cleaner but still branded?
3. **Scope**: Want to address all issues, or focus on top 3 (visual hierarchy, howWent split, project nav)?
4. **Constraints**: Are any sections off-limits? (e.g., keep howWent as-is for authenticity?)

## Recommended Actions

1. **`$impeccable shape case-study-pages`** — Redesign case study layout with hero, metrics, problem/flow/challenges sections, project nav
2. **`$impeccable distill case-study-pages`** — Split howWent into Results/Challenges/Lessons sections
3. **`$impeccable bolder case-study-pages`** — Add per-project visual personality (PRIDE team wall, Kindled curation chips, etc.)
4. **`$impeccable quieter book-components`** — Remove side-tab border from .book component
5. **`$impeccable layout case-study-hero`** — Redesign hero with display heading, screenshot, metric strip, CTAs
5. **`$impeccable adapt case-study-pages`** — Add skip links, fix honeypot AT issues
6. **`$impeccable harden contact-form`** — Fix honeypot AT, inline validation
7. **`$impeccable polish`** — Final quality pass

> **Trend for `gsraj-vercel-app` (last 1 runs): 19**
> Wrote `.impeccable/critique/gsraj-vercel-app.md`.
