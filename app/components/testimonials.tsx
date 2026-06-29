"use client";

import { useRef, useState } from "react";
import { Marker } from "./site";

type Testimonial = {
  src: string;
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    src: "/video.mp4",
    name: "Andrei M.",
    role: "Promoția 2024 · Matematică",
    quote:
      "Am intrat la Politehnică cu media 9,80. Meditațiile 1-la-1 au făcut diferența.",
  },
  {
    src: "/video2.mp4",
    name: "Ioana P.",
    role: "Promoția 2024 · Filologie",
    quote:
      "De la 6 la 9 la Română în trei luni. Suportul pe WhatsApp m-a salvat înainte de probe.",
  },
  {
    src: "/video3.mp4",
    name: "Robert D.",
    role: "Promoția 2023 · Științe",
    quote:
      "Simulările și feedbackul instant m-au făcut să ajung pregătit în ziua examenului.",
  },
];

export function Testimonials() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {testimonials.map((t) => (
        <TestimonialCard key={t.src} testimonial={t} />
      ))}
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [active, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Hover (or tapping Play) behaves like pressing play: sound + native controls.
  function start() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    // Try with sound; if the browser blocks it (no prior gesture), fall back to muted.
    v.play().catch(() => {
      v.muted = true;
      v.play().catch(() => {});
    });
    setActive(true);
  }

  function stop() {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0.1;
    setActive(false);
  }

  return (
    <article className="glass flex flex-col gap-4 rounded-xl p-4">
      <div
        className="relative aspect-[9/16] overflow-hidden rounded-md bg-surface-container-lowest"
        onMouseEnter={start}
        onMouseLeave={stop}
      >
        {/* The #t=0.1 fragment makes the browser render a real frame as the poster */}
        <video
          ref={videoRef}
          src={`${testimonial.src}#t=0.1`}
          preload="metadata"
          playsInline
          controls={active}
          className="h-full w-full object-cover"
        />

        {/* Play affordance over the poster (for tap on mobile / click); hover plays too */}
        {!active && (
          <button
            type="button"
            onClick={start}
            aria-label="Redă testimonialul"
            className="absolute inset-0 grid place-items-center bg-black/20 transition-colors hover:bg-black/30"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-primary text-on-primary shadow-[0_0_36px_-6px_#ffaa06]">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      <div className="flex flex-col gap-3 px-1 pb-1">
        <p className="text-body-md italic text-on-surface">“{testimonial.quote}”</p>
        <div className="flex flex-col gap-1">
          <Marker className="w-fit text-sm">{testimonial.name}</Marker>
          <span className="label-hud text-on-surface-variant">{testimonial.role}</span>
        </div>
      </div>
    </article>
  );
}
