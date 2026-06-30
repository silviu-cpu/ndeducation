"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { openEnroll } from "./enroll-modal";

const links = [
  { label: "Profesori", href: "/profesori" },
  { label: "Testimoniale", href: "/testimoniale" },
  { label: "Despre noi", href: "/despre" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(0);
  const btnRef = useRef<HTMLButtonElement>(null);

  function toggle() {
    if (!open && btnRef.current) {
      setTop(btnRef.current.getBoundingClientRect().bottom + 10);
    }
    setOpen((o) => !o);
  }

  // Lock scroll + Escape to close while the menu is open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <button
          ref={btnRef}
          type="button"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={open}
          onClick={toggle}
          className="relative z-[80] grid h-11 w-11 place-items-center rounded-md border border-outline-variant text-on-surface transition-colors hover:border-primary hover:text-primary"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {open &&
        createPortal(
          <>
            {/* Blur everything below the navbar */}
            <div
              className="fixed inset-x-0 bottom-0 z-[60] bg-black/30 backdrop-blur-md"
              style={{ top }}
              onClick={() => setOpen(false)}
            />
            {/* Menu panel */}
            <div
              className="fixed inset-x-3 z-[70] flex flex-col gap-2 rounded-xl border border-outline-variant bg-surface-container-high p-4 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.55)]"
              style={{ top }}
            >
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="label-hud rounded-md px-4 py-5 text-on-surface transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {l.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openEnroll();
                }}
                className="mt-1 h-14 rounded-md bg-primary text-label-md font-semibold uppercase tracking-wide text-on-primary"
              >
                Începe acum
              </button>
            </div>
          </>,
          document.body,
        )}
    </div>
  );
}
