# CONTENT.md: Raj G portfolio copy

> Last updated: 2026-11-23 (matches the shipped site)

All words on the site come from this file. Do not invent copy. If a field says
`[REPLACE]`, stop and ask for it instead of filling it in. The live code is the
source of truth; this file tracks it.

Visual rules live in `DESIGN.md`. Pages and behaviour live in `SPEC.md`.
Case-study long copy lives in `CASE_STUDY.md` and the five
`portfolio/app/work/*/page.tsx` routes.

## Markers

- `[REPLACE: ...]` Raj must supply this. Nothing is drafted, or the draft is
  only a placeholder shape.
- `[CHECK: ...]` Draft text is filled in, but Raj must confirm it is true before
  launch.
- Everything else is final.
- **Build guard:** `npm run build` fails if `[CHECK` or `[REPLACE` reaches the
  built output (`scripts/check-markers.mjs`). Markers may live in this file,
  never in rendered copy.

## Voice rules

- First person, plain words, short sentences. Sounds like Raj explaining his
  work to a friend.
- Sentence case everywhere: headlines, buttons, tags, nav.
- Specific beats clever. Use real numbers, real names of things.
- Allowed: one light joke per section at most.
- Banned words: passionate, robust, scalable, leverage, cutting-edge,
  production-grade, at scale, seamless, innovative, ninja, rockstar.
- Buttons are verb phrases: "See my work", "Visit site", "Get the APK".
- No arrow characters in any text. No emoji. No em dashes (commas/full stops).

## Global

- Site title: `Raj G | Apps people actually use`
- Meta description: `Second-year AI and Data Science student in Chennai. I build full-stack apps for my college, for businesses and free learning.`
- Language: English (India)
- Social preview image: [REPLACE: 1200x630 preview image]

## 1. Hero

- Headline: `I build things people actually use.`
- Sub-line: `Second-year AI and Data Science student in Chennai. I build apps for my college, my dad's business, and anyone who wants to learn for free.`
- Primary button: `See my work` (jumps to `#work`)
- Secondary button: `Say hi` (jumps to `#contact`)
- Handwritten note (next to the stickers): `(yes, really)`
- Photo: circular avatar, `public/raj.jpg` (compressed 400x400), handwritten
  name "Raj G" beside it.

Stat stickers (real facts only):

1. `2,000+` / `students on the PRIDE portal`
2. `About 1,000` / `games, SNES to PS3 & PC`
3. `2` / `novels in progress`

## 2. What people said

Render only if at least one real quote is provided. Never write quotes for
people. Currently not rendered.

