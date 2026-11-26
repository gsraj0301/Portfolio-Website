import type { CSSProperties } from "react";
import type { CaseStudyData } from "@/app/components/CaseStudy";

type Persona = NonNullable<CaseStudyData["personas"]>[number];

interface SignatureProps {
  persona: Persona;
}

function Note({ children }: { children: string }) {
  if (!children) return null;
  return (
    <p className="mt-4 border-t-2 border-dashed border-ink/30 pt-3 text-small text-ink-soft">
      {children}
    </p>
  );
}

function WallBlock({ persona }: { persona: Persona }) {
  if (persona.kind !== "wall") return null;
  return (
    <article className="sticker p-6 lg:p-7">
      <h3 className="text-h3">{persona.title}</h3>
      <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-4">
        {persona.cells.map((cell, i) => (
          <div
            key={i}
            className="border-t-2 border-dashed border-ink/30 pt-3"
            style={{ "--tilt": ["-1deg", "1deg", "-0.5deg"][i % 3] } as CSSProperties}
          >
            <span className="bricolage block text-2xl font-bold leading-none text-ink tabular-nums">
              {cell.value}
            </span>
            <span className="mt-1 block text-tag text-ink-soft">{cell.label}</span>
          </div>
        ))}
      </div>
      {persona.note && <Note>{persona.note}</Note>}
    </article>
  );
}

function MatrixBlock({ persona }: { persona: Persona }) {
  if (persona.kind !== "matrix") return null;
  const odd = persona.rows.length % 2 === 1;

  return (
    <article className="sticker p-6 lg:p-7">
      <h3 className="text-h3">{persona.title}</h3>
      <div className="mt-5 grid gap-x-7 gap-y-5 sm:grid-cols-2">
        {persona.rows.map((row, i) => (
          <div
            key={i}
            className={[
              "border-t-2 border-dashed border-ink/30 pt-3",
              odd && i === persona.rows.length - 1 ? "sm:col-span-2" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-small font-semibold text-ink">{row.role}</span>
              <span className="text-tag text-ink-soft">
                {row.access ? `Access: ${row.access}` : ""}
              </span>
            </div>
            <p className="mt-1 text-small text-ink-soft">{row.action}</p>
          </div>
        ))}
      </div>
      {persona.note && <Note>{persona.note}</Note>}
    </article>
  );
}

function CompareBlock({ persona }: { persona: Persona }) {
  if (persona.kind !== "compare") return null;
  return (
    <article className="sticker p-6 lg:p-7">
      <h3 className="text-h3">{persona.title}</h3>
      <div className="mt-5 grid gap-6 sm:grid-cols-2 sm:gap-8">
        <div className="border-t-2 border-dashed border-ink/30 pt-3">
          <span className="block text-small font-semibold text-ink">{persona.left.label}</span>
          <ul className="mt-2 space-y-2">
            {persona.left.lines.map((line, i) => (
              <li key={i} className="flex items-start gap-1.5 text-small text-ink-soft">
                <span className="mt-0.5 shrink-0 text-ink">•</span>
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t-2 border-dashed border-ink/30 pt-3">
          <span className="block text-small font-semibold text-ink">{persona.right.label}</span>
          <ul className="mt-2 space-y-2">
            {persona.right.lines.map((line, i) => (
              <li key={i} className="flex items-start gap-1.5 text-small text-ink-soft">
                <span className="mt-0.5 shrink-0 text-ink">•</span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {persona.note && <Note>{persona.note}</Note>}
    </article>
  );
}

function LadderBlock({ persona }: { persona: Persona }) {
  if (persona.kind !== "ladder") return null;
  return (
    <article className="sticker p-6 lg:p-7">
      <h3 className="text-h3">{persona.title}</h3>
      <ol className="relative mt-6 space-y-5">
        <span
          aria-hidden
          className="absolute bottom-2 left-[15px] top-2 border-l-2 border-dashed border-ink/30"
        />
        {persona.steps.map((step, i) => (
          <li key={i} className="relative flex items-start gap-4">
            <span className="bricolage relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-marigold text-small font-bold leading-none">
              {i + 1}
            </span>
            <div className="pt-0.5">
              <span className="text-small font-semibold text-ink">{step.label}</span>
              <p className="mt-1 text-small text-ink-soft">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      {persona.note && <Note>{persona.note}</Note>}
    </article>
  );
}

function LegendBlock({ persona }: { persona: Persona }) {
  if (persona.kind !== "legend") return null;
  const swatch = (tone: string) =>
    ({
      match: "var(--mint)",
      mismatch: "var(--tomato)",
      duplicate: "var(--marigold)",
    })[tone] ?? "var(--card)";

  return (
    <article className="sticker p-6 lg:p-7">
      <h3 className="text-h3">{persona.title}</h3>
      <div className="mt-5 grid grid-cols-3 gap-4 border-t-2 border-dashed border-ink/30 pt-4">
        {persona.legend.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-start gap-2"
            style={{ "--tilt": ["-1deg", "1deg", "-0.5deg"][i % 3] } as CSSProperties}
          >
            <span
              className="inline-block h-6 w-6 rounded-sm border-2 border-ink"
              style={{ background: swatch(item.tone) } as CSSProperties}
            />
            <span className="text-small font-semibold text-ink">{item.label}</span>
          </div>
        ))}
      </div>
      {persona.note && <Note>{persona.note}</Note>}
    </article>
  );
}

function CurationBlock({ persona }: { persona: Persona }) {
  if (persona.kind !== "curation") return null;
  return (
    <article className="sticker p-6 lg:p-7">
      <h3 className="text-h3">{persona.title}</h3>
      <div className="mt-5 space-y-5">
        {persona.kept.length > 0 && (
          <div>
            <span className="text-small font-semibold text-ink">What stays</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {persona.kept.map((chip, i) => (
                <span key={i} className="chip chip-solid">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        )}
        {persona.dropped.length > 0 && (
          <div>
            <span className="text-small font-semibold text-ink">What I said no to</span>
            <ul className="mt-2">
              {persona.dropped.map((item, i) => (
                <li
                  key={i}
                  className="border-t-2 border-dashed border-ink/30 py-2 text-small text-ink-soft first:border-t-0 first:pt-0"
                >
                  No {item}.
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {persona.note && <Note>{persona.note}</Note>}
    </article>
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
