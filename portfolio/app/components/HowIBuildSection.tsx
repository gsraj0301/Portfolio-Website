"use client";

import type { CSSProperties, FC } from "react";
import { useInView } from "@/app/lib/motion";

const steps = [
  {
    title: "Start with a real person.",
    body: "Every project here began with someone who had a problem: my dad, a faculty member, my classmates.",
    fill: "var(--marigold)",
    tilt: "-3deg",
  },
  {
    title: "Ship the smallest useful version.",
    body: "A working page this week beats a perfect one next month.",
    fill: "var(--card)",
    tilt: "2deg",
  },
  {
    title: "Put it in front of real users.",
    body: "Real users find what testing never does.",
    fill: "var(--mint)",
    tilt: "-1.5deg",
  },
  {
    title: "Fix what breaks.",
    body: "Then fix the next thing.",
    fill: "var(--card)",
    tilt: "1.5deg",
  },
];

export const HowIBuildSection: FC = () => {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      id="how-i-build"
      aria-labelledby="how-title"
      className="section bg-blush pb-28"
    >
      <div className="shell">
        <h2 id="how-title" className="text-h2">
          How I build
        </h2>

        <div ref={ref} className="relative pt-10">
          <div
            className="timeline-line hidden lg:block"
            aria-hidden="true"
            style={{ animationPlayState: inView ? "running" : "paused" } as CSSProperties}
          />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="sticker flex flex-col p-6"
                style={
                  { "--tilt": step.tilt, background: step.fill } as CSSProperties
                }
              >
                <span
                  className="bricolage text-4xl font-extrabold leading-none text-ink timeline-num"
                  aria-hidden="true"
                  style={{
                    "--pop-delay": `${100 + i * 160}ms`,
                    animationPlayState: inView ? "running" : "paused",
                  } as CSSProperties}
                >
                  {i + 1}
                </span>
                <h3 className="text-h3 mt-4">{step.title}</h3>
                <p className="text-small mt-2 text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <p className="text-small mt-10 max-w-[62ch] text-ink-soft">
          I use AI coding tools as my hands. I decide what gets built, read what
          they write, and fix what breaks.
        </p>
      </div>
    </section>
  );
};