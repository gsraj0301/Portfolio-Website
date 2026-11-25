"use client";

import type { CSSProperties, FC } from "react";
import Image from "next/image";
import { useInView } from "@/app/lib/motion";
import { StatSticker } from "./StatSticker";

const stats = [
  {
    number: "2,000+",
    label: "students on the PRIDE portal",
    fill: "var(--marigold)",
    tilt: "-3deg",
    delay: "0ms",
    width: "62%",
    align: "self-end",
    countUp: true,
    countUpTarget: 2000,
    countUpSuffix: "+",
  },
  {
    number: "About 1,000",
    label: "games, SNES to PS3 & PC",
    fill: "var(--card)",
    tilt: "2deg",
    delay: "90ms",
    width: "58%",
    align: "self-start",
    countUp: true,
    countUpTarget: 1000,
    countUpPrefix: "About ",
  },
  {
    number: "2",
    label: "novels in progress",
    fill: "var(--mint)",
    tilt: "-1.5deg",
    delay: "180ms",
    width: "55%",
    align: "self-end",
    countUp: true,
    countUpTarget: 2,
  },
];

export const Header: FC = () => {
  const { ref: clusterRef, inView: armed } = useInView(0.2);

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
          <div className="mt-6 flex items-center gap-3">
            <div
              className={`photo-sticker tilt slap p-2${armed ? " is-armed" : ""}`}
              style={{ "--tilt": "-2deg", "--slap-delay": "270ms" } as CSSProperties}
            >
              <Image
                src="/raj.jpg"
                alt="Raj G"
                width={64}
                height={64}
                priority
                className="h-16 w-16 rounded-full border-[6px] border-card object-cover"
              />
            </div>
            <span className={`hand text-2xl text-ink note-in${armed ? " is-armed" : ""}`} style={{ "--slap-delay": "360ms" } as CSSProperties}>
              Raj G
            </span>
          </div>
        </div>

        <div ref={clusterRef} className="relative mx-auto flex w-full max-w-sm flex-col">
          {stats.map((stat) => (
            <StatSticker
              key={stat.number}
              number={stat.number}
              label={stat.label}
              fill={stat.fill}
              tilt={stat.tilt}
              delay={stat.delay}
              width={stat.width}
              align={stat.align}
              countUp={stat.countUp}
              countUpTarget={stat.countUpTarget}
              countUpPrefix={stat.countUpPrefix}
              countUpSuffix={stat.countUpSuffix}
              armed={armed}
            />
          ))}
          <p className={`hand mt-4 self-end text-2xl text-ink note-in${armed ? " is-armed" : ""}`} style={{ "--slap-delay": "360ms" } as CSSProperties}>
            (yes, really)
          </p>
        </div>
      </div>
    </section>
  );
};
