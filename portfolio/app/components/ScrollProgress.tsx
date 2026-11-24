"use client";

import { useScrollProgress } from "@/app/lib/motion";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="progress-bar"
      style={{ transform: `scaleX(${progress})` } as React.CSSProperties}
      aria-hidden="true"
    />
  );
}