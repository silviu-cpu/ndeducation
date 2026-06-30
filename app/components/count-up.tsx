"use client";

import { useEffect, useRef, useState } from "react";

function parse(v: string) {
  const m = v.match(/^(\D*)(\d+)(\D*)$/);
  if (!m) return null;
  return { prefix: m[1], target: parseInt(m[2], 10), suffix: m[3] };
}

/** A number that counts up from 0 when it scrolls into view (after the intro splash). */
export function CountUp({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const parsed = parse(value);
    if (!parsed || parsed.target < 10) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let started = false;
    let onIntroDone: (() => void) | null = null;

    const animate = () => {
      const start = performance.now();
      const duration = 1400;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(`${parsed.prefix}${Math.round(parsed.target * eased)}${parsed.suffix}`);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const trigger = () => {
      setDisplay(`${parsed.prefix}0${parsed.suffix}`);
      // Wait for the intro splash to clear so the count-up is actually visible.
      if (document.documentElement.dataset.intro === "playing") {
        onIntroDone = animate;
        window.addEventListener("intro-done", onIntroDone, { once: true });
      } else {
        animate();
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started) {
            started = true;
            trigger();
          }
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      if (onIntroDone) window.removeEventListener("intro-done", onIntroDone);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
