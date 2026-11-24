"use client";

import { useEffect, useState, useRef } from "react";

export function useReducedMotion(): boolean {
  const [reduce, setReduce] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReduce(media.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return reduce;
}

export function useInView(threshold = 0.15, rootMargin = "0px"): boolean {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasArmed = useRef(false);

  useEffect(() => {
    if (hasArmed.current) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !inView) {
            setInView(true);
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    hasArmed.current = true;

    return () => observer.disconnect();
  }, [inView, threshold, rootMargin]);

  return inView;
}

export function useCountUp(
  target: number,
  duration = 900,
  options?: { startDelay?: number; startFromZero?: boolean; prefix?: string; suffix?: string }
): { value: number; display: string } {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(target);
  const hasRun = useRef(false);

  useEffect(() => {
    if (reduce) return;
    if (hasRun.current) return;

    const startFromZero = options?.startFromZero ?? true;
    const startDelay = options?.startDelay ?? 0;

    if (startFromZero) {
      const reset = requestAnimationFrame(() => setValue(0));
      return () => cancelAnimationFrame(reset);
    }

    const el = document.getElementById("countup-trigger");
    if (!el) return;

    const timer = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };
      requestAnimationFrame(tick);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [target, duration, reduce, options?.startDelay, options?.startFromZero]);

  const display = (options?.prefix ?? "") + value.toLocaleString("en-US") + (options?.suffix ?? "");

  return { value, display };
}

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number | undefined;

    const tick = () => {
      const doc = document.scrollingElement || document.documentElement;
      const scrollTop = doc.scrollTop;
      const scrollHeight = doc.scrollHeight - window.innerHeight;
      setProgress(scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0);
      rafId = requestAnimationFrame(tick);
    };

    tick();

    window.addEventListener("scroll", tick, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", tick);
    };
  }, []);

  return progress;
}