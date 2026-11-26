"use client";

import { useInView } from "@/app/lib/motion";
import { StatSticker } from "@/app/components/StatSticker";

type Metric = { value: string; label: string; note?: string };

function parseMetric(value: string) {
  const digits = value.replace(/[^\d]/g, "");
  const target = Number(digits);
  const numeric = digits.length > 0 && value.replace(/[\d,]/g, "").trim().length === 0;
  return { target, numeric };
}

export function MetricStickers({ metrics }: { metrics: Metric[] }) {
  const { ref, inView: armed } = useInView(0.15);

  return (
    <div ref={ref} className="mt-4 flex flex-wrap gap-6 px-0.5 lg:flex-nowrap">
      {metrics.map((m, i) => {
        const { target, numeric } = parseMetric(m.value);
        const suffix = numeric && m.value.includes("+") ? "+" : "";
        return (
          <StatSticker
            key={i}
            number={m.value}
            label={m.label}
            fill={["var(--card)", "var(--mint)", "var(--marigold)", "var(--blush)"][i % 4]}
            tilt={["-3deg", "2deg", "-1.5deg", "1.5deg"][i % 4]}
            delay={`${i * 90}ms`}
            width="100%"
            align="self-start"
            countUp={numeric && target > 0}
            countUpTarget={target || undefined}
            countUpSuffix={suffix || undefined}
            armed={armed}
          />
        );
      })}
    </div>
  );
}
