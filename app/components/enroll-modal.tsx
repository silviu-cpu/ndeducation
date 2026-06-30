"use client";

import { useEffect, useState } from "react";

const OPEN_EVENT = "open-enroll";

// EmailJS config — read from env (see /.env, NEXT_PUBLIC_EMAILJS_*).
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

type Status = "idle" | "sending" | "success" | "error";

/** Open the enroll modal from anywhere. */
export function openEnroll() {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT));
}

/** Button that opens the enroll modal. */
export function EnrollButton({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button type="button" className={className} onClick={openEnroll}>
      {children}
    </button>
  );
}

export function EnrollModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  useEffect(() => {
    const onOpen = () => {
      setStatus("idle");
      setError("");
      setOpen(true);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(OPEN_EVENT, onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      setError("Completează nume, telefon și email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Adresa de email nu pare validă.");
      return;
    }
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError("EmailJS nu este configurat (lipsesc variabilele NEXT_PUBLIC_EMAILJS_*).");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: {
            nd_name: form.name,
            nd_phone: form.phone,
            nd_email: form.email,
            nd_message: form.message,
          },
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("success");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setError("Nu am putut trimite mesajul. Încearcă din nou sau scrie-ne pe WhatsApp.");
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[96] grid place-items-center p-4">
      <button
        type="button"
        aria-label="Închide"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/60"
      />
      <div className="glass relative z-10 flex w-full max-w-md flex-col gap-5 rounded-xl p-6 sm:p-8">
        <button
          type="button"
          aria-label="Închide"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-md text-on-surface-variant transition-colors hover:text-primary"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-on-primary">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            <h2 className="text-headline-md">Mulțumim!</h2>
            <p className="text-body-md text-on-surface-variant">
              Am primit mesajul tău. Te contactăm în cel mai scurt timp.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-2 h-11 rounded-md bg-primary px-6 text-label-md font-semibold uppercase tracking-wide text-on-primary"
            >
              Închide
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-1">
              <h2 className="text-headline-md uppercase">Începe acum</h2>
              <p className="text-body-md text-on-surface-variant">
                Lasă-ne datele tale și te contactăm pentru prima ședință.
              </p>
            </div>

            <form className="flex flex-col gap-3" onSubmit={submit}>
              <Field label="Nume" htmlFor="enroll-name">
                <input id="enroll-name" type="text" value={form.name} onChange={update("name")} autoComplete="name" className={inputCls} placeholder="Numele tău" />
              </Field>
              <Field label="Telefon" htmlFor="enroll-phone">
                <input id="enroll-phone" type="tel" value={form.phone} onChange={update("phone")} autoComplete="tel" className={inputCls} placeholder="07xx xxx xxx" />
              </Field>
              <Field label="Email" htmlFor="enroll-email">
                <input id="enroll-email" type="email" value={form.email} onChange={update("email")} autoComplete="email" className={inputCls} placeholder="email@exemplu.ro" />
              </Field>
              <Field label="Mesaj (opțional)" htmlFor="enroll-message">
                <textarea id="enroll-message" value={form.message} onChange={update("message")} rows={3} className={`${inputCls} h-auto resize-none py-2`} placeholder="La ce materie vrei meditații?" />
              </Field>

              {error && <p className="text-body-md text-error">{error}</p>}

              <button
                type="submit"
                disabled={status === "sending"}
                className="cta-pulse mt-1 h-12 rounded-md bg-primary text-label-md font-semibold uppercase tracking-wide text-on-primary transition-shadow hover:shadow-[0_0_24px_-4px_#ffaa06] disabled:opacity-60"
              >
                {status === "sending" ? "Se trimite…" : "Trimite"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const inputCls =
  "h-12 w-full rounded-md border border-outline-variant bg-surface-container-lowest px-4 text-body-md text-on-surface placeholder:text-on-surface-variant/60 outline-none transition-colors focus:border-primary";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="label-hud text-on-surface-variant">
        {label}
      </label>
      {children}
    </div>
  );
}
