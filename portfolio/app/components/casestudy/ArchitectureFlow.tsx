"use client";

import React from "react";
import { useInView } from "@/app/lib/motion";
import type { CaseStudyData } from "@/app/components/CaseStudy";

interface ArchitectureFlowProps {
  flow: NonNullable<CaseStudyData["flow"]>;
}

export function ArchitectureFlow({ flow }: ArchitectureFlowProps) {
  const { ref, inView: armed } = useInView(0.15);

  return (
    <section ref={ref} className="section">
      <div className="shell">
        <h2 className="text-h3 mb-4">{flow.title}</h2>
        {flow.note && <p className="max-w-[62ch] text-ink-soft">{flow.note}</p>}

        <div className="mt-4 flex flex-col sm:flex-row items-start gap-3 flex-wrap">
          {flow.nodes.map((node, i) => (
            <React.Fragment key={i}>
              <span className="chip chip-solid whitespace-normal">{node}</span>
              {i < flow.nodes.length - 1 && (
                <>
                  <div
                    className="h-4 border-l-2 border-dashed border-ink sm:hidden mx-0.5 flow-connector"
                    style={{
                      animation: "draw 700ms var(--ease-out-expo) forwards",
                      animationDelay: `${100 + i * 160}ms`,
                      animationPlayState: armed ? "running" : "paused",
                      transformOrigin: "bottom",
                    }}
                  />
                  <div
                    className="w-4 border-b-2 border-dashed border-ink hidden sm:flex mx-1 flow-connector"
                    style={{
                      animation: "draw 700ms var(--ease-out-expo) forwards",
                      animationDelay: `${100 + i * 160}ms`,
                      animationPlayState: armed ? "running" : "paused",
                      transformOrigin: "left",
                    }}
                  />
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
