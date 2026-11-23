import type { FC } from "react";

const steps = [
  {
    title: "Start with a real person.",
    body: "Every project here began with someone who had a problem: my dad, a faculty member, my classmates.",
  },
  {
    title: "Ship the smallest useful version.",
    body: "A working page this week beats a perfect one next month.",
  },
  {
    title: "Put it in front of real users.",
    body: "Real users find what testing never does.",
  },
  {
    title: "Fix what breaks.",
    body: "Then fix the next thing.",
  },
];

export const HowIBuildSection: FC = () => {
  return (
    <section
      id="how-i-build"
      aria-labelledby="how-title"
      className="section bg-blush"
    >
      <div className="shell">
        <h2 id="how-title" className="text-h2">
          How I build
        </h2>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="sticker flex flex-col p-6">
              <span
                className="bricolage text-4xl font-extrabold leading-none text-ink"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className="text-h3 mt-4">{step.title}</h3>
              <p className="text-small mt-2 text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>

        <p className="text-small mt-10 max-w-[62ch] text-ink-soft">
          I use AI coding tools as my hands. I decide what gets built, read what
          they write, and fix what breaks.
        </p>
      </div>
    </section>
  );
};
