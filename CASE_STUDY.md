# CASE_STUDY.md: Raj G portfolio case studies

All case studies follow the same four‑beat structure. Copy the template, fill the fields from your project READMEs, and keep the `[CHECK]` markers where a number or decision needs Raj's confirmation before launch.

---

## Template: Four‑beat case study

### Problem
One sentence: what the real person did before you built the thing. No invented problems.

### Why I built it
Two to three sentences: who asked, what you wanted to fix, and why you said yes. Grateful, energetic tone. Mention gratitude when it's real, not formulaic: "God helped me" at most once per study, only for a genuine moment, and never in every study.

### What it does
- Bullet list (3‑4 items). Real features. Facts on file.
- Use real numbers, real names of things.
- Facts on file: login with JWT, image uploads through Cloudinary, file storage on Backblaze B2, status emails through Nodemailer and Brevo. [CHECK]

### How it went (broke)
- Real usage numbers, who used it, what broke, what you fixed.
- One honest thing that broke. [CHECK]
- Gratitude line: who you’re grateful for. [OPTIONAL]

---

## PRIDE portal

**Problem**
College competitions lived in WhatsApp threads, paper forms and one in-charge's head. Students missed deadlines, evaluators chased proof, and there was no single place where a competition actually existed.

**Why I built it**
My faculty mentor trusted a first-year with something real, and my class in-charge and HOD opened the door. I went in knowing Python and met Node.js, Express, JWT, Cloudinary and about forty new ways for a server to say no. It started small, then the principal asked me to make it feel like Unstop, but for our college, and it grew into workshops and cultural events. I said yes because it was a chance to learn in public, with real deadlines and real people waiting, under real pressure. I didn't know how much I didn't know, and that turned out to be the useful part.

**What it does**
- One login for every competition, with 12-digit roll numbers. Numbers that long didn't fit the old column, so we moved to text and later to UUIDs.
- An Excel seeder that turned 2,000+ students into accounts without me typing a single password, plus DOB checks and self-declared departments for first-years.
- Teams, faculty mentors capped at three teams each, proof uploads, and an evaluator role with two scorers per team and a short edit window before scores lock.
- Posters and certificates on Cloudinary, slide decks on Backblaze B2 with signed links, and Brevo for year-wise email priority so second years got their mail first.

**How it went (broke)**
It ran a whole semester: 231 teams, 2,000 users, 14 competitions and a letter of appreciation from the college. It also broke. The free MySQL database kept dropping connections, Render wiped uploaded posters until Cloudinary took over, and a live scoring bug keyed evaluations to the team instead of the Smart India Hackathon (SIH) statement. I found six dual-SIH teams, told the in-charge honestly, and fixed it so nobody lost a mark. God helped me stay calm there. I also learned to rotate secrets and read every line my tools write. What worked was the boring stuff: clear roles, a short edit window, and telling people the truth when a number was wrong. What I would change is the testing. I tested features, not the messy overlap between two competitions on the same day. I'm grateful to my faculty mentors for the trust, and to the in-charge who answered every late question.

---

## Kindled

**Problem**
Every student I know wants to learn more than the syllabus: web dev, ML, UI/UX, even how to talk to people without panicking. But the moment you open YouTube to learn one thing, you get a pile of recommended videos, a gaming clip and a five-minute break that eats your evening. The internet doesn't lack resources. It lacks someone saying, start here, this one is actually good. For Tamil-medium learners it's worse: great tutorials exist, but they're scattered like lost socks.

**Why I built it**
I'm a student myself, so I felt this one personally. I built the thing I wished existed: videos I watched and picked myself, with a note on why each is worth your time. The notes are drafted with an AI helper and edited by me, so they stay in my voice. No algorithm, no ads, no login, no certificates. Just the feeling of, I understood it.

**What it does**
- Django and SQLite on the backend, plain HTML, CSS and JS on the frontend, hosted on PythonAnywhere. Zero budget, maximum stubbornness.
- 67+ curated videos across 12 categories, from programming and ML to UI/UX, books and self development, with a heavy Tamil pillar: the full HTML, CSS, JS, Node, Express and React series, in order.
- Curator notes on every video, drafted with an AI helper and edited by me, plus learning paths so beginners never wonder what to watch next. A small CLI tool, add_video.py, handles the boring parts of adding a video.
- Distraction-free video pages with no related videos or rabbit holes, a clear watch-on-YouTube fallback for videos that block embedding, search, and a suggestion form.

**How it went (broke)**
Deployment day gave me ModuleNotFoundError: No module named django even though Django was installed. A nested folder had made my virtualenv path wrong. One corrected path in the Web tab and the WSGI file, and Kindled went live. Then the logo showed a glowing white box because I'd used a JPEG instead of a transparent PNG, and the mobile search bar sat in the middle of the screen like it was paying rent. Both fixed. The traffic numbers were lying at first. PythonAnywhere was counting every CSS, JS and image request plus bots. After I connected Google Analytics, the honest timeline looked like this. First week: 27 real users, with over two minutes of average engagement. After the class demo: the batch ahead started using it. Now: four-plus months live, 100 students have used it. There are returning users.

