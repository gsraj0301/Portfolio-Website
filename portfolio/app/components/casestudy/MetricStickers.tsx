"use client";

import { useInView } from "@/app/lib/motion";
import { StatSticker } from "@/app/components/StatSticker";

type Metric = { value: string; label: string; note?: string };

export function MetricStickers({ metrics }: { metrics: Metric[] }) {
  const { ref, inView: armed } = useInView(0.15);

  return (
    <section ref={ref} className="section pt-28 pb-28">
      <div className="shell">
        <h2 className="text-h3 mt-12">Impact at a glance</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <StatSticker
              key={i}
              number={m.value}
              label={m.label}
              fill={["var(--card)", "var(--mint)", "var(--marigold)", "var(--blush)"][i % 4]}
              tilt={["-3deg", "2deg", "-1.5deg", "1.5deg"][i % 4]}
              delay={`${i * 90}ms`}
              width="100%"
              align="self-start"
              countUp={!isNaN(Number(m.value.replace(/[^\d]/g, "")))}
              countUpTarget={Number(m.value.replace(/[^\d]/g, "")) || undefined}
              countUpSuffix="+"
              armed={armed}
            />
          ))}
        </div>
      </div>
    </section>
  );
}