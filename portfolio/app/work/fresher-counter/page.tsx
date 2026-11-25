import type { CaseStudyData } from "../../components/CaseStudy";
import { CaseStudy, caseStudyMetadata } from "../../components/CaseStudy";

const fresherData: CaseStudyData = {
  title: "Fresher's counter",
  tag: "college",
  intro:
    "Faculty were sending Fresher's Day headcounts over WhatsApp. Now they update one page and see the live total.",
  glance: {
    role: "Solo build",
    stack: "Next.js, Supabase, Vercel",
    status: "Live, built for one day",
    linkLabel: "Visit site",
    linkHref: "https://fresher-day-registrations.vercel.app",
  },
  problem:
    "Faculty were collecting Fresher's Day student and family headcounts through WhatsApp messages, and keeping the numbers straight was hard for everyone. Counts sat in different chats, nobody could add them up cleanly, and the day needed a real number.",
  why: "My class in-charge asked me to make one place where every count could live. The HOD needed the full picture at a glance, and faculty needed something quicker than typing numbers into a chat. Small app, one day, real people counting on it. I said yes.",
  features: [
    "Faculty sign in and update the count for their own department and section. Totals add up live across 14 sections and 10 departments, with inline editing and relative last-updated times.",
    "Role-based views: admins manage counts and faculty accounts, while the principal, HOD and deans get a read-only overview.",
    "JWT auth with bcrypt-hashed passwords and httpOnly cookies with a two-day expiry, so faculty can only touch their own section.",
    "Built with Next.js, Supabase and Vercel, with a table that refreshes every 30 seconds.",
  ],
  howWent:
    "I built it, demoed it to my class in-charge, took his input, changed the site and deployed it. Then came a sudden request: the principal needed a page to see the count too. I added a read-only overview and coordinated it with the first-year HOD. The real bug was the login. I had forgotten to await Next.js's async cookies() call, so every login bounced back to the login page. I got unblocked by reading the raw Cookie header, then fixed the await properly. On the day, I waited for news, and in the evening my class in-charge told me the site was very helpful. I'm grateful for the chance to build to faculty requirements and actually be useful.",
  gallery: [
    { src: "/images/fresher.png", width: 1660, height: 907, caption: "Fresher's Day headcount tracker live on the day" },
  ],
  metrics: [
    { value: "14", label: "sections" },
    { value: "10", label: "departments" },
    { value: "30s", label: "table refresh" },
    { value: "2", label: "day cookie expiry" },
  ],
  painPoints: [
    "Counts sat in different WhatsApp chats",
    "Nobody could add them up cleanly",
    "The day needed a real number",
  ],
  flow: {
    title: "How counts move",
    nodes: [
      "Faculty signs in",
      "Updates own department & section",
      "Totals add up live",
      "Principal reads the overview",
    ],
    note: "Inline editing with relative last-updated times. Read-only overview for principal, HOD and deans.",
  },
  decisions: [
    {
      title: "30-second refresh",
      body: "Next.js + Supabase Realtime keeps the table fresh without manual reloads.",
    },
    {
      title: "Role-based views",
      body: "Admins manage counts and faculty accounts; principal, HOD and deans get read-only overview.",
    },
  ],
  challenges: [
    {
      title: "Login bounced",
      body: "Forgot to await Next.js's async cookies() call, so every login bounced back to the login page.",
      fix: "Got unblocked by reading the raw Cookie header, then fixed the await properly.",
    },
  ],
  results:
    "I built it, demoed it to my class in-charge, took his input, changed the site and deployed it. Then came a sudden request: the principal needed a page to see the count too. I added a read-only overview and coordinated it with the first-year HOD. On the day, I waited for news, and in the evening my class in-charge told me the site was very helpful.",
  lessons:
    "I'm grateful for the chance to build to faculty requirements and actually be useful.",
  screenshot: { src: "/images/fresher.png", width: 1660, height: 907 },
  stack: ["Next.js", "Supabase", "Vercel", "JWT auth", "bcrypt"],
  repo: "https://github.com/gsraj0301/fresher-day-registrations",
  live: "https://fresher-day-registrations.vercel.app/",
  next: { title: "Gexp", href: "/work/gexp", tag: "family business" },
};

export const metadata = caseStudyMetadata(fresherData);

export default function FresherCounterPage() {
  return <CaseStudy data={fresherData} />;
}