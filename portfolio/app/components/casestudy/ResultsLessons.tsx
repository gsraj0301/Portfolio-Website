interface ResultsLessonsProps {
  results?: string;
  lessons?: string;
}

export function ResultsLessons({ results, lessons }: ResultsLessonsProps) {
  return (
    <section className="section pt-28 pb-28">
      <div className="shell">
        {results && (
          <>
            <h2 className="text-h3 mt-12">Results</h2>
            <p className="mt-4 max-w-[62ch] text-ink-soft">{results}</p>
          </>
        )}
        {lessons && (
          <>
            <h2 className="text-h3 mt-12">What I learned</h2>
            <p className="mt-4 max-w-[62ch] text-ink-soft">{lessons}</p>
          </>
        )}
      </div>
    </section>
  );
}