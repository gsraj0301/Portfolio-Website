# memory.md: a brief walk‑through

Built this portfolio while reflecting on the projects that shaped my first
two years as a full‑stack builder.

- **PRIDE** – the first real full‑stack experience. Node.js, Express, MySQL,
  JWT, Cloudinary, Backblaze B2. Learnt that free hosting has opinions, to
  rotate secrets and read every line my tools write, and that 2,000+ students
  can keep a portal alive for a whole semester. God helped me stay calm when
  the scoring bug went live, and the principal's letter of appreciation made
  every bug worth it.

- **Kindled** – the "I wish someone had said this" project. Curated videos,
  Django + SQLite + PythonAnywhere, the ModuleNotFoundError that wasn't, the
  traffic numbers that lied, and the honest 27 real users who actually stuck
  around. Learnt that building a product and building a habit are two different
  projects.

- **Fresher's counter** – the "WhatsApp is chaotic" project. Next.js +
  Tailwind + TypeScript + Supabase + Vercel. JWT + bcrypt for auth, live
  totals for faculty, one class‑incharge's grateful note. Learnt that
  real‑world usage numbers are more useful than vanity metrics.

- **Gexp** – the "father's expense tracker" project. Python + Flet + SQLite +
  WorkManager + GitHub Actions. Daily expenses, month close, WhatsApp summary
  in two taps, custom categories (tea, water, biscuits, snacks, transport,
  petrol). Still in daily use at my father's business. Learnt that the smallest
  useful version shipped this week beats a perfect one next month.

- **GST Reconciler** – the "Tally vs GSTR‑2B" project. Python + Tkinter +
  Pandas + openpyxl. Drag‑and‑drop Excel files, flag mismatches, colour‑coded
  report, preserve originals. My dad does accounting for several firms; each
  reconciliation ate most of a day and now takes two minutes at most. Learnt
  that matching by GSTIN + invoice number + party name, tolerating ≤ ₹10 value
  differences, is the sweet spot.

- **Fake Job Posting Detector** – the "ML for good" project. TF‑IDF +
  Logistic Regression, 90% fake recall, ROC‑AUC 0.989, 17,880 Kaggle
  postings. Python + scikit‑learn + pandas + NumPy + matplotlib. Learnt that
  protecting job seekers matters more than raw accuracy on imbalanced data.

- **Working with people** – the IPD team (Team IGNIS, five‑person), leading
  a real client (faculty and an accountant), internship reviewers who care
  about honest skills lists. Three rules: no percentage bars, two tiers
  ("Built and shipped with" / "Used or familiar with"), drop anything you
  can't demo in an interview.

- **Motion enhancement (2026-11-24)** – Added polished, CSS‑only motion
  design per DESIGN.md constraints: one orchestrated moment + motion that
  responds to user action; transform/opacity only; no animation library.
  Built custom hooks in `app/lib/motion.ts` (useCountUp, useInView,
  useScrollProgress, useReducedMotion). All animations respect
  `prefers-reduced-motion: reduce`.

Grateful for God, for my faculty mentors, for my class in‑charge and HOD,
and for every bug that taught me something. The biggest lesson:
you don't need to know everything to start. You need someone to trust you,
and the willingness to build, break, fix, and repeat.