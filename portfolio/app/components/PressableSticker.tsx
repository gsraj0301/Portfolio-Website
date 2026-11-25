"use client";

import type { CSSProperties, ReactNode } from "react";
import { useStickerPress } from "@/app/lib/useStickerPress";

type Props = {
  children: ReactNode;
  className: string;
  style: CSSProperties;
};

export function PressableSticker({ children, className, style }: Props) {
  const { pressed, wiggle, handlers } = useStickerPress<HTMLElement>();

  return (
    <article
      {...handlers}
      className={[
        className,
        pressed ? "is-pressed" : "",
        wiggle ? "is-wiggle" : "",
      ].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </article>
  );
}
