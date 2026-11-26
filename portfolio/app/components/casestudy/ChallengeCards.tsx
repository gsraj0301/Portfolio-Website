import type { CSSProperties } from "react";
import type { CaseStudyData } from "@/app/components/CaseStudy";
import { SectionFrame } from "./SectionFrame";

interface ChallengeCardsProps {
  challenges: NonNullable<CaseStudyData["challenges"]>;
}

const tilts = ["-1deg", "1.5deg", "-0.5deg", "2deg"];

export function ChallengeCards({ challenges }: ChallengeCardsProps) {
  const odd = challenges.length % 2 === 1;

  return (
    <SectionFrame title="Challenges and lessons">
      <div className="grid gap-5 md:grid-cols-2">
        {challenges.map((challenge, i) => (
          <article
            key={i}
            className={[
              "sticker flex flex-col overflow-hidden p-0",
              odd && i === 0 ? "md:col-span-2" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{ "--tilt": tilts[i % tilts.length] } as CSSProperties}
          >
            <div className="p-5 lg:p-6">
              <h3 className="text-h3">{challenge.title}</h3>
              <p className="mt-3 text-small leading-relaxed text-ink-soft">{challenge.body}</p>
            </div>
            <div className="mt-auto border-t-2 border-dashed border-ink/30 bg-mint px-5 py-4 lg:px-6">
              <p className="text-small text-ink-soft">
                <span className="font-semibold text-ink">Fix:</span> {challenge.fix}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}
