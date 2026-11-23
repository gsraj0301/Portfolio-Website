import type { CaseStudyData } from "../../components/CaseStudy";
import { CaseStudy } from "../../components/CaseStudy";

const kindledData: CaseStudyData = {
  title: "Kindled",
  tag: "for learners",
  intro:
    "Hand-picked learning videos for college students. No algorithm, no noise.",
  glance: {
    role: "Solo build and curation",
    stack: "Django, SQLite, PythonAnywhere",
    status: "Live for four-plus months",
    linkLabel: "Visit site",
    linkHref: "https://kindled-pythonanywhere.com",
  },
  problem:
    "Every student I know wants to learn more than the syllabus: web dev, ML, UI/UX, even how to talk to people without panicking. But the moment you open YouTube to learn one thing, you get a pile of recommended videos, a gaming clip and a five-minute break that eats your evening. The internet doesn't lack resources. It lacks someone saying, start here, this one is actually good. For Tamil-medium learners it's worse: great tutorials exist, but they're scattered like lost socks.",
  why: "I'm a student myself, so I felt this one personally. I built the thing I wished existed: videos I watched and picked myself, with a note on why each is worth your time. The notes are drafted with an AI helper and edited by me, so they stay in my voice. No algorithm, no ads, no accounts, no login, no certificates. Just the feeling of, I understood it.",
  features: [
    "Django and SQLite on the backend, plain HTML, CSS and JS on the frontend, hosted on PythonAnywhere. Zero budget, maximum stubbornness.",
    "67+ curated videos across 12 categories, from programming and ML to UI/UX, books and self development, with a heavy Tamil pillar: the full HTML, CSS, JS, Node, Express and React series, in order.",
    "Curator notes on every video, drafted with an AI helper and edited by me, plus learning paths so beginners never wonder what to watch next. A small CLI tool, add_video.py, handles the boring parts of adding a video.",
    "Distraction-free video pages with no related videos or rabbit holes, a clear watch-on-YouTube fallback for videos that block embedding, search, and a suggestion form.",
  ],
  howWent:
    "Deployment day gave me ModuleNotFoundError: No module named django even though Django was installed. A nested folder had made my virtualenv path wrong. One corrected path in the Web tab and the WSGI file, and Kindled went live. Then the logo showed a glowing white box because I'd used a JPEG instead of a transparent PNG, and the mobile search bar sat in the middle of the screen like it was paying rent. Both fixed. The traffic numbers were lying at first. PythonAnywhere was counting every CSS, JS and image request plus bots. After I connected Google Analytics, the honest timeline looked like this. First week: 27 real users, with over two minutes of average engagement. After the class demo: the batch ahead started using it. Now: four-plus months live, 100 students have used it. There are returning users. What worked best was the simplest thing: standing in front of my class and showing it live. Students still forget. I'd show Kindled one-on-one, they'd say this is awesome, and a week later it had vanished from memory. Building a product and building a habit are two different projects. I also said no on purpose: no Shorts, because one tap puts you back in the scroll hole, no chess video, because that was scope creep, and no cartoon-wisdom compilation, because copyright. Curation is as much about what you leave out. Next up: the new first-years, more Tamil content, and being there at the exact moment a student thinks, okay, I need to learn this now. Not a certificate. Not a grade. Just, I understood it.",
  stack: ["Django", "SQLite", "PythonAnywhere"],
  repo: "https://github.com/gsraj0301/kindled",
  live: "https://kindled.pythonanywhere.com",
};

export default function KindledPage() {
  return <CaseStudy data={kindledData} />;
}
