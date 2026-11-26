import type { CSSProperties } from "react";

interface ResultsLessonsProps {
  results?: string;
  lessons?: string;
}

export function ResultsLessons({ results, lessons }: ResultsLessonsProps) {
  return (
    <section className="section">
      <div className="shell grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start lg:gap-8">
        {results && (
          <div
            className="sticker p-7 lg:col-span-7 lg:p-10"
            style={{ "--tilt": "-1deg" } as CSSProperties}
          >
            <h2 className="text-h2">Results</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{results}</p>
          </div>
        )}
        {lessons && (
          <div
            className="sticker p-7 lg:col-span-5 lg:mt-12 lg:p-8"
            style={{ "--tilt": "1.2deg", background: "var(--mint)" } as CSSProperties}
          >
            <h2 className="text-h2">What I learned</h2>
            <p className="mt-5 text-small leading-relaxed text-ink-soft">{lessons}</p>
          </div>
        )}
      </div>
    </section>
  );
}
