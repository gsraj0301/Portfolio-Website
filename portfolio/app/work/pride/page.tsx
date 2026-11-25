import type { CaseStudyData } from "../../components/CaseStudy";
import { CaseStudy, caseStudyMetadata } from "../../components/CaseStudy";

const prideData: CaseStudyData = {
  title: "PRIDE portal",
  tag: "college",
  intro:
    "One platform for college competitions, used by 2,000+ students for a whole semester.",
  glance: {
    role: "Solo build: code, data, coordination",
    stack: "Node.js, Express, MySQL, Cloudinary",
    status: "Live, one full semester",
    linkLabel: "Visit site",
    linkHref: "https://agni-pride.onrender.com",
  },
  problem:
    "College competitions lived in WhatsApp threads, paper forms and one in-charge's head. Students missed deadlines, evaluators chased proof, and there was no single place where a competition actually existed. For a college running a full semester of events, that meant the same information living in five places and agreeing in none.",
  why: "My faculty mentor trusted a first-year with something real, and my class in-charge and HOD opened the door. I went in knowing Python and met Node.js, Express, JWT, Cloudinary and about forty new ways for a server to say no. It started small, then the principal asked me to make it feel like Unstop, but for our college, and it grew into quizzes, workshops and cultural events. I said yes because it was a chance to learn in public, with real deadlines and real people waiting, under real pressure. I didn't know how much I didn't know, and that turned out to be the useful part.",
  features: [
    "One login for every competition, with 12-digit roll numbers. Numbers that long didn't fit the old column, so we moved to text and later to UUIDs.",
    "An Excel seeder that turned 2,000+ students into accounts without me typing a single password, plus DOB checks and self-declared departments for first-years.",
    "Teams, faculty mentors capped at three teams each, proof uploads, and an evaluator role with two scorers per team and a short edit window before scores lock.",
    "Posters and certificates on Cloudinary, slide decks on Backblaze B2 with signed links, and Brevo for year-wise email priority so second years got their mail first.",
  ],
  howWent:
    "It ran a whole semester: 231 teams, 2,000 users, 14 competitions and a letter of appreciation from the college. It also broke. The free MySQL database kept dropping connections, Render wiped uploaded posters until Cloudinary took over, and a live scoring bug keyed evaluations to the team instead of the Smart India Hackathon (SIH) statement. I found six dual-SIH teams, told the in-charge honestly, and fixed it so nobody lost a mark. God helped me stay calm there. I also learned to rotate secrets and read every line my tools write. What worked was the boring stuff: clear roles, a short edit window, and telling people the truth when a number was wrong. What I would change is the testing. I tested features, not the messy overlap between two competitions on the same day. The biggest lesson: you don't need to know everything to start. You need someone to trust you, and the will to build, break, fix and repeat. I'm grateful to my faculty mentors for the trust, and to the in-charge who answered every late question.",
  gallery: [
    { src: "/images/pride.png", width: 1660, height: 907, caption: "PRIDE portal dashboard during a live competition" },
  ],
  metrics: [
    { value: "2,000+", label: "students used it" },
    { value: "231", label: "teams across a semester" },
    { value: "14", label: "competitions" },
  ],
  painPoints: [
    "WhatsApp threads",
    "paper forms",
    "one person's head",
    "five copies of the truth",
  ],
  flow: {
    title: "Architecture",
      nodes: [
        "Excel seeder to MySQL",
        "Node.js + Express + JWT",
        "Cloudinary + Backblaze B2",
        "Brevo emails",
      ],
    note: "Every student account seeded from one spreadsheet; two scorers per team, short edit window.",
  },
  decisions: [
    {
      title: "JWT over sessions",
      body: "Stateless auth scales to 2,000+ users without server affinity; short-lived tokens with refresh.",
    },
    {
      title: "Cloudinary + Backblaze B2 over Render disks",
      body: "Render ephemeral disks wiped uploads; Cloudinary handles poster transformations, B2 stores slide decks cheaply.",
    },
  ],
  challenges: [
    {
      title: "Database kept dropping connections",
      body: "The free MySQL database kept dropping connections.",
      fix: "Learned to rotate secrets and read every line my tools write.",
    },
    {
      title: "Render wiped uploaded posters",
      body: "Render wiped uploaded posters until Cloudinary took over.",
      fix: "Posters and certificates moved to Cloudinary; slide decks on Backblaze B2 with signed links.",
    },
    {
      title: "Scoring bug keyed to team instead of SIH statement",
      body: "A live scoring bug keyed evaluations to the team instead of the Smart India Hackathon (SIH) statement.",
      fix: "Found six dual-SIH teams, told the in-charge honestly, and fixed it so nobody lost a mark. God helped me stay calm there.",
    },
  ],
  results:
    "It ran a whole semester: 231 teams, 2,000 users, 14 competitions and a letter of appreciation from the college. It also broke. What worked was the boring stuff: clear roles, a short edit window, and telling people the truth when a number was wrong.",
  lessons:
    "I also learned to rotate secrets and read every line my tools write. What I would change is the testing. I tested features, not the messy overlap between two competitions on the same day. The biggest lesson: you don't need to know everything to start. You need someone to trust you, and the will to build, break, fix and repeat. I'm grateful to my faculty mentors for the trust, and to the in-charge who answered every late question.",
  screenshot: { src: "/images/pride.png", width: 1660, height: 907 },
  stack: [
    "Node.js",
    "Express",
    "MySQL",
    "JWT auth",
    "Cloudinary",
    "Backblaze B2",
    "Nodemailer",
    "Brevo",
    "Render",
  ],
  repo: "https://github.com/gsraj0301/pride",
  live: "https://agni-pride.onrender.com",
  next: { title: "Kindled", href: "/work/kindled", tag: "for learners" },
  personas: [
    {
      kind: "matrix",
      title: "Who could do what",
      rows: [
        {
          role: "Student",
          action: "One login per competition, joins a team, uploads proof.",
          access: "Own team only",
        },
        {
          role: "Faculty mentor",
          action: "Capped at three teams each.",
          access: "Mentored teams",
        },
        {
          role: "Evaluator",
          action: "Two scorers per team, short edit window before scores lock.",
          access: "Assigned teams",
        },
        {
          role: "In-charge",
          action: "Sees every competition and every submission.",
          access: "All",
        },
      ],
    },
  ],
};

export const metadata = caseStudyMetadata(prideData);

export default function PridePage() {
  return <CaseStudy data={prideData} />;
}