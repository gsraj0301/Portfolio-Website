import type { CaseStudyData } from "@/app/components/CaseStudy";

interface ChallengeCardsProps {
  challenges: NonNullable<CaseStudyData["challenges"]>;
}

export function ChallengeCards({ challenges }: ChallengeCardsProps) {
  return (
    <section className="section pt-28 pb-28 bg-blush">
      <div className="shell">
        <h2 className="text-h3 mt-12">Challenges and lessons</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((c, i) => (
            <div
              key={i}
              className="sticker p-6 flex flex-col gap-3"
              style={{
                "--tilt": ["-2deg", "1.5deg", "-1deg", "2deg"][i % 4],
                background: ["var(--mint)", "var(--marigold)", "var(--card)", "var(--blush)"][i % 4],
              } as React.CSSProperties}
            >
              <h3 className="text-h3">{c.title}</h3>
              <p className="text-small text-ink-soft">{c.body}</p>
              <p className="text-small font-semibold text-ink">Fix: {c.fix}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}