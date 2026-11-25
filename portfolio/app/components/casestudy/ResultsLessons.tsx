interface ResultsLessonsProps {
  results?: string;
  lessons?: string;
}

export function ResultsLessons({ results, lessons }: ResultsLessonsProps) {
  return (
    <section className="section">
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {results && (
            <div className="sticker p-8 lg:p-10" style={{ "--tilt": "-1.5deg" } as React.CSSProperties}>
              <h2 className="text-h3 mb-4">Results</h2>
              <p className="text-ink-soft">{results}</p>
            </div>
          )}
          {lessons && (
            <div className="sticker p-8 lg:p-10" style={{ "--tilt": "1deg", background: "var(--mint)" } as React.CSSProperties}>
              <h2 className="text-h3 mb-4">What I learned</h2>
              <p className="mt-4 text-small text-ink-soft">{lessons}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
