"use client";

import { useInView } from "@/app/lib/motion";
import type { CaseStudyData } from "@/app/components/CaseStudy";
import { SectionFrame } from "./SectionFrame";

interface ArchitectureFlowProps {
  flow: NonNullable<CaseStudyData["flow"]>;
}

export function ArchitectureFlow({ flow }: ArchitectureFlowProps) {
  const { ref, inView: armed } = useInView(0.15);

  return (
    <SectionFrame title={flow.title} tone="mint">
      <div ref={ref}>
        {flow.note && (
          <p className="max-w-[55ch] text-small leading-relaxed text-ink-soft">{flow.note}</p>
        )}

        <div className="sticker mt-6 p-5 sm:p-7">
          <ol className="relative space-y-5">
            <span
              aria-hidden
              className="flow-line absolute bottom-5 left-5 top-5 border-l-2 border-dashed border-ink/40"
              style={{ animationPlayState: armed ? "running" : "paused" }}
            />
            {flow.nodes.map((node, i) => (
              <li key={i} className="relative flex items-start gap-4">
                <span className="bricolage relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-marigold text-small font-bold leading-none">
                  {i + 1}
                </span>
                <span className="chip chip-solid whitespace-normal px-4 py-2.5 text-small">
                  {node}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </SectionFrame>
  );
}
