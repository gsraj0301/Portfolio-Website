Do check the original files to understand and find content about the projects more properly and more raj.

# CONTENT.md: Raj G portfolio copy

All words on the site come from this file. Do not invent copy. If a field says
`[REPLACE]`, stop and ask for it instead of filling it in.

Visual rules live in `DESIGN.md`. Pages and behaviour live in `SPEC.md`.

## Markers

- `[REPLACE: ...]` Raj must supply this. Nothing is drafted, or the draft is
  only a placeholder shape.
- `[CHECK: ...]` Draft text is filled in, but Raj must confirm it is true before
  launch.
- Everything else is final.

## Voice rules

- First person, plain words, short sentences. Sounds like Raj explaining his
  work to a friend.
- Sentence case everywhere: headlines, buttons, tags, nav.
- Specific beats clever. Use real numbers, real names of things.
- Allowed: one light joke per section at most.
- Banned words: passionate, robust, scalable, leverage, cutting-edge,
  production-grade, at scale, seamless, innovative, ninja, rockstar.
- Buttons are verb phrases: "See my work", "Visit site", "Get the APK".
- No arrow characters in any text.

## Global

- Site title: `Raj G | Apps people actually use`
- Meta description: `Second-year AI and Data Science student in Chennai. I build full-stack apps for my college, for businesses and free learning.`
- Language: English (India)
- Social preview image: [DONE: designed per hero sticker cluster (raj g. + headline), generated at build time per DESIGN.md]

## 1. Hero

- Headline: `I build things people actually use.`
- Sub-line: `Second-year AI and Data Science student in Chennai. I build apps for my college, my dad's business, and anyone who wants to learn for free.`
- Primary button: `See my work` (jumps to `#work`)
- Secondary button: `Say hi` (jumps to `#contact`)
- Handwritten note (next to the stickers): `(yes, really)`

Stat stickers (real facts only):

1. `2,000+ students` / `on the PRIDE portal`
2. `About 1000 games` / `SNES to PS3 & PC`
3. `2 novels` / `in progress`

- Die-cut photo caption (optional, handwritten): [DONE: photo provided by Raj, caption optional]
- Photo: [DONE: photo provided by Raj, file path `public/raj.jpg`]

## 2. What people said

Render only if at least one real quote is provided. Never write quotes for
people.

1. Quote: [REPLACE: exact words from Raj's first-year class incharge about the
   Fresher's Day counter]. Name and role: [REPLACE]. Permission to use name:
   [REPLACE: yes or no].
2. Quote: [REPLACE: optional, someone connected to PRIDE]. Name and role:
   [REPLACE].

## 3. Work

Section heading: `Things I've built for real people`
Intro line: `Every one of these started with someone who had a problem. Tap one for the full story.`

Order: PRIDE (feature size), Kindled, Fresher's counter, Gexp, GST Reconciler.

### 3.1 PRIDE portal

- slug: `pride`
- tag: `college`
- size: feature
- Card line: `One platform for college competitions. Used by 2,000+ students for a whole semester.`
- CTA: `Visit site` to `https://agni-pride.onrender.com` [CHECK: fine to link publicly]
- Card screenshot: [REPLACE: public/work/pride.webp, no private student data]
- Stack chips: Node.js, Express, MySQL, JWT auth, Cloudinary, Backblaze B2, Nodemailer, Brevo, Render
- Seen in skills: Web apps, Logins files and email, Deploying

Case study:

- Problem: [REPLACE: what the college did before PRIDE, one sentence]
- Why I built it: [REPLACE: 2 to 3 sentences, who asked, what you wanted to fix]
- What it does: [REPLACE: 3 to 4 plain-language features]. Facts on file:
  login with JWT, image uploads through Cloudinary, file storage on Backblaze B2,
  status emails through Nodemailer and Brevo. [CHECK]
- How it went: `It ran for a whole semester with 2,000+ students. It started with one purpose, then the principal asked me to extend it to every college competition.` [CHECK: wording of how it started]
- What broke or what I'd change: [REPLACE: one honest thing]

### 3.2 Kindled

- slug: `kindled`
- tag: `for learners`
- size: standard
- Card line: `Hand-picked learning videos for college students. No algorithm, no noise.`
- CTA: `Visit site` to [REPLACE: Kindled live URL]
- Card screenshot: [REPLACE: public/work/kindled.webp]. Before taking it, fix the
  "Artificial Inteligence" category typo.
- Stack chips: [REPLACE: confirm from the Kindled README]
- Seen in skills: Web apps

Case study:

- Problem: `Students lose hours searching YouTube, because YouTube is built to keep you watching, not to help you learn.`
- Why I built it: `I wanted one clean place where the good videos are already picked by a person, so you can start learning instead of searching.` [CHECK: adjust to match your README story]
- What it does: [REPLACE: 3 to 4 features from the README]
- How it went: `Real student usage, verified in Google Analytics 4.` Add one number:
  [REPLACE: one verified number from GA4. The README text says 1,500+ visits and the badge says 5,000+, so check analytics and use only the real figure.]
- What I'd change: [REPLACE: e.g. what you'd improve next]

