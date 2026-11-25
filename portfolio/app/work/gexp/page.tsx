import type { CaseStudyData } from "../../components/CaseStudy";
import { CaseStudy, caseStudyMetadata } from "../../components/CaseStudy";

const gexpData: CaseStudyData = {
  title: "Gexp",
  tag: "family business",
  intro:
    "A small Android app for my father's company. A worker logs daily expenses and closes the month when payment arrives.",
  glance: {
    role: "Solo Android build",
    stack: "Python, Flet, SQLite",
    status: "In daily use at my father's business",
    linkLabel: "GitHub repo",
    linkHref: "https://github.com/gsraj0301/GPexp",
  },
  problem:
    "Every day at my father's wholesale medicine business, the worker buys small things: tea, water, biscuits, petrol, stationery. It all went into a paper register. The register only existed where the register was. If my father wasn't at the office, he couldn't see a thing. At month-end, someone sat down with a calculator and a lot of hope.",
  why: "I was in that office almost every day, so I wasn't guessing at the problem. I watched it happen. A register can get lost, soaked in chai, or miscounted. My father didn't need a fancy ERP. He needed yesterday's expenses on his phone, without asking anyone. He already lives on WhatsApp, so the app had to meet him there. No new login, no dashboard, no portal to download.",
  features: [
    "A fully offline Android app: no server, no cloud, no login. The worker logs expenses as they happen into a local SQLite database.",
    "Every morning the worker sends my father yesterday's itemized spending on WhatsApp in two taps, powered by WorkManager and share_plus.",
    "Month-end close locks the period and rolls over to the next month automatically, so the calculator can retire.",
    "Custom categories for tea, water, biscuits, snacks, transport and petrol, built with Python and Flet on Flutter, with the APK shipped through GitHub Actions.",
  ],
  howWent:
    "Built in under four days, then used for real on July 2, 3 and 4 — and it's still in daily use at my father's office. Then things broke, which was the fun part. The WhatsApp button did nothing on the phone. I had forgotten to await an async launch_url() call, so the coroutine quietly never ran. The bug wasn't loud. It was polite, which is the worst kind. SQLite also got lost on Android: desktop paths and phone paths are not friends, and the database had no idea where to live until it landed in the right app directory. The boss fight was WorkManager and share_plus, two Flutter plugins that Flet doesn't hand you on a plate, so I built a custom Flutter template and tried things until the red text turned green. There was a late-night stretch where nothing cooperated, and honestly, I prayed. God helped me get through it. Then the pieces clicked, the APK installed, and the worker tapped through it like he'd used it for years. I just stood there grateful. My first app taught me more than any tutorial: observe the problem, test on a real device, and always await your coroutines. Grateful to my father and his worker for trusting a first app.",
  gallery: [
    { src: "/images/gpexp.jpeg", width: 720, height: 1499, caption: "Gexp expense logger in daily use" },
  ],
  metrics: [
    { value: "4", label: "days to build" },
    { value: "6", label: "expense categories" },
    { value: "2", label: "taps for daily WhatsApp report" },
  ],
  painPoints: [
    "Paper register only existed where it was",
    "Register could be lost or miscounted",
    "Month-end meant a calculator and hope",
  ],
  flow: {
    title: "Daily flow",
    nodes: [
      "Worker logs expense → SQLite",
      "Worker sends WhatsApp report (2 taps)",
      "Month-end close → next month rolls over",
    ],
    note: "Fully offline — no server, no cloud, no login. Worker sends yesterday's itemized spending on WhatsApp in two taps.",
  },
  decisions: [
    {
      title: "Offline-first",
      body: "No server, no cloud, no login. The worker logs expenses as they happen into a local SQLite database.",
    },
    {
      title: "WhatsApp as the interface",
      body: "Father already lives on WhatsApp. The app had to meet him there — no new login, no dashboard, no portal to download.",
    },
  ],
  challenges: [
    {
      title: "WhatsApp button did nothing",
      body: "Forgot to await an async launch_url() call, so the coroutine quietly never ran. The bug wasn't loud. It was polite, which is the worst kind.",
      fix: "Awaited it properly; then WorkManager and share_plus needed a custom Flutter template.",
    },
    {
      title: "SQLite got lost on Android",
      body: "Desktop paths and phone paths are not friends, and the database had no idea where to live until it landed in the right app directory.",
      fix: "Database landed in the right app directory.",
    },
    {
      title: "WorkManager + share_plus boss fight",
      body: "Two Flutter plugins that Flet doesn't hand you on a plate, so I built a custom Flutter template and tried things until the red text turned green.",
      fix: "Built a custom Flutter template and tried things until the red text turned green.",
    },
  ],
  results:
    "Built in under four days, then used for real on July 2, 3 and 4 — and it's still in daily use at my father's office. Then the pieces clicked, the APK installed, and the worker tapped through it like he'd used it for years. I just stood there grateful.",
  lessons:
    "My first app taught me more than any tutorial: observe the problem, test on a real device, and always await your coroutines. Grateful to my father and his worker for trusting a first app.",
  screenshot: { src: "/images/gpexp.jpeg", width: 720, height: 1499 },
  stack: ["Python", "Flet", "SQLite"],
  repo: "https://github.com/gsraj0301/GPexp",
  next: { title: "GST Reconciler", href: "/work/gst-reconciler", tag: "for accountants" },
};

export const metadata = caseStudyMetadata(gexpData);

export default function GexpPage() {
  return <CaseStudy data={gexpData} />;
}