import type { CaseStudyData } from "@/app/components/CaseStudy";

interface ChallengeCardsProps {
  challenges: NonNullable<CaseStudyData["challenges"]>;
}

export function ChallengeCards({ challenges }: ChallengeCardsProps) {
  return (
    <section className="section pt-28 pb-28">
      <div className="shell">
        <h2 className="text-h3 mt-12">Challenges and lessons</h2>
        <div className="mt-8 space-y-6">
          {challenges.map((c, i) => {
            const fill = ["var(--card)", "var(--mint)", "var(--marigold)", "var(--blush)"][i % 4];
            return (
              <div
                key={i}
                className="sticker p-6"
                style={{
                  "--tilt": ["-1deg", "1.5deg", "-0.5deg", "2deg"][i % 4],
                  background: fill,
                } as React.CSSProperties}
              >
                <div className="mb-2 flex items-start gap-2">
                  <span className="shrink-0 text-small font-semibold text-ink">What broke</span>
                  <p className="text-small text-ink-soft">{c.body}</p>
                </div>
                <div className="border-t-2 border-dashed border-ink/30 mt-3 pt-3 flex items-start gap-2">
                  <p className="text-small text-ink-soft"><span className="font-semibold text-ink">Fix:</span> {c.fix}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
