"use client";

import type { CSSProperties, FC } from "react";
import { useCountUp } from "@/app/lib/motion";

interface StatStickerProps {
  number: string;
  label: string;
  fill: string;
  tilt: string;
  delay: string;
  width: string;
  align: string;
  countUp?: boolean;
  countUpTarget?: number;
  countUpPrefix?: string;
  countUpSuffix?: string;
}

export const StatSticker: FC<StatStickerProps> = ({
  number,
  label,
  fill,
  tilt,
  delay,
  width,
  align,
  countUp = false,
  countUpTarget,
  countUpPrefix,
  countUpSuffix,
}) => {
  const { display } = useCountUp(countUpTarget ?? parseInt(number.replace(/[^\d]/g, ""), 10), 900, {
    startDelay: parseInt(delay, 10),
    startFromZero: true,
    prefix: countUpPrefix,
    suffix: countUpSuffix,
  });

  const displayNumber = countUp ? display : number;

  return (
    <div
      className={[
        "sticker slap wiggle relative flex flex-col p-5",
        align,
      ].join(" ")}
      style={
        {
          "--tilt": tilt,
          "--slap-delay": delay,
          width,
          background: fill,
        } as CSSProperties
      }
    >
      <span className="bricolage text-3xl font-bold leading-none tabular-nums">
        {displayNumber}
      </span>
      <span className="mt-2 text-small text-ink-soft">{label}</span>
    </div>
  );
};