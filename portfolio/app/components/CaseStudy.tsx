import type { FC } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyHero } from "./casestudy/Hero";
import { MetricStickers } from "./casestudy/MetricStickers";
import { ProblemStory } from "./casestudy/ProblemStory";
import { FeatureShowcase } from "./casestudy/FeatureShowcase";
import { ArchitectureFlow } from "./casestudy/ArchitectureFlow";
import { ChallengeCards } from "./casestudy/ChallengeCards";
import { ResultsLessons } from "./casestudy/ResultsLessons";
import { StackSection } from "./casestudy/StackSection";
import { ProjectNav } from "./casestudy/ProjectNav";
import { Signature } from "./casestudy/Signature";

export type CaseStudyGlance = {
  role: string;
  stack: string;
  status: string;
  linkLabel: string;
  linkHref: string;
};

export type CaseStudyPersona =
  | { kind: "wall"; title: string; note?: string; cells: { value: string; label: string }[] }
  | { kind: "matrix"; title: string; note?: string; rows: { role: string; action: string; access: string }[] }
  | { kind: "compare"; title: string; note?: string; left: { label: string; lines: string[] }; right: { label: string; lines: string[] } }
  | { kind: "ladder"; title: string; note?: string; steps: { label: string; body: string }[] }
  | { kind: "legend"; title: string; note?: string; legend: { label: string; tone: string }[] }
  | { kind: "curation"; title: string; note?: string; kept: string[]; dropped: string[] };

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
  personas?: CaseStudyPersona[];
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
          <div className="flex flex-col items-start gap-1 text-[0.9375rem] font-semibold">
            <span className="text-ink-soft">{data.tag}</span>
            <span className="text-ink">{data.title}</span>
          </div>
          <Link
            href="/#work"
            className="btn btn-secondary min-h-12 px-4 py-2 text-base"
          >
            Back to work
          </Link>
        </nav>
      </header>

      <main id="main">
        <CaseStudyHero data={data} />

        {data.metrics && data.metrics.length > 0 && (
          <section className="section">
            <div className="shell">
              <MetricStickers metrics={data.metrics} />
            </div>
          </section>
        )}

        {data.personas && data.personas.length > 0 && (
          <section className="section">
            <div className="shell">
              <h2 className="text-h3 mb-4">Project shape</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {data.personas.map((persona, i) => (
                  <Signature key={i} persona={persona} />
                ))}
              </div>
            </div>
          </section>
        )}

        {data.painPoints && data.painPoints.length > 0 && (
          <ProblemStory data={data} />
        )}

        <section className="section">
          <div className="shell">
            <h2 className="text-h3 mb-4">Why I built it</h2>
            <p className="max-w-[62ch] text-ink-soft">{data.why}</p>
          </div>
        </section>

        <FeatureShowcase data={data} />

        {data.flow && (
          <ArchitectureFlow flow={data.flow} />
        )}

        {data.decisions && data.decisions.length > 0 && (
          <section className="section">
            <div className="shell">
              <h2 className="text-h3 mb-4">Engineering decisions</h2>
              <div className="mt-4 flex flex-col gap-4">
                {data.decisions.map((d, i) => (
                  <div
                    key={i}
                    className="sticker p-6"
                    style={{
                      "--tilt": ["-1.5deg", "1deg", "-0.5deg"][i % 3],
                    } as React.CSSProperties}
                  >
                    <h3 className="text-h3 mb-2">{d.title}</h3>
                    <p className="text-small text-ink-soft">{d.body}</p>
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

        <StackSection stack={data.stack} />

        <ProjectNav next={data.next} />
      </main>

      <footer className="shell border-t-2 border-dashed border-ink/40 pt-8 pb-28">
        <Link
          href="/#work"
          className="inline-flex min-h-11 items-center text-[0.9375rem] font-semibold underline decoration-2 underline-offset-4"
        >
          Back to work
        </Link>
      </footer>
    </>
  );
};
