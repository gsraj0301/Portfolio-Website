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
  const threeUp = metrics.length === 3;

  return (
    <div ref={ref}>
      <div className="flex items-center gap-5">
        <h2 className="text-h2 shrink-0">Impact at a glance</h2>
        <span
          aria-hidden
          className="hidden h-0 flex-1 border-t-2 border-dashed border-ink/30 sm:block"
        />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:flex lg:items-start lg:gap-6">
        {metrics.map((m, i) => {
          const { target, numeric } = parseMetric(m.value);
          const suffix = numeric && m.value.includes("+") ? "+" : "";
          return (
            <div
              key={i}
              className={[
                "min-w-0",
                threeUp && i === 0 ? "col-span-2" : "",
                "lg:flex-1",
                i === 0 ? "lg:flex-[1.35]" : "",
                ["lg:mt-1", "lg:mt-8", "lg:mt-3", "lg:mt-6"][i % 4],
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <StatSticker
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
                big
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
