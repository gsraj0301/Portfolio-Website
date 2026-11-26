import type { CSSProperties } from "react";
import type { CaseStudyData } from "@/app/components/CaseStudy";

interface ProblemStoryProps {
  data: CaseStudyData;
}

const painFills = ["var(--card)", "var(--mint)", "var(--card)", "var(--marigold)"];
const painTilts = ["-2deg", "1.5deg", "-1deg", "2deg"];

export function ProblemStory({ data }: ProblemStoryProps) {
  return (
    <section className="section bg-blush">
      <div className="shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <span className="tag">The problem</span>
            <h2 className="text-h2 mt-4">{data.title} — what broke before it existed</h2>
            <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-ink-soft">
              {data.problem}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-7">
          {data.painPoints?.map((point, i) => (
            <div
              key={point}
              className="sticker p-5 lg:p-6"
              style={
                {
                  "--tilt": painTilts[i % painTilts.length],
                  background: painFills[i % painFills.length],
                } as CSSProperties
              }
            >
              <span className="bricolage block text-lg font-bold leading-snug text-ink lg:text-xl">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