### 3.3 Fresher's Day counter

- slug: `fresher-counter`
- tag: `college`
- size: standard
- Card line: `Faculty were sending Fresher's Day headcounts over WhatsApp. Now they update one page and see the live total.`
- CTA: `Visit site` to [REPLACE: the live Vercel URL. The repo mentions two, pick the one that works.]
- Card screenshot: [REPLACE: public/work/fresher.webp, no real student names]
- Stack chips: Next.js, JWT auth, Vercel, [REPLACE: database used]
- Seen in skills: Web apps, Logins files and email, Deploying, Working with people

Case study:

- Problem: `My first-year class incharge and the other faculty were collecting student and family headcounts for Fresher's Day through WhatsApp messages.`
- Why I built it: `My class incharge asked me to make something that would count everyone in one place.`
- What it does: `Faculty log in, update the count for their department and section, and the totals add up live. There are separate views for admins and faculty.` [CHECK: who sees the overall total]
- How it went: `My class incharge said it was very helpful.` (quote the real words in the
  quote strip if permitted)
- What I'd change: [REPLACE: optional]
- Repo: `https://github.com/gsraj0301/fresher-day-registrations`

### 3.4 Gexp

- slug: `gexp`
- tag: `family business`
- size: standard
- Card line: `A small Android app for my father's company. A worker logs daily expenses and closes the month when payment arrives.`
- CTA: `Get the APK` to [REPLACE: GitHub release link for v1.0.0]
- Card media: [REPLACE: short screen recording, blur or fake all real figures]
- Stack chips: Python, Flet, SQLite
- Seen in skills: Desktop and mobile tools

Case study:

