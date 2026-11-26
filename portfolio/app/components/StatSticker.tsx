"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, FC } from "react";
import { useCountUp } from "@/app/lib/motion";
import { useStickerPress } from "@/app/lib/useStickerPress";

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
  armed?: boolean;
  big?: boolean;
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
  armed = true,
  big = false,
}) => {
  const [slapDone, setSlapDone] = useState(false);
  const { pressed, wiggle, handlers } = useStickerPress<HTMLDivElement>();

  useEffect(() => {
    if (!armed) return;
    const timer = setTimeout(() => setSlapDone(true), 900);
    return () => clearTimeout(timer);
  }, [armed]);

  const { display } = useCountUp(countUpTarget ?? parseInt(number.replace(/[^\d]/g, ""), 10), 900, {
    startDelay: parseInt(delay, 10),
    prefix: countUpPrefix,
    suffix: countUpSuffix,
    enabled: armed,
  });

  const displayNumber = countUp ? display : number;

  return (
    <div
      {...handlers}
      onPointerDown={(event) => {
        setSlapDone(true);
        handlers.onPointerDown(event);
      }}
      onAnimationEnd={(event) => {
        handlers.onAnimationEnd(event);
        if (event.animationName === "slap") setSlapDone(true);
      }}
      className={[
        "sticker flex flex-col",
        big ? "p-5 lg:p-6" : "p-4",
        slapDone ? "" : "slap",
        armed ? "is-armed" : "",
        "wiggle",
        pressed ? "is-pressed" : "",
        wiggle ? "is-wiggle" : "",
        align,
      ].filter(Boolean).join(" ")}
      style={
        {
          "--tilt": tilt,
          "--slap-delay": delay,
          width,
          background: fill,
        } as CSSProperties
      }
    >
      <span
        className={[
          "bricolage block font-bold leading-none tabular-nums",
          big ? "text-4xl lg:text-5xl" : "text-3xl",
        ].join(" ")}
      >
        {displayNumber}
      </span>
      <span className="mt-2 text-small text-ink-soft">{label}</span>
    </div>
  );
};
