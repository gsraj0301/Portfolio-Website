"use client";

import type { CSSProperties, FC } from "react";
import Image from "next/image";
import { PressableSticker } from "./PressableSticker";

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
  small?: boolean;
  story?: string;
  screenshot?: { src: string; width: number; height: number };
  imagePosition?: string;
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
    screenshot: { src: "/images/fresher.png", width: 1660, height: 907 },
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
    screenshot: { src: "/images/gpexp.jpeg", width: 720, height: 1499 },
    imagePosition: "center top",
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
    imagePosition: "left top",
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
    ctaLabel: "Read the story",
    stack: ["Python", "scikit-learn", "pandas", "NumPy", "matplotlib"],
    fill: "var(--card)",
    tilt: "1.5deg",
    small: true,
  },
];

const ProjectCta: FC<{ project: Project; primary: boolean }> = ({
  project,
  primary,
}) => (
  <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "btn px-4 py-2.5 text-base min-h-12",
        primary ? "btn-primary" : "btn-secondary",
      ].join(" ")}
    >
      {project.ctaLabel}
    </a>
    {project.story ? (
      <a
        href={project.story}
        className="inline-flex min-h-11 items-center text-[0.9375rem] font-semibold underline decoration-2 underline-offset-4"
      >
        Read the story
      </a>
    ) : null}
  </div>
);

export const WorkSection: FC = () => {
  return (
    <section id="work" aria-labelledby="work-title" className="section pb-28">
      <div className="shell">
        <h2 id="work-title" className="text-h2">
          Things I&rsquo;ve built for real people
        </h2>
        <p className="text-small mt-4 max-w-[52ch] text-ink-soft">
          Every one of these started with someone who had a problem. Tap one for
          the full story.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const isFeature = Boolean(project.feature);
            const isSmall = Boolean(project.small);

            if (isSmall) {
              return (
                <PressableSticker
                  key={project.title}
                  className="sticker wiggle sticker-work flex flex-col p-5 md:col-span-2"
                  style={
                    {
                      "--tilt": project.tilt,
                      background: project.fill,
                    } as CSSProperties
                  }
                >
                  <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                    <div className="min-w-0">
                      <h3 className="text-h3">{project.title}</h3>
                      <p className="text-small prose-measure mt-2 text-ink-soft">
                        {project.cardLine}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <ProjectCta project={project} primary={false} />
                    </div>
                  </div>
                </PressableSticker>
              );
            }

            const body = (
              <div className="flex flex-1 flex-col">
                {project.tag ? (
                  <span className="tag self-start">{project.tag}</span>
                ) : null}

                <h3 className={project.tag ? "text-h3 mt-4" : "text-h3"}>
                  {project.story ? (
                    <a
                      href={project.story}
                      className="inline-flex min-h-11 items-center [@media(hover:hover)]:hover:underline"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>

                <p className="text-small prose-measure mt-2 text-ink-soft">
                  {project.cardLine}
                </p>

                {!isFeature && project.screenshot ? (
                  <div className="frame relative mt-4 aspect-[3/2] overflow-hidden">
                    <Image
                      src={project.screenshot.src}
                      alt={`${project.title} screenshot`}
                      width={project.screenshot.width}
                      height={project.screenshot.height}
                      className="h-full w-full object-cover"
                      style={{
                        objectPosition: project.imagePosition ?? "center top",
                      }}
                      sizes="(min-width: 768px) 45vw, 100vw"
                      loading="lazy"
                    />
                  </div>
                ) : null}

                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
                  {project.stack.map((tech) => (
                    <li key={tech} className="chip chip-solid">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <ProjectCta project={project} primary={isFeature} />
                </div>
              </div>
            );

            return (
              <PressableSticker
                key={project.title}
                className={[
                  "sticker wiggle sticker-work flex flex-col p-6 sm:p-7",
                  isFeature ? "md:col-span-2" : "",
                ].join(" ")}
                style={
                  {
                    "--tilt": project.tilt,
                    background: project.fill,
                  } as CSSProperties
                }
              >
                {isFeature ? (
                  <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
                    {body}
                    {project.screenshot ? (
                      <Image
                        src={project.screenshot.src}
                        alt={`${project.title} screenshot`}
                        width={project.screenshot.width}
                        height={project.screenshot.height}
                        className="frame h-auto w-full"
                        sizes="(min-width: 768px) 45vw, 100vw"
                        loading="lazy"
                      />
                    ) : null}
                  </div>
                ) : (
                  body
                )}
              </PressableSticker>
            );
          })}
        </div>
      </div>
    </section>
  );
};