What worked best was the simplest thing: standing in front of my class and showing it live. Students still forget. I'd show Kindled one-on-one, they'd say this is awesome, and a week later it had vanished from memory. Building a product and building a habit are two different projects. I also said no on purpose: no Shorts, because one tap puts you back in the scroll hole, no chess video, because that was scope creep, and no cartoon-wisdom compilation, because copyright. Curation is as much about what you leave out.

Next up: the new first-years, more Tamil content, and being there at the exact moment a student thinks, okay, I need to learn this now. Not a certificate. Not a grade. Just, I understood it.

---

## RULES (how to write a case study)

1. **Four beats only** – Problem, Why I built it, What it does, How it went (broke). No extra sections.
2. **First person, plain words** – Sounds like Raj explaining his work to a friend.
3. **Sentence case everywhere** – Headlines, buttons, tags, nav. No ALL CAPS.
4. **Specific beats clever** – Use real numbers, real names of things. No percentage bars, no star ratings.
5. **One light joke per section at most** – Banned words: passionate, robust, scalable, leverage, cutting‑edge, production‑grade, at scale, seamless, innovative, ninja, rockstar.
6. **No arrow characters in any text** – Avoid `→`, `➜`, etc. Write out "to" instead.
7. **[CHECK] markers** – Anything that says `[CHECK]` must be confirmed by Raj before launch. This includes any quoted statistic, any live URL, any permission‑to‑use name, and any number that appears in a sticker.
8. **No stock illustrations, stock photos, or emoji** – Only hand‑drawn doodles or sketches (max 5 per page).
9. **No lorem ipsum** – If copy is missing, stop and ask for it.
10. **Technology chips** – In the skills section, only list a tech under "Built and shipped with" if a listed project actually uses it. Everything else fades to "Used or familiar with" or disappears.
11. **No technology logos** – Text chips only. Logos are trademarks and add clutter.
12. **Graphic limits** – Max 5 hand‑drawn doodles or sketches on the whole page. Decorative doodles are `aria-hidden`.
13. **Case‑study page flow** – An at‑a‑glance strip (role, stack, status, link) as metadata, not a fifth beat, then title and tag, problem in one sentence, why built, what it does, how it went (real usage), stack as solid tech chips (with a link to `#skills` on the home page), links. Screenshots in frames between sections. "Back to work" link at top and bottom.
12. **Motion** – Principle: one orchestrated moment, plus motion that responds to a person's action. Nothing else moves. Hero slap (page load, once), press and hover on buttons and project stickers, sticker wiggle on hover (pointer devices only), games count‑up. Under `prefers‑reduced‑motion: reduce` no slap, no wiggle, no count‑up, no easter‑egg animation. Everything renders in its final state. Never animate layout properties; animate `transform` and `opacity` only.
14. **Accessibility** – WCAG AA contrast for all text and UI. Visible focus on everything focusable: `outline: 3px solid var(--ink); outline-offset: 3px;` plus `box-shadow: 0 0 0 6px var(--marigold)`. Tap targets at least 44×44px. Logical heading order, one H1 per page, landmarks for header, main, nav, footer. Tilt is decorative. Screen reader order follows DOM order, which must be the reading order. Meaningful alt text on every screenshot. Never use colour alone to carry meaning.
15. **Performance and responsive quality floor** – Mobile first. Verify at 360, 390, 768, 1280 and 1440px widths. No horizontal page scroll at any width (only the games timeline scrolls sideways, inside its own container). Images: WebP or AVIF, explicit width and height, lazy‑load below the fold, `srcset` for screenshots. Fonts: three families, Latin subset, `font-display: swap`, preload the display font only. No 3D, no canvas, no video over 2MB, no animation libraries beyond what the motion list above needs. Targets on a mid‑range Android phone over 4G: LCP under 2.5s, CLS under 0.1, Lighthouse performance 90+, accessibility 100.

---

## Placeholder case studies (to be filled)

### Fresher's counter
**Problem**
Faculty were collecting Fresher's Day student and family headcounts through WhatsApp messages, and keeping the numbers straight was hard for everyone. Counts sat in different chats, nobody could add them up cleanly, and the day needed a real number.

**Why I built it**
My class in-charge asked me to make one place where every count could live. The HOD needed the full picture at a glance, and faculty needed something quicker than typing numbers into a chat. Small app, one day, real people counting on it. I said yes.

**What it does**
- Faculty sign in and update the count for their own department and section. Counts add up live across 14 sections and 10 departments, with inline editing and relative last-updated times.
- Role-based views: admins manage counts and faculty accounts, while the principal, HOD and deans get a read-only overview.
- JWT auth with bcrypt-hashed passwords and httpOnly cookies with a two-day expiry, so faculty can only touch their own section.
- Built with Next.js, Supabase and Vercel, with a table that refreshes every 30 seconds.

