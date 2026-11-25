import type { CaseStudyData } from "@/app/components/CaseStudy";

type Persona = NonNullable<CaseStudyData["personas"]>[number];

interface SignatureProps {
  persona: Persona;
}

function WallBlock({ persona }: { persona: Persona }) {
  if (persona.kind !== "wall") return null;
  return (
    <section className="sticker p-6">
      <span className="tag">{persona.title}</span>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {persona.cells.map((cell, i) => (
          <div
            key={i}
            className="sticker p-4 text-center"
            style={{ "--tilt": ["-1deg", "1deg", "-0.5deg"][i % 3] } as React.CSSProperties}
          >
            <span className="bricolage block text-2xl font-bold text-ink tabular-nums">{cell.value}</span>
            <span className="mt-1 text-tag text-ink-soft">{cell.label}</span>
          </div>
        ))}
      </div>
      {persona.note && <p className="mt-3 text-small text-ink-soft">{persona.note}</p>}
    </section>
  );
}

function MatrixBlock({ persona }: { persona: Persona }) {
  if (persona.kind !== "matrix") return null;
  return (
    <section className="sticker p-6">
      <span className="tag">{persona.title}</span>
      <div className="mt-4 space-y-3">
        {persona.rows.map((row, i) => (
          <div key={i} className="sticker p-4">
            <div className="flex items-start gap-3">
              <span className="shrink-0 text-small font-semibold text-ink">{row.role}</span>
              <div className="text-small text-ink-soft">
                {row.action}
                {row.access && (
                  <span className="block mt-1 text-xs text-ink-soft">Access: {row.access}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {persona.note && <p className="mt-3 text-small text-ink-soft">{persona.note}</p>}
    </section>
  );
}

function CompareBlock({ persona }: { persona: Persona }) {
  if (persona.kind !== "compare") return null;
  return (
    <section className="sticker p-6">
      <span className="tag">{persona.title}</span>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <span className="block text-small font-semibold text-ink mb-2">{persona.left.label}</span>
          <ul className="space-y-2">
            {persona.left.lines.map((line, i) => (
              <li key={i} className="text-small text-ink-soft flex items-start gap-1.5">
                <span className="shrink-0 mt-0.5 text-ink">•</span>
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-l-2 border-dashed border-ink pl-4">
          <span className="block text-small font-semibold text-ink mb-2">{persona.right.label}</span>
          <ul className="space-y-2">
            {persona.right.lines.map((line, i) => (
              <li key={i} className="text-small text-ink-soft flex items-start gap-1.5">
                <span className="shrink-0 mt-0.5 text-ink">•</span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {persona.note && <p className="mt-3 text-small text-ink-soft">{persona.note}</p>}
    </section>
  );
}

function LadderBlock({ persona }: { persona: Persona }) {
  if (persona.kind !== "ladder") return null;
  return (
    <section className="sticker p-6">
      <span className="tag">{persona.title}</span>
      <div className="mt-6 flex flex-col gap-4">
        {persona.steps.map((step, i) => (
          <div key={i} className="relative pl-10">
            <span
              className="absolute left-0 top-1 bricolage text-2xl font-bold text-ink leading-none"
              style={{ transform: "rotate(-1deg)" }}
            >
              {i + 1}
            </span>
            <div>
              <span className="text-small font-semibold text-ink">{step.label}</span>
              <p className="mt-1 text-small text-ink-soft">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
      {persona.note && <p className="mt-3 text-small text-ink-soft">{persona.note}</p>}
    </section>
  );
}

function LegendBlock({ persona }: { persona: Persona }) {
  if (persona.kind !== "legend") return null;
  const swatch = (tone: string) => ({
    match: "var(--mint)",
    mismatch: "var(--tomato)",
    duplicate: "var(--marigold)",
  }[tone] ?? "var(--card)");

  return (
    <section className="sticker p-6">
      <span className="tag">{persona.title}</span>
      <div className="mt-4 flex flex-wrap gap-4">
        {persona.legend.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2"
            style={{ "--tilt": ["-1deg", "1deg", "-0.5deg"][i % 3] } as React.CSSProperties}
          >
            <span
              className="inline-block h-6 w-6 rounded-sm border-2 border-ink"
              style={{ background: swatch(item.tone) } as React.CSSProperties}
            />
            <span className="text-small font-semibold text-ink">{item.label}</span>
          </div>
        ))}
      </div>
      {persona.note && <p className="mt-3 text-small text-ink-soft">{persona.note}</p>}
    </section>
  );
}

function CurationBlock({ persona }: { persona: Persona }) {
  if (persona.kind !== "curation") return null;
  return (
    <section className="sticker p-6">
      <span className="tag">{persona.title}</span>
      <div className="mt-4 space-y-4">
        {persona.kept.length > 0 && (
          <>
            <span className="text-small font-semibold text-ink">What stays</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {persona.kept.map((chip, i) => (
                <span key={i} className="chip chip-solid">{chip}</span>
              ))}
            </div>
          </>
        )}
        {persona.dropped.length > 0 && (
          <>
            <span className="text-small font-semibold text-ink">What I said no to</span>
            <div className="mt-2 space-y-1">
              {persona.dropped.map((item, i) => (
                <div key={i} className="sticker p-3" style={{ "--tilt": ["-1deg", "1deg"][i % 2] } as React.CSSProperties}>
                  <span className="text-small text-ink-soft">No {item}.</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      {persona.note && <p className="mt-3 text-small text-ink-soft">{persona.note}</p>}
    </section>
  );
}

export function Signature({ persona }: SignatureProps) {
  switch (persona.kind) {
    case "wall":
      return <WallBlock persona={persona} />;
    case "matrix":
      return <MatrixBlock persona={persona} />;
    case "compare":
      return <CompareBlock persona={persona} />;
    case "ladder":
      return <LadderBlock persona={persona} />;
    case "legend":
      return <LegendBlock persona={persona} />;
    case "curation":
      return <CurationBlock persona={persona} />;
  }
}
