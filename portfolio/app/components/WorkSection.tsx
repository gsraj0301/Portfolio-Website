import type { CSSProperties, FC } from "react";
import Image from "next/image";

type Project = {
  title: string;
  tag: string;
  cardLine: string;
  href: string;
  ctaLabel: string;
  stack: string[];
  fill: string;
  tilt: string;
  feature?: boolean;
  story?: string;
  stats?: { value: string; label: string }[];
  screenshot?: { src: string; width: number; height: number };
};

const projects: Project[] = [
  {
    title: "PRIDE portal",
    tag: "college",
    cardLine:
      "One platform for college competitions. Used by 2,000+ students for a whole semester.",
    href: "https://agni-pride.onrender.com",
    ctaLabel: "Visit site",
    stack: ["Node.js", "Express", "MySQL", "JWT auth", "Cloudinary"],
    screenshot: { src: "/images/pride.png", width: 1660, height: 907 },
    fill: "var(--card)",
    tilt: "-1.5deg",
    feature: true,
    story: "/work/pride",
    stats: [
      { value: "2,000", label: "students signed up" },
      { value: "231", label: "teams took part" },
      { value: "14", label: "competitions run" },
    ],
  },
  {
    title: "Kindled",
    tag: "for learners",
    cardLine:
      "Hand-picked learning videos for college students. No algorithm, no noise.",
    href: "https://kindled-pythonanywhere.com",
    ctaLabel: "Visit site",
    stack: ["Django", "SQLite", "PythonAnywhere"],
    screenshot: { src: "/images/kindled.png", width: 1660, height: 907 },
    fill: "var(--blush)",
    tilt: "1.5deg",
    story: "/work/kindled",
  },
  {
    title: "Fresher's counter",
    tag: "college",
    cardLine:
      "Faculty were sending Fresher's Day headcounts over WhatsApp. Now they update one page and see the live total.",
    href: "https://fresher-day-registrations.vercel.app",
    ctaLabel: "Visit site",
    stack: ["Next.js", "Supabase", "Vercel"],
    fill: "var(--mint)",
    tilt: "-1deg",
    story: "/work/fresher-counter",
  },
  {
    title: "Gexp",
    tag: "family business",
    cardLine:
      "A small Android app for my father's company. A worker logs daily expenses and closes the month when payment arrives.",
    href: "https://github.com/gsraj0301/GPexp",
    ctaLabel: "Get the APK",
    stack: ["Python", "Flet", "SQLite"],
    fill: "var(--card)",
    tilt: "1deg",
    story: "/work/gexp",
  },
  {
    title: "GST Reconciler",
    tag: "for accountants",
    cardLine:
      "A Windows app for my dad, who does accounting for several firms. It compares Tally purchase records with GSTR-2B and flags every mismatch.",
    href: "https://github.com/gsraj0301/gst-reconciler",
    ctaLabel: "Get the .exe",
    stack: ["Python", "Tkinter", "Excel reports"],
    screenshot: { src: "/images/gst.jpeg", width: 1600, height: 640 },
    fill: "var(--marigold)",
    tilt: "-2deg",
    story: "/work/gst-reconciler",
  },
  {
    title: "Fake Job Posting Detector",
    tag: "",
    cardLine:
      "Flags fraudulent job postings: 90% recall, ROC-AUC 0.989, trained on 17,880 Kaggle postings.",
    href: "https://github.com/gsraj0301/Fake-Job-Posting-Detector",
    ctaLabel: "View on GitHub",
    stack: ["Python", "scikit-learn", "pandas", "NumPy", "matplotlib"],
    fill: "var(--card)",
    tilt: "1.5deg",
  },
];

export const WorkSection: FC = () => {
  return (
    <section id="work" aria-labelledby="work-title" className="section">
      <div className="shell">
        <h2 id="work-title" className="text-h2">
          Things I&rsquo;ve built for real people
        </h2>
        <p className="text-small mt-4 max-w-[52ch] text-ink-soft">
          Every one of these started with someone who had a problem. Tap one for
          the full story.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={[
                "sticker flex flex-col p-6 sm:p-7",
                project.feature ? "md:col-span-2" : "",
              ].join(" ")}
              style={
                {
                  "--tilt": project.tilt,
                  background: project.fill,
                } as CSSProperties
              }
            >
              <div
                className={
                  project.feature
                    ? "grid gap-8 lg:grid-cols-[1.6fr_1fr]"
                    : "flex flex-1 flex-col"
                }
              >
                <div className="flex flex-col">
                  {project.tag ? (
                    <span className="tag self-start">{project.tag}</span>
                  ) : null}

                  <h3 className={project.tag ? "text-h3 mt-4" : "text-h3"}>
                    {project.story ? (
                      <a href={project.story} className="hover:underline">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>

                  <p className="text-small prose-measure mt-2 text-ink-soft">
                    {project.cardLine}
                  </p>

                  {project.screenshot ? (
                    <Image
                      src={project.screenshot.src}
                      alt={project.title}
                      width={project.screenshot.width}
                      height={project.screenshot.height}
                      className="mt-4 rounded-lg shadow-hard"
                      loading="lazy"
                    />
                  ) : null}
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
                    {project.stack.map((tech) => (
                      <li key={tech} className="chip chip-solid">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary px-4 py-2.5 text-base min-h-11"
                    >
                      {project.ctaLabel}
                    </a>
                    {project.story ? (
                      <a
                        href={project.story}
                        className="text-[0.9375rem] font-semibold underline decoration-2 underline-offset-4"
                      >
                        Read the story
                      </a>
                    ) : null}
                  </div>
                </div>

                {project.feature && project.stats ? (
                  <dl className="hidden border-l-2 border-dashed border-ink/40 pl-8 lg:flex lg:flex-col lg:justify-center">
                    {project.stats.map((stat, i) => (
                      <div
                        key={stat.label}
                        className={
                          i > 0
                            ? "mt-4 border-t-2 border-dashed border-ink/40 pt-4"
                            : ""
                        }
                      >
                        <dt className="text-small text-ink-soft">{stat.label}</dt>
                        <dd className="bricolage mt-1 text-4xl font-extrabold leading-none">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
