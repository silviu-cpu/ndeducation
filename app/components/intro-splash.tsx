"use client";

import { useEffect, useState } from "react";
import { Marker } from "./site";

const DURATION = 2600; // ms before the overlay is removed from the DOM

// Module-level flag: persists across client-side navigations (so returning to
// home doesn't replay it) but resets on a full page reload.
let played = false;

export function IntroSplash() {
  const [show, setShow] = useState(!played);

  useEffect(() => {
    if (played) return;
    played = true;
    const t = setTimeout(() => setShow(false), DURATION);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden
      className="intro-splash fixed inset-0 z-[100] grid place-items-center"
      style={{
        backgroundColor: "var(--color-background)",
        backgroundImage: "var(--app-bg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="intro-content flex flex-col items-center gap-5 text-center">
        <span className="grid h-16 place-items-center rounded-lg bg-primary px-4 font-mono text-3xl font-black text-on-primary">
          N&amp;D
        </span>
        <h1 className="text-[clamp(1.75rem,6vw,3rem)] font-black uppercase leading-[1.1] tracking-[-0.03em]">
          Meditații 1-la-1 <Marker>premium</Marker>
        </h1>
      </div>
    </div>
  );
}
