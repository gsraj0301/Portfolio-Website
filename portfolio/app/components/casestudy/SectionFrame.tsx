import type { ReactNode } from "react";

type SectionTone = "paper" | "blush" | "mint";

interface SectionFrameProps {
  title: string;
  kicker?: ReactNode;
  tone?: SectionTone;
  children: ReactNode;
  contentClassName?: string;
  id?: string;
}

const toneClass: Record<SectionTone, string> = {
  paper: "",
  blush: "bg-blush",
  mint: "bg-mint",
};

export function SectionFrame({
  title,
  kicker,
  tone = "paper",
  children,
  contentClassName = "",
  id,
}: SectionFrameProps) {
  return (
    <section id={id} className={["section", toneClass[tone]].filter(Boolean).join(" ")}>
      <div className="shell grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            {kicker ? <div className="mb-4">{kicker}</div> : null}
            <h2 className="text-h2">{title}</h2>
          </div>
        </div>
        <div className={["lg:col-span-8", contentClassName].filter(Boolean).join(" ")}>
          {children}
        </div>
      </div>
    </section>
  );
}
