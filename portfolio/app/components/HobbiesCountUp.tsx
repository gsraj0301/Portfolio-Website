"use client";

import { useEffect, useRef, useState } from "react";

export function HobbiesCountUp() {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(1000);
  const [started, setStarted] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || hasRun.current) continue;
          hasRun.current = true;
          observer.disconnect();

          setValue(0);
          setStarted(true);
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.max(0, Math.min((now - start) / 900, 1));
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(1000 * eased));
            if (progress < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <span ref={ref} className="bricolage text-display block text-balance leading-none">
      About {(started ? value : 1000).toLocaleString("en-US")} games
    </span>
  );
}
