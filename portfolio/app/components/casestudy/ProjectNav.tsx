import Link from "next/link";
import type { CaseStudyData } from "@/app/components/CaseStudy";

interface ProjectNavProps {
  next?: NonNullable<CaseStudyData["next"]>;
}

export function ProjectNav({ next }: ProjectNavProps) {
  return (
    <section className="section">
      <div className="shell">
        {next ? (
          <div
            className="sticker p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
            style={{ "--tilt": "2deg", background: "var(--card)" } as React.CSSProperties}
          >
            <div>
              <span className="text-tag text-ink-soft">Next project</span>
              <h2 className="text-h3 mt-2">{next.title}</h2>
              <p className="text-tag mt-2 text-ink-soft">{next.tag}</p>
            </div>
            <a href={next.href} className="btn btn-primary min-h-12">
              Read the story
            </a>
          </div>
        ) : null}
        <p className="mt-4 text-center">
          <Link
            href="/#work"
            className="inline-flex min-h-11 items-center text-[0.9375rem] font-semibold underline decoration-2 underline-offset-4"
          >
            All projects
          </Link>
        </p>
      </div>
    </section>
  );
}
