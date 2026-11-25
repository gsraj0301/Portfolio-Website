import type { CaseStudyData } from "@/app/components/CaseStudy";

interface ProblemStoryProps {
  data: CaseStudyData;
}

export function ProblemStory({ data }: ProblemStoryProps) {
  return (
    <section className="section pt-28 pb-28 bg-blush">
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="tag">The problem</span>
            <h2 className="text-h3 mt-4">{data.title} — what broke before it existed</h2>
            <p className="mt-4 max-w-[62ch] text-ink-soft">{data.problem}</p>
          </div>
          <div className="flex flex-col gap-3">
            {data.painPoints?.map((p, i) => (
              <div
                key={p}
                className="sticker p-6"
                style={{
                  "--tilt": ["-2deg", "1.5deg", "-1deg", "2deg"][i % 4],
                } as React.CSSProperties}
              >
                <span className="block text-small text-ink-soft">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
