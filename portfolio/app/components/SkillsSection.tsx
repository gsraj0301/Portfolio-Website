import type { CSSProperties, FC, ReactNode } from "react";
import { ExternalLink } from "lucide-react";

type Seen = { label: string; href?: string; external?: boolean };

type Capability = {
  title: string;
  sentence: string;
  builtWith: string[];
  usedWith: string[];
  seenIn: Seen[];
  fill: string;
  tilt: string;
  wide?: boolean;
};

const FAKEJOB = "https://github.com/gsraj0301/Fake-Job-Posting-Detector";

const capabilities: Capability[] = [
  {
    title: "Web apps with logins and databases",
    sentence:
      "Full-stack apps that people sign in to, with admin dashboards and real data.",
    builtWith: [
      "Node.js",
      "Express",
      "Next.js",
      "Django",
      "MySQL",
      "SQLite",
      "Supabase",
      "TypeScript",
    ],
    usedWith: ["FastAPI", "PostgreSQL", "Flask", "Streamlit"],
    seenIn: [
      { label: "PRIDE portal", href: "/work/pride" },
      { label: "Kindled", href: "/work/kindled" },
      { label: "Fresher's counter", href: "/work/fresher-counter" },
    ],
    fill: "var(--card)",
    tilt: "-1deg",
    wide: true,
  },
  {
    title: "Desktop and mobile tools",
    sentence: "Small apps that do one job well, for a phone or a Windows PC.",
    builtWith: ["Python", "Flet", "Tkinter", "SQLite"],
    usedWith: ["React Native"],
    seenIn: [
      { label: "Gexp", href: "/work/gexp" },
      { label: "GST Reconciler", href: "/work/gst-reconciler" },
    ],
    fill: "var(--mint)",
    tilt: "1deg",
    wide: true,
  },
  {
    title: "Data, ML and dashboards",
    sentence:
      "Turning data into something people can read, and building models around it.",
    builtWith: ["Python", "scikit-learn", "pandas", "NumPy", "matplotlib"],
    usedWith: ["Streamlit", "Plotly", "Seaborn"],
    seenIn: [
      { label: "Fake Job Posting Detector", href: FAKEJOB, external: true },
    ],
    fill: "var(--book)",
    tilt: "-1.5deg",
  },
  {
    title: "Logins, files and email",
    sentence:
      "The plumbing every real app needs: accounts, uploads and notifications.",
    builtWith: [
      "JWT auth",
      "bcrypt",
      "Cloudinary",
      "Backblaze B2",
      "Nodemailer",
      "Brevo",
    ],
    usedWith: [],
    seenIn: [{ label: "PRIDE portal", href: "/work/pride" }],
    fill: "var(--blush)",
    tilt: "1.5deg",
  },
  {
    title: "Putting things online",
    sentence: "Deploying apps so real users can reach them.",
    builtWith: ["Render", "Vercel", "PythonAnywhere", "GitHub Actions"],
    usedWith: ["Cloudflare Pages", "Streamlit Cloud"],
    seenIn: [
      { label: "PRIDE portal", href: "/work/pride" },
      { label: "Fresher's counter", href: "/work/fresher-counter" },
      { label: "Kindled", href: "/work/kindled" },
      { label: "Gexp", href: "/work/gexp" },
    ],
    fill: "var(--skill)",
    tilt: "-1deg",
  },
  {
    title: "Working with people",
    sentence:
      "Building for faculty, an accountant and a family business taught me to ask first and build second. I also lead a five-person team on our IPD project.",
    builtWith: [],
    usedWith: [],
    seenIn: [
      { label: "Fresher's counter", href: "/work/fresher-counter" },
      { label: "GST Reconciler", href: "/work/gst-reconciler" },
      { label: "Gexp", href: "/work/gexp" },
    ],
    fill: "var(--card)",
    tilt: "1deg",
  },
];

function RowLabel({ children, strong = false }: { children: ReactNode; strong?: boolean }) {
  return (
    <p className={["text-tag mt-6 text-ink", strong ? "font-bold" : "font-medium"].join(" ")}>
      {children}
    </p>
  );
}

const SeenLink: FC<{ seen: Seen }> = ({ seen }) => {
  if (!seen.href) {
    return <li className="chip chip-solid">{seen.label}</li>;
  }
  const name = seen.external
    ? `${seen.label} repository`
    : `${seen.label} case study`;
  return (
    <li>
      <a
        href={seen.href}
        target={seen.external ? "_blank" : undefined}
        rel={seen.external ? "noopener noreferrer" : undefined}
        aria-label={name}
        className="chip chip-project inline-flex items-center gap-1"
      >
        {seen.label}
        {seen.external ? (
          <ExternalLink size={13} strokeWidth={2} aria-hidden="true" />
        ) : null}
      </a>
    </li>
  );
};

export const SkillsSection: FC = () => {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section pb-28">
      <div className="shell">
        <div className="perforation mb-14" role="presentation" />
        <h2 id="skills-title" className="text-h2">
          What I can build
        </h2>
        <p className="text-small mt-4 max-w-[52ch] text-ink-soft">
          Each of these is something I&rsquo;ve already built and shipped. Tap a
          project to see the proof.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap) => (
            <article
              key={cap.title}
              className={[
                "sticker flex flex-col p-6",
                cap.wide ? "lg:col-span-2" : "lg:col-span-1",
              ].join(" ")}
              style={
                { "--tilt": cap.tilt, background: cap.fill } as CSSProperties
              }
            >
              <h3 className="text-h3">{cap.title}</h3>
              <p className="text-small mt-2 text-ink-soft">{cap.sentence}</p>

              {cap.builtWith.length > 0 ? (
                <>
                  <RowLabel strong>Built and shipped with</RowLabel>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {cap.builtWith.map((tech) => (
                      <li key={tech} className="chip chip-solid">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {cap.usedWith.length > 0 ? (
                <>
                  <RowLabel strong>Used or familiar with</RowLabel>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {cap.usedWith.map((tech) => (
                      <li key={tech} className="chip chip-quiet">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              <RowLabel>Seen in</RowLabel>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {cap.seenIn.map((seen) => (
                  <SeenLink key={seen.label} seen={seen} />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
