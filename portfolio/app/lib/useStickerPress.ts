"use client";

import { useRef, useState } from "react";
import type { AnimationEvent, PointerEvent } from "react";

export function useStickerPress<T extends HTMLElement>() {
  const [pressed, setPressed] = useState(false);
  const [wiggle, setWiggle] = useState(false);
  const didPress = useRef(false);

  const handlers = {
    onPointerDown: (event: PointerEvent<T>) => {
      if (!event.isPrimary || event.button !== 0) return;
      if ((event.target as HTMLElement).closest("a, button")) return;
      didPress.current = true;
      setWiggle(false);
      setPressed(true);
    },
    onPointerUp: (event: PointerEvent<T>) => {
      if (!didPress.current) return;
      didPress.current = false;
      setPressed(false);
      if (event.pointerType !== "mouse") setWiggle(true);
    },
    onPointerCancel: () => {
      didPress.current = false;
      setPressed(false);
    },
    onPointerLeave: () => {
      didPress.current = false;
      setPressed(false);
    },
    onAnimationEnd: (event: AnimationEvent<T>) => {
      if (event.animationName === "wiggle") setWiggle(false);
    },
  };

  return { pressed, wiggle, handlers };
}
