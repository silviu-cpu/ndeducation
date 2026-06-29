"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { side: "in" | "out"; time: string; text?: string; image?: boolean };

const messages: Msg[] = [
  { side: "in", time: "23:47", text: "Bună! Cum rezolv integrala asta? 😅" },
  { side: "out", time: "23:47", text: "Salut! Trimite-mi o poză cu enunțul" },
  { side: "in", time: "23:48", image: true },
  { side: "out", time: "23:48", text: "Folosești integrarea prin părți. Îți scriu pașii acum 👇" },
  { side: "out", time: "23:49", text: "Gata, ai rezolvarea completă. Ai înțeles? 💪" },
];

/** Animated iPhone + WhatsApp chat: messages appear one by one when in view. */
export function PhoneMockup() {
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState<null | "in" | "out">(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const clear = () => {
      timers.current.forEach((t) => clearTimeout(t));
      timers.current = [];
    };
    let running = false;

    const run = () => {
      if (running) return;
      running = true;
      clear();
      setVisible(0);
      setTyping(null);
      let d = 500;
      messages.forEach((m, i) => {
        // typing indicator before the bubble…
        timers.current.push(window.setTimeout(() => setTyping(m.side), d));
        d += 750;
        // …then the bubble itself
        timers.current.push(
          window.setTimeout(() => {
            setTyping(null);
            setVisible(i + 1);
          }, d),
        );
        d += 450;
      });
      timers.current.push(window.setTimeout(() => (running = false), d));
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            run();
          } else {
            clear();
            running = false;
            setVisible(0);
            setTyping(null);
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clear();
    };
  }, []);

  // Keep the newest bubble in view as the chat fills up.
  useEffect(() => {
    const c = chatRef.current;
    if (c) c.scrollTo({ top: c.scrollHeight, behavior: "smooth" });
  }, [visible, typing]);

  return (
    <div
      ref={rootRef}
      className="relative w-[280px] rounded-[2.5rem] border border-outline-variant bg-surface-container-highest p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-[#0b141a]">
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

        {/* WhatsApp header */}
        <div className="flex items-center gap-3 bg-[#1f2c34] px-4 pb-3 pt-9">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary font-mono text-xs font-black text-on-primary">
            N&amp;D
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">N&amp;D BAC · Meditații</p>
            <p className="text-[11px] text-[#25d366]">online</p>
          </div>
        </div>

        {/* Chat area */}
        <div
          ref={chatRef}
          className="flex h-[480px] flex-col gap-2 overflow-y-auto px-3 py-4"
          style={{
            backgroundColor: "#0b141a",
            backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        >
          {messages.slice(0, visible).map((m, i) => (
            <Bubble key={i} msg={m} />
          ))}
          {typing && <Typing side={typing} />}
        </div>
      </div>
    </div>
  );
}

function Bubble({ msg }: { msg: Msg }) {
  const out = msg.side === "out";
  return (
    <div className={`flex ${out ? "justify-end" : "justify-start"}`}>
      <div
        className={`msg-in max-w-[78%] rounded-lg px-3 py-1.5 text-[13px] leading-snug ${
          out ? "bg-[#005c4b] text-white" : "bg-[#1f2c34] text-white"
        }`}
      >
        {msg.image ? (
          <>
            <span className="block h-16 w-28 rounded-md bg-white/10" />
            <span className="mt-1 block text-[11px] text-white/60">poza_problema.jpg</span>
          </>
        ) : (
          msg.text
        )}
        <span className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-white/50">
          {msg.time}
          {out && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9d1d3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M1 13l4 4L13 7M9 13l4 4L23 5" />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
}

function Typing({ side }: { side: "in" | "out" }) {
  const out = side === "out";
  return (
    <div className={`flex ${out ? "justify-end" : "justify-start"}`}>
      <div
        className={`msg-in flex items-center gap-1 rounded-lg px-3 py-2.5 ${
          out ? "bg-[#005c4b]" : "bg-[#1f2c34]"
        }`}
      >
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/60"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