1. Quote: [REPLACE: exact words from Raj's first-year class incharge about the
   Fresher's Day counter]. Name and role: [REPLACE]. Permission to use name:
   [REPLACE: yes or no].
2. Quote: [REPLACE: optional, someone connected to PRIDE]. Name and role:
   [REPLACE].

## 3. Work

Section heading: `Things I've built for real people`
Intro line: `Every one of these started with someone who had a problem. Tap one for the full story.`

Order: PRIDE (feature size), Kindled, Fresher's counter, Gexp, GST Reconciler,
Fake Job Posting Detector. Screenshots sit above the stack chips.

### 3.1 PRIDE portal

- slug: `pride`
- tag: `college`
- size: feature (spans 2 columns, stats: 2,000 students signed up / 231 teams
  took part / 14 competitions run)
- Card line: `One platform for college competitions. Used by 2,000+ students for a whole semester.`
- CTA: `Visit site` to `https://agni-pride.onrender.com`
- Screenshot: done, `public/images/pride.png` (1660x907, no private student data)
- Stack chips: Node.js, Express, MySQL, JWT auth, Cloudinary
- Case study: `/work/pride` (see CASE_STUDY.md)
- Seen in skills: Web apps, Logins files and email, Putting things online

### 3.2 Kindled

- slug: `kindled`
- tag: `for learners`
- Card line: `Hand-picked learning videos for college students. No algorithm, no noise.`
- CTA: `Visit site` to `https://kindled-pythonanywhere.com`
- Screenshot: done, `public/images/kindled.png` (1660x907)
- Stack chips: Django, SQLite, PythonAnywhere
- Case study: `/work/kindled` (GA4 timeline: 27 real users first week, 100+
  students after the class demo, 3,080 quiz takers, four-plus months live.
  Notes drafted with an AI helper, edited by Raj.)
- Seen in skills: Web apps, Putting things online

### 3.3 Fresher's counter

- slug: `fresher-counter`
- tag: `college`
- Card line: `Faculty were sending Fresher's Day headcounts over WhatsApp. Now they update one page and see the live total.`
- CTA: `Visit site` to `https://fresher-day-registrations.vercel.app`
- Screenshot: [REPLACE: public/images/fresher.webp, no real student names]
- Stack chips: Next.js, Supabase, Vercel
- Case study: `/work/fresher-counter` (class incharge said it was "very helpful")
- Seen in skills: Web apps, Putting things online, Working with people

### 3.4 Gexp

- slug: `gexp`
- tag: `family business`
- Card line: `A small Android app for my father's company. A worker logs daily expenses and closes the month when payment arrives.`
- CTA: `Get the APK` to `https://github.com/gsraj0301/GPexp`
  [REPLACE: GitHub release link for v1.0.0 when published]
- Card media: [REPLACE: screenshot or short recording, blur or fake all real figures]
- Stack chips: Python, Flet, SQLite
- Case study: `/work/gexp` (in daily use at the father's business; worker sends
  the WhatsApp summary in two taps; categories: tea, water, biscuits, snacks,
  transport, petrol)
- Seen in skills: Desktop and mobile tools, Putting things online, Working with people

### 3.5 GST Reconciler

- slug: `gst-reconciler`
- tag: `for accountants`
- Card line: `A Windows app for my dad, who does accounting for several firms. It compares Tally purchase records with GSTR-2B and flags every mismatch.`
- CTA: `Get the .exe` to `https://github.com/gsraj0301/gst-reconciler`
  [REPLACE: release link. Publish only after the sample data in the repo is confirmed fake.]
- Screenshot: done, `public/images/gst.jpeg` (1600x640). Because it handles
  other firms' financial data, every screenshot must use fake data.
- Stack chips: Python, Tkinter, Excel reports
- Case study: `/work/gst-reconciler` (most of a day per reconciliation, now two
  minutes at most; doubtful near-matches stay visible for double-checking)
- Seen in skills: Desktop and mobile tools, Working with people

### 3.6 Fake Job Posting Detector

Standard Work card, no case-study page. CTA `Read the story` links to the repo.

- Card line: `Flags fraudulent job postings: 90% recall, ROC-AUC 0.989, trained on 17,880 Kaggle postings.`
- Repo: `https://github.com/gsraj0301/Fake-Job-Posting-Detector`
- Stack chips: Python, scikit-learn, pandas, NumPy, matplotlib
- Seen in skills: Data, ML and dashboards

## 4. Skills

Section heading: `What I can build`
Intro line: `Each of these is something I've already built and shipped. Tap a project to see the proof.`

Row labels on each sticker: `Built and shipped with`, `Used or familiar with`
(hidden when empty), `Seen in`.

Rule: only put a technology in "Built and shipped with" if a listed project uses
it. Prune anything Raj cannot explain in an interview.

### 4.1 Web apps with logins and databases
- Sentence: `Full-stack apps that people sign in to, with admin dashboards and real data.`
- Built and shipped with: Node.js, Express, Next.js, Django, MySQL, SQLite, Supabase, TypeScript
- Used or familiar with: FastAPI, PostgreSQL, Flask, Streamlit
- Seen in: PRIDE portal, Kindled, Fresher's counter

### 4.2 Desktop and mobile tools
- Sentence: `Small apps that do one job well, for a phone or a Windows PC.`
- Built and shipped with: Python, Flet, Tkinter, SQLite
- Used or familiar with: React Native
- Seen in: Gexp, GST Reconciler

### 4.3 Data, ML and dashboards
- Sentence: `Turning data into something people can read, and building models around it.`
- Built and shipped with: Python, scikit-learn, pandas, NumPy, matplotlib
- Used or familiar with: Streamlit, Plotly, Seaborn
- Seen in: Fake Job Posting Detector (GitHub)

### 4.4 Logins, files and email
- Sentence: `The plumbing every real app needs: accounts, uploads and notifications.`
- Built and shipped with: JWT auth, bcrypt, Cloudinary, Backblaze B2, Nodemailer, Brevo
- Seen in: PRIDE portal

### 4.5 Putting things online
- Sentence: `Deploying apps so real users can reach them.`
- Built and shipped with: Render, Vercel, PythonAnywhere, GitHub Actions
- Used or familiar with: Cloudflare Pages, Streamlit Cloud
- Seen in: PRIDE portal, Fresher's counter, Kindled, Gexp

### 4.6 Working with people
- Sentence: `Building for faculty, an accountant and a family business taught me to ask first and build second. I also lead a five-person team on our IPD project.`
- Chips: none for tech. Show only "Seen in".
- Seen in: Fresher's counter, GST Reconciler, Gexp

## 5. How I build

Section heading: `How I build`
Four steps (this is a real sequence, numbers are allowed):

1. `Start with a real person.` / `Every project here began with someone who had a problem: my dad, a faculty member, my classmates.`
2. `Ship the smallest useful version.` / `A working page this week beats a perfect one next month.`
3. `Put it in front of real users.` / `Real users find what testing never does.`
4. `Fix what breaks.` / `Then fix the next thing.`

Closing line (about AI tools):
`I use AI coding tools as my hands. I decide what gets built, read what they write, and fix what breaks.`

## 6. Games

Section heading: `Games`
Intro line: `I'll always pick a story first.`
Figure: static `About 1,000` (not a count-up, so it never reads as exact),
caption `games I play, SNES to PS3 & PC`.

Console strip (text chips, in order): SNES, GBA, PlayStation, PS2, NDS, 3DS, PS3, PC

Top 5, ranked from 5 down to 1, each with Raj-supplied box-art thumbnail
(`public/images/*.png`):

5. Growlanser series (PS2): `Combat that never gets boring, choices that actually matter, multiple endings, and a story that's crazy good. This is why I still love JRPGs.`
4. Mass Effect trilogy: `Three games with a great story, characters you really grow with, and combat that stays fun.`
3. Dragon Age: Origins: `Fantasy is my favourite genre, and this one nails it: a story that pulls you in and combat that never gets boring.`
2. Sleeping Dogs: `Crazy martial-arts fights in an open-world Hong Kong. What else do you need?`
1. Telltale games: `I love games that tell a story, and Telltale tells them best. Come back, please.`

## 7. Words

Section heading: `Words`
Intro line: `I also write. Under the name Raj G, I'm working on two novels. I started with ChoiceScript interactive fiction before moving to prose.`

Book stickers (status chip `in progress` on both):

- Hands That Remember: genre line `Sci-fi mech story.` Hook: [PLACEHOLDER: chapter incomplete, hooks to be written]
- Sword That Talks: genre line `Fantasy with a talking sword named Ozarion.` Hook: [PLACEHOLDER: chapter incomplete, hooks to be written]

Say "I write", never "author", until something is published.

## 8. Contact

- Heading: `Say hi`
- Sub-line: `Internship, project, or just want to talk games? Email is fastest.`
- Email (mailto link, large): `gsraj.developer@gmail.com`
- LinkedIn button: `LinkedIn` to `https://www.linkedin.com/in/raj-g-314576384/`
- GitHub button: `GitHub` to `https://github.com/gsraj0301`
- Resume button: `Download resume` to `/raj-g-resume.pdf`
- Contact form: "Or leave a message" — name, email, message; inserts into
  Supabase `contacts`; success "Message sent. I'll get back to you."; error
  falls back to the email address.
- No phone number anywhere on the site.
- Footer sign-off (handwritten, centred): `Built by Raj G in Chennai.`

## 9. Navigation labels

- Desktop: Work, Skills, Games, Words, Resume, Say hi
- Mobile top bar: Raj G logo + Resume pill
- Mobile bottom pill: Work, Skills, Games, Contact
- Case-study pages: `Back to work`

## 10. 404 page

- Heading: `Page not found`
- Line: `This sticker fell off the board.`
- Button: `Go home`

## 11. Replacement checklist (status)

| # | Where it goes | Status |
| --- | --- | --- |
| 1 | Global, social preview | Pending: 1200x630 preview image |
| 2 | Hero | Done: photo (`public/raj.jpg`) |
| 3 | What people said | Pending: exact quote, name, role, permission |
| 4 | PRIDE | Done: copy + screenshot |
| 5 | Kindled | Done: live URL, stack, GA4 timeline, screenshot |
| 6 | Fresher's counter | Copy + URL done; screenshot pending |
| 7 | Gexp | Copy done; screenshot + APK release link pending |
| 8 | GST Reconciler | Copy + screenshot done; .exe release link pending |
| 9 | Also built | Done: Fake Job Posting Detector card |
| 10 | Skills | Done: tiers reconciled with projects |
| 11 | How I build | Done: AI-tools line |
| 12 | Games | Done: consoles, box art, static figure |
| 13 | Words | Pending: hook paragraph for each novel |
| 14 | Contact | Done: resume PDF + Supabase form (grant insert required) |
