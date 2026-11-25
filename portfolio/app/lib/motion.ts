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

export function useInView(threshold = 0.15, rootMargin = "0px") {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasArmed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasArmed.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            hasArmed.current = true;
            setInView(true);
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
}

export function useCountUp(
  target: number,
  duration = 900,
  options?: { startDelay?: number; startFromZero?: boolean; prefix?: string; suffix?: string; enabled?: boolean }
): { value: number; display: string } {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const hasRun = useRef(false);
  const startDelay = options?.startDelay ?? 0;
  const enabled = options?.enabled ?? true;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- required to avoid hydration mismatch
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (reduce || !enabled || hasRun.current) return;
    hasRun.current = true;

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
  }, [target, duration, reduce, enabled, startDelay]);

  const display = !isClient || reduce
    ? (options?.prefix ?? "") + target.toLocaleString("en-US") + (options?.suffix ?? "")
    : (options?.prefix ?? "") + value.toLocaleString("en-US") + (options?.suffix ?? "");

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