import type { FC } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyHero } from "./casestudy/Hero";
import { ProblemStory } from "./casestudy/ProblemStory";
import { FeatureShowcase } from "./casestudy/FeatureShowcase";
import { ArchitectureFlow } from "./casestudy/ArchitectureFlow";
import { ChallengeCards } from "./casestudy/ChallengeCards";
import { ResultsLessons } from "./casestudy/ResultsLessons";
import { ProjectNav } from "./casestudy/ProjectNav";

export type CaseStudyGlance = {
  role: string;
  stack: string;
  status: string;
  linkLabel: string;
  linkHref: string;
};

export type CaseStudyData = {
  title: string;
  tag: string;
  intro: string;
  glance: CaseStudyGlance;
  problem: string;
  why: string;
  features: string[];
  howWent: string;
  stack: string[];
  screenshot?: { src: string; width: number; height: number };
  gallery?: { src: string; width: number; height: number; caption?: string }[];
  metrics?: { value: string; label: string; note?: string }[];
  painPoints?: string[];
  flow?: { title: string; nodes: string[]; note?: string };
  decisions?: { title: string; body: string }[];
  challenges?: { title: string; body: string; fix: string }[];
  results?: string;
  lessons?: string;
  next?: { title: string; href: string; tag: string };
  repo: string;
  live?: string;
};

export function caseStudyMetadata(data: CaseStudyData): Metadata {
  return {
    title: `${data.title} | Raj G`,
    description: data.intro,
  };
}

export const CaseStudy: FC<{ data: CaseStudyData }> = ({ data }) => {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="border-b-2 border-dashed border-ink">
        <nav
          aria-label="Case study"
          className="shell flex h-16 items-center justify-between gap-4"
        >
          <Link
            href="/"
            className="bricolage inline-flex min-h-11 items-center gap-2 text-xl font-extrabold tracking-tight"
          >
            <Image
              src="/raj.jpg"
              alt=""
              width={32}
              height={32}
              loading="eager"
              className="h-8 w-8 rounded-full border-2 border-ink object-cover"
            />
            Raj G
          </Link>
          <Link
            href="/#work"
            className="btn btn-secondary min-h-12 px-4 py-2 text-base"
          >
            Back to work
          </Link>
        </nav>
      </header>

      <main id="main" className="shell py-14 lg:py-20">
        <article className="mx-auto max-w-[68ch]">
          <CaseStudyHero data={data} />

          {data.painPoints && data.painPoints.length > 0 && (
            <ProblemStory data={data} />
          )}

          <FeatureShowcase data={data} />

          {data.flow && (
            <ArchitectureFlow flow={data.flow} />
          )}

          {data.decisions && data.decisions.length > 0 && (
            <section className="section pt-28 pb-28">
              <div className="shell">
                <h2 className="text-h3 mt-12">Engineering decisions</h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {data.decisions.map((d, i) => (
                    <div
                      key={i}
                      className="sticker p-6"
                      style={{
                        "--tilt": ["-2deg", "1.5deg", "-1deg", "2deg"][i % 4],
                        background: "var(--card)",
                      } as React.CSSProperties}
                    >
                      <h3 className="text-h3">{d.title}</h3>
                      <p className="mt-2 text-small text-ink-soft">{d.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {data.challenges && data.challenges.length > 0 && (
            <ChallengeCards challenges={data.challenges} />
          )}

          <ResultsLessons results={data.results} lessons={data.lessons} />

          <h2 className="text-h3 mt-12">Stack</h2>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {data.stack.map((tech) => (
              <li key={tech} className="chip chip-solid">
                {tech}
              </li>
            ))}
          </ul>
          <p className="text-small mt-3 text-ink-soft">
            <Link
              href="/#skills"
              className="inline-flex min-h-11 items-center font-semibold underline decoration-2 underline-offset-4"
            >
              See how I use this stack
            </Link>
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {data.live ? (
              <a
                href={data.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Visit site
              </a>
            ) : null}
            <a
              href={data.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub repo
            </a>
          </div>

          <ProjectNav next={data.next} />
        </article>
      </main>

      <footer className="shell mt-14 border-t-2 border-dashed border-ink/40 pt-8">
        <Link
          href="/#work"
          className="inline-flex min-h-11 items-center text-[0.9375rem] font-semibold underline decoration-2 underline-offset-4"
        >
          Back to work
        </Link>
      </footer>
    </>
  );
}