**How it went (broke)**
I built it, demoed it to my class in-charge, took his input, changed the site and deployed it. Then came a sudden request: the principal needed a page to see the count too. I added a read-only overview and coordinated it with the first-year HOD.

The real bug was the login. I had forgotten to await Next.js's async cookies() call, so every login bounced back to the login page. I got unblocked by reading the raw Cookie header, then fixed the await properly. On the day, I waited for news, and in the evening my class in-charge told me the site was very helpful. I'm grateful for the chance to build to faculty requirements and actually be useful.

Repo: github.com/gsraj0301/fresher-day-registrations

### Gexp

**Problem**
Every day at my father's wholesale medicine business, the worker buys small things: tea, water, biscuits, petrol, stationery. It all went into a paper register. The register only existed where the register was. If my father wasn't at the office, he couldn't see a thing. At month-end, someone sat down with a calculator and a lot of hope.

**Why I built it**
I was in that office almost every day, so I wasn't guessing at the problem. I watched it happen. A register can get lost, soaked in chai, or miscounted. My father didn't need a fancy ERP. He needed yesterday's expenses on his phone, without asking anyone. He already lives on WhatsApp, so the app had to meet him there. No new login, no dashboard, no portal to download.

**What it does**
- A fully offline Android app: no server, no cloud, no login. The worker logs expenses as they happen into a local SQLite database.
- Every morning the worker sends my father yesterday's itemized spending on WhatsApp in two taps, powered by WorkManager and share_plus.
- Month-end close locks the period and rolls over to the next month automatically, so the calculator can retire.
- Custom categories for tea, water, biscuits, snacks, transport and petrol, built with Python and Flet on Flutter, with the APK shipped through GitHub Actions.

**How it went (broke)**
Built in under four days, then used for real on July 2, 3 and 4 — and it's still in daily use at my father's office. Real expenses, real business, real consequences. Then things broke, which was the fun part.

The WhatsApp button did nothing on the phone. I had forgotten to await an async launch_url() call, so the coroutine quietly never ran. The bug wasn't loud. It was polite, which is the worst kind. SQLite also got lost on Android: desktop paths and phone paths are not friends, and the database had no idea where to live until it landed in the right app directory. The boss fight was WorkManager and share_plus, two Flutter plugins that Flet doesn't hand you on a plate, so I built a custom Flutter template and tried things until the red text turned green.

There was a late-night stretch where nothing cooperated, and honestly, I prayed. God helped me get through it. Then the pieces clicked, the APK installed, and the worker tapped through it like he'd used it for years. I just stood there grateful. My first app taught me more than any tutorial: observe the problem, test on a real device, and always await your coroutines. Grateful to my father and his worker for trusting a first app.

Repo: github.com/gsraj0301/GPexp

### GST Reconciler

**Problem**
Every month a business has to prove its purchases match what the government's GST portal says. On one side sits the Tally voucher register. On the other sits GSTR-2B. Both claim to be the truth, and they tell it differently. Checking them by hand meant eyes on Excel, row after row, hunting for a missing invoice or a tax figure off by a rupee. My dad does this for several firms, and each reconciliation ate most of a day.

**Why I built it**
I was sitting right next to the problem. My dad told me how long the reconciliation took, and I couldn't stop thinking a computer should be doing this. So I said, Dad, a program can do this in a minute. He didn't believe me. Not even a little. Challenge accepted.

**What it does**
- A Windows desktop app. Drop in the two Excel files, press a button, and it does the boring detective work for you.
- Matches rows by GSTIN, invoice number and party name, with a ten-rupee tolerance so tiny rounding differences don't ruin anyone's evening.
- Flags mismatches in invoice value, taxable value and the tax columns, plus duplicates and rows that exist in only one file. Doubtful near-matches stay visible so a person can double-check them.
- Exports a colour-coded report with green for matched, red for mismatch and orange for duplicate, and leaves the original file untouched. Built with Python, Tkinter and pandas.

**How it went (broke)**
First run: nothing worked. No buttons, nothing. Just a window that looked at me like I'd made a mistake. Then it worked, and it was wrong. The first successful run was full of mismatches that weren't real, because the GSTIN, party name or invoice number would differ by one or two characters between the files. To a human, obviously the same invoice. To a computer, strangers. And you can't hand an accountant mostly right.

The fix was fuzzy matching with manners: near-identical text counts as a match, and fields get a priority order, GSTIN first, then invoice number, then party name, because names are the messiest. Then my dad tried it. It worked, and he started using it. What took most of a day now takes minutes. I promised one minute and delivered two minutes at most, but I'll take that against a full day. Thank you, Dad, for trusting me with real business work even after saying no way, and for being the best first tester a developer could ask for.

Repo: github.com/gsraj0301/gst-reconciler
*This file lives alongside CONTENT.md and DESIGN.md. All copy must respect the markers `[]` (Raj must supply) and `[CHECK]` (Raj must confirm). When a field says `[REPLACE]`, stop and ask for it instead of filling it in.*