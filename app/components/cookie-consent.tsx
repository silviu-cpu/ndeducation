"use client";

import { useEffect, useRef, useState } from "react";

type Prefs = { necessary: true; analytics: boolean; marketing: boolean };

const STORAGE_KEY = "cookie-consent";
const OPEN_EVENT = "open-cookie-settings";

function load(): Prefs | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const p = JSON.parse(raw);
    return { necessary: true, analytics: !!p.analytics, marketing: !!p.marketing };
  } catch {
    return null;
  }
}

function save(prefs: Prefs) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...prefs, ts: Date.now() }),
  );
}

/** Footer link that reopens the cookie settings modal. */
export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent(OPEN_EVENT))}
      className="label-hud text-on-surface-variant transition-colors hover:text-primary"
    >
      Setări cookies
    </button>
  );
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // Lazy init reads localStorage without a setState-in-effect (lint-safe; load()
  // returns null on the server, so SSR and first client render both start false).
  const [analytics, setAnalytics] = useState(() => load()?.analytics ?? false);
  const [marketing, setMarketing] = useState(() => load()?.marketing ?? false);
  const decided = useRef(false);

  // Show the banner if there's no stored choice + wire the "reopen settings" event.
  useEffect(() => {
    const existing = load();
    decided.current = !!existing;
    let t: number | undefined;
    if (!existing) t = window.setTimeout(() => setShowBanner(true), 400);

    const onOpen = () => {
      const p = load();
      setAnalytics(p?.analytics ?? false);
      setMarketing(p?.marketing ?? false);
      setShowModal(true);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      if (t) clearTimeout(t);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, []);

  function persist(prefs: Prefs) {
    save(prefs);
    decided.current = true;
    setShowBanner(false);
    setShowModal(false);
  }

  const acceptAll = () => persist({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => persist({ necessary: true, analytics: false, marketing: false });
  const saveChoices = () => persist({ necessary: true, analytics, marketing });

  if (!showBanner && !showModal) return null;

  return (
    <>
      {/* Banner */}
      {showBanner && !showModal && (
        <div className="fixed inset-x-0 bottom-0 z-[90] p-4">
          <div className="glass mx-auto flex max-w-3xl flex-col gap-4 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-body-md text-on-surface-variant">
              Folosim cookies pentru funcționarea site-ului și, cu acordul tău,
              pentru analiză și marketing.{" "}
              <a href="/legal/cookies" className="text-primary underline-offset-2 hover:underline">
                Află mai multe
              </a>
              .
            </p>
            <div className="flex shrink-0 flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="h-10 rounded-md border border-outline-variant px-4 text-label-md font-semibold uppercase tracking-wide text-on-surface transition-colors hover:border-primary hover:text-primary"
              >
                Setări
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="h-10 rounded-md border border-outline-variant px-4 text-label-md font-semibold uppercase tracking-wide text-on-surface transition-colors hover:border-primary hover:text-primary"
              >
                Doar necesare
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="h-10 rounded-md bg-primary px-4 text-label-md font-semibold uppercase tracking-wide text-on-primary transition-shadow hover:shadow-[0_0_24px_-4px_#ffaa06]"
              >
                Accept toate
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings modal */}
      {showModal && (
        <div className="fixed inset-0 z-[95] grid place-items-center p-4">
          <button
            type="button"
            aria-label="Închide"
            onClick={() => {
              setShowModal(false);
              if (!decided.current) setShowBanner(true);
            }}
            className="absolute inset-0 bg-black/60"
          />
          <div className="glass relative z-10 flex w-full max-w-lg flex-col gap-5 rounded-xl p-6">
            <div className="flex flex-col gap-1">
              <h2 className="text-headline-md">Setări cookies</h2>
              <p className="text-body-md text-on-surface-variant">
                Alege ce categorii de cookies accepți. Cele necesare nu pot fi dezactivate.
              </p>
            </div>

            <CategoryRow
              title="Necesare"
              desc="Esențiale pentru funcționarea site-ului (temă, preferințe, securitate)."
              checked
              locked
            />
            <CategoryRow
              title="Analytics"
              desc="Ne ajută să înțelegem cum e folosit site-ul, ca să-l îmbunătățim."
              checked={analytics}
              onChange={setAnalytics}
            />
            <CategoryRow
              title="Marketing"
              desc="Pentru conținut și reclame relevante pe alte platforme."
              checked={marketing}
              onChange={setMarketing}
            />

            <div className="mt-2 flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={rejectAll}
                className="h-10 rounded-md border border-outline-variant px-4 text-label-md font-semibold uppercase tracking-wide text-on-surface transition-colors hover:border-primary hover:text-primary"
              >
                Doar necesare
              </button>
              <button
                type="button"
                onClick={saveChoices}
                className="h-10 rounded-md border border-outline-variant px-4 text-label-md font-semibold uppercase tracking-wide text-on-surface transition-colors hover:border-primary hover:text-primary"
              >
                Salvează
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="h-10 rounded-md bg-primary px-4 text-label-md font-semibold uppercase tracking-wide text-on-primary transition-shadow hover:shadow-[0_0_24px_-4px_#ffaa06]"
              >
                Accept toate
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CategoryRow({
  title,
  desc,
  checked,
  locked,
  onChange,
}: {
  title: string;
  desc: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-md border border-outline-variant p-4">
      <div className="flex flex-col gap-1">
        <span className="text-body-md font-semibold text-on-surface">{title}</span>
        <span className="text-body-md text-on-surface-variant">{desc}</span>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={locked}
        onClick={() => onChange?.(!checked)}
        className={`relative mt-1 h-6 w-11 shrink-0 rounded-full transition-colors ${
          checked ? "bg-primary" : "bg-surface-container-highest"
        } ${locked ? "cursor-not-allowed opacity-70" : ""}`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${
            checked ? "left-[22px]" : "left-0.5"
          }`}
        />
      </button>
    </div>
  );
}
