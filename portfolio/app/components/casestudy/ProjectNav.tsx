import Link from "next/link";
import type { CSSProperties } from "react";
import type { CaseStudyData } from "@/app/components/CaseStudy";

interface ProjectNavProps {
  next?: NonNullable<CaseStudyData["next"]>;
}

export function ProjectNav({ next }: ProjectNavProps) {
  return (
    <section className="section !pb-20 !pt-10 lg:!pb-28 lg:!pt-14">
      <div className="shell">
        {next ? (
          <Link
            href={next.href}
            aria-label={`Read the ${next.title} story`}
            className="sticker block overflow-hidden p-0"
            style={{ "--tilt": "1.2deg", background: "var(--marigold)" } as CSSProperties}
          >
            <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">
              <div>
                <span className="text-tag text-ink-soft">Next project</span>
                <h2 className="text-h2 mt-3 max-w-[14ch]">{next.title}</h2>
                <span className="tag mt-5">{next.tag}</span>
              </div>
              <span className="btn btn-on-fill min-h-12 justify-self-start lg:justify-self-end">
                Read the story
              </span>
            </div>
          </Link>
        ) : null}
        <p className="mt-6 text-center">
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
