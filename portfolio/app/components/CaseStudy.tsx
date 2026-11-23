import type { FC } from "react";
import Image from "next/image";

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
  repo: string;
  live?: string;
};

export const CaseStudy: FC<{ data: CaseStudyData }> = ({ data }) => {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="border-b-2 border-dashed border-ink">
        <div className="shell flex h-16 items-center justify-between gap-4">
          <a
            href="/"
            className="bricolage text-xl font-extrabold tracking-tight"
          >
            Raj G
          </a>
          <a
            href="/#work"
            className="btn btn-secondary min-h-11 px-4 py-2 text-base"
          >
            Back to work
          </a>
        </div>
      </header>

      <main id="main" className="shell py-14 lg:py-20">
        <article className="mx-auto max-w-[68ch]">
          <span className="tag">{data.tag}</span>
          <h1 className="text-h2 mt-4">{data.title}</h1>
          <p className="mt-4 max-w-[62ch] text-ink-soft">{data.intro}</p>

          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-y-2 border-dashed border-ink/40 py-5 sm:grid-cols-4">
            <div>
              <dt className="text-tag font-semibold text-ink-soft">Role</dt>
              <dd className="mt-1 text-small font-semibold">{data.glance.role}</dd>
            </div>
            <div>
              <dt className="text-tag font-semibold text-ink-soft">Stack</dt>
              <dd className="mt-1 text-small font-semibold">
                {data.glance.stack}
              </dd>
            </div>
            <div>
              <dt className="text-tag font-semibold text-ink-soft">Status</dt>
              <dd className="mt-1 text-small font-semibold">
                {data.glance.status}
              </dd>
            </div>
            <div>
              <dt className="text-tag font-semibold text-ink-soft">Link</dt>
              <dd className="mt-1 text-small font-semibold">
                <a
                  href={data.glance.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-2 underline-offset-4"
                >
                  {data.glance.linkLabel}
                </a>
              </dd>
            </div>
          </dl>

          <h2 className="text-h3 mt-12">Problem</h2>
          <p className="mt-2 max-w-[62ch] text-ink-soft">{data.problem}</p>

          <h2 className="text-h3 mt-10">Why I built it</h2>
          <p className="mt-2 max-w-[62ch] text-ink-soft">{data.why}</p>

          <h2 className="text-h3 mt-10">What it does</h2>
          <ul className="mt-3 max-w-[62ch] list-disc space-y-2 pl-5 text-ink-soft">
            {data.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <h2 className="text-h3 mt-10">How it went</h2>
          <p className="mt-2 max-w-[62ch] text-ink-soft">{data.howWent}</p>

          {data.screenshot ? (
            <Image
              src={data.screenshot.src}
              alt={data.title}
              width={data.screenshot.width}
              height={data.screenshot.height}
              className="mt-10 rounded-lg shadow-hard"
              loading="lazy"
            />
          ) : null}

          <h2 className="text-h3 mt-12">Stack</h2>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {data.stack.map((tech) => (
              <li key={tech} className="chip chip-solid">
                {tech}
              </li>
            ))}
          </ul>
          <p className="text-small mt-3 text-ink-soft">
            <a
              href="/#skills"
              className="font-semibold underline decoration-2 underline-offset-4"
            >
              See how I use this stack
            </a>
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

          <div className="mt-14 border-t-2 border-dashed border-ink/40 pt-8">
            <a
              href="/#work"
              className="text-[0.9375rem] font-semibold underline decoration-2 underline-offset-4"
            >
              Back to work
            </a>
          </div>
        </article>
      </main>
    </>
  );
};
