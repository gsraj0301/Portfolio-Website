import type { CSSProperties, FC } from "react";

type Stat = {
  number: string;
  label: string;
  fill: string;
  tilt: string;
  delay: string;
  width: string;
  align: string;
};

const stats: Stat[] = [
  {
    number: "2,000+",
    label: "students on the PRIDE portal",
    fill: "var(--marigold)",
    tilt: "-3deg",
    delay: "0ms",
    width: "62%",
    align: "self-end",
  },
  {
    number: "About 1,000",
    label: "games, SNES to PS3 & PC",
    fill: "var(--card)",
    tilt: "2deg",
    delay: "90ms",
    width: "58%",
    align: "self-start",
  },
  {
    number: "2",
    label: "novels in progress",
    fill: "var(--mint)",
    tilt: "-1.5deg",
    delay: "180ms",
    width: "55%",
    align: "self-end",
  },
];

export const Header: FC = () => {
  return (
    <section aria-labelledby="hero-title" className="pb-14 pt-10 lg:pb-24 lg:pt-16">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 id="hero-title" className="text-display max-w-[13ch]">
            I build things people actually use.
          </h1>
          <p className="text-small mt-6 max-w-[46ch] text-ink-soft">
            Second-year AI and Data Science student in Chennai. I build apps for
            my college, my dad&rsquo;s business, and anyone who wants to learn
            for free.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn btn-primary">
              See my work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Say hi
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-sm flex-col">
          {stats.map((stat, i) => (
            <div
              key={stat.number}
              className={[
                "sticker slap relative flex flex-col p-5",
                i > 0 ? "-mt-3" : "",
                stat.align,
              ].join(" ")}
              style={
                {
                  "--tilt": stat.tilt,
                  "--slap-delay": stat.delay,
                  width: stat.width,
                  background: stat.fill,
                } as CSSProperties
              }
            >
              <span className="bricolage text-3xl font-bold leading-none">
                {stat.number}
              </span>
              <span className="mt-2 text-small text-ink-soft">{stat.label}</span>
            </div>
          ))}
          <p className="hand mt-4 self-end text-2xl text-ink">(yes, really)</p>
        </div>
      </div>
    </section>
  );
};