- Problem: [REPLACE: how expenses were tracked before, one sentence]
- Why I built it: [REPLACE: what you saw at your father's company]
- What it does: `Log expenses through the day, see the month's total, and close the month when payment is received. Everything stays on the phone: no login, no server, no cloud.` Optional: `It can send a daily summary to WhatsApp.` [CHECK: confirm this feature is in the shipped version]
- How it went: [REPLACE: who uses it, for how long]
- What I'd change: [REPLACE: optional]
- Repo: `https://github.com/gsraj0301/GPexp`

### 3.5 GST Reconciler

- slug: `gst-reconciler`
- tag: `tool for an accountant`
- size: standard
- Card line: `A Windows app for my father's accountant. It compares Tally purchase records with the GSTR-2B return and flags every mismatch.`
- CTA: `Get the .exe` to [REPLACE: release link. Publish only after the sample data in the repo is confirmed fake.]
- Card media: [REPLACE: screen recording using fake data only]
- Stack chips: Python, Tkinter, Excel reports
- Seen in skills: Desktop and mobile tools, Working with people

Case study:

- Problem: `Matching a company's Tally voucher register against the GST portal's GSTR-2B by hand is slow and easy to get wrong.`
- Why I built it: [REPLACE: what you saw your accountant doing, how long it took]
- What it does: `Drop in the two Excel files and it flags mismatches in invoice numbers, taxable value, and IGST, CGST and SGST. It exports a colour-coded report and keeps the original file untouched.`
- How it went: [REPLACE: who uses it, time saved if you can back it up]
- What I'd change: [REPLACE: optional]
- Repo: `https://github.com/gsraj0301/gst-reconciler`

### 3.6 Also built

Small stickers, no screenshots, no case-study pages. Link to GitHub.

- Fake Job Posting Detector: [REPLACE: one plain line plus one result you can explain in an interview]. Repo: [REPLACE]


## 4. Skills

Section heading: `What I can build`
Intro line: `Each of these is something I've already built and shipped. Tap a project to see the proof.`

Row labels on each sticker: `Built and shipped with`, `Used or familiar with`, `Seen in`.

Rule: only put a technology in "Built and shipped with" if a listed project uses
it. Prune anything Raj cannot explain in an interview.

### 4.1 Web apps with logins and databases
- Sentence: `Full-stack apps that people sign in to, with admin dashboards and real data.`
- Built and shipped with: Node.js, Express, Next.js, MySQL, SQLite, JWT auth
- Used or familiar with: Django, FastAPI, PostgreSQL, Supabase, Flask, Streamlit, Plotly, Cloudflare Pages
- Seen in: PRIDE portal, Kindled, Fresher's counter

### 4.2 Desktop and mobile tools
- Sentence: `Small apps that do one job well, for a phone or a Windows PC.`
- Built and shipped with: Python, Flet, Tkinter, SQLite
- Used or familiar with: React Native
- Seen in: Gexp, GST Reconciler

### 4.3 Data, ML and dashboards
- Sentence: `Turning data into something people can read, and building models around it.`
- Built and shipped with: Python, scikit-learn, pandas, NumPy, matplotlib
- Seen in: Fake Job Posting Detector (GitHub)
- Used or familiar with: Streamlit, Plotly, Seaborn

### 4.4 Logins, files and email
- Sentence: `The plumbing every real app needs: accounts, uploads and notifications.`
- Built and shipped with: JWT auth, Cloudinary, Backblaze B2, Nodemailer, Brevo
- Seen in: PRIDE portal

### 4.5 Putting things online
- Sentence: `Deploying apps so real users can reach them.`
- Built and shipped with: Render, Vercel
- Used or familiar with: Cloudflare Pages, PythonAnywhere, Streamlit Cloud
- Seen in: PRIDE portal, Fresher's counter

### 4.6 Working with people
- Sentence: `Building for faculty, an accountant and a family business taught me to ask first and build second. I also lead a five-person team on our IPD project.`
- Chips: none for tech. Show only "Seen in".
- Seen in: Fresher's counter, GST Reconciler, Gexp
- [CHECK: fine to mention the IPD team publicly and by what name]

## 5. How I build

Section heading: `How I build`
Four steps (this is a real sequence, numbers are allowed):

1. `Start with a real person.` / `Every project here began with someone who had a problem: a faculty member, an accountant, my dad's team, my classmates.`
2. `Ship the smallest useful version.` / `A working page this week beats a perfect one next month.`
3. `Put it in front of real users.` / `Real users find what testing never does.`
4. `Fix what breaks.` / `Then fix the next thing.`

Closing line (about AI tools): 
`I use AI coding tools to move faster. I decide what gets built, read what they write, and fix what breaks. It's more like they are my hands and I am the brains and in this way I can build and move faster.`
## 6. Games

Section heading: `Games`
Intro line: `About 1000 games, from SNES to PS3 & PC. I'll always pick a story first.`

Console strip (text chips, in order): SNES, GBA, PlayStation, PS2, NDS, 3DS, PS3, PC

Top 5, ranked from 5 down to 1:

5. Mount & Blade: Warband: `Looks old. Isn't. You raise an army, ride into huge battles and march across a whole continent. The mechanics are wild, and it gets addictive fast.`
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
- Resume button: `Download resume` to `public/raj-g-resume.pdf`
- No phone number anywhere on the site.
- Footer sign-off (handwritten, centred): `Built by Raj G in Chennai. Now go play something.`

## 9. Navigation labels

- Desktop: work, skills, games, words, resume, say hi
- Mobile bottom pill: Work, Skills, Games, Contact
- Case-study pages: `Back to work`

## 10. 404 page

- Heading: `Page not found`
- Line: `This sticker fell off the board.`
- Button: `Go home`

## 11. Replacement checklist

| # | Where it goes | What Raj provides |
| --- | --- | --- |
| 1 | Global, social preview | 1200x630 preview image |
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
