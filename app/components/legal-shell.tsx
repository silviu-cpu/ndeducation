import type { ReactNode } from "react";
import { Nav, Footer, Marker, FormulaBg } from "./site";

/** Shared chrome + typography wrapper for the /legal/* pages. */
export const LEGAL = {
  brand: "N&D Education",
  email: "contact@ndeducation.ro",
  updated: "29 iunie 2026",
};

export function LegalShell({
  title,
  highlight,
  children,
}: {
  title: string;
  highlight: string;
  children: ReactNode;
}) {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative mx-auto flex w-full max-w-[920px] flex-1 flex-col gap-6 px-4 py-6 sm:px-8">
        <Nav />

        <article className="glass relative overflow-hidden rounded-xl p-8 sm:p-12">
          <FormulaBg img="/9.png" />
          <div className="relative">
            <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-black uppercase leading-[1.2] tracking-[-0.03em]">
              {title} <Marker>{highlight}</Marker>
            </h1>
            <p className="mt-3 font-mono text-code-sm text-on-surface-variant">
              Ultima actualizare: {LEGAL.updated}
            </p>

            <div className="legal-prose mt-8">{children}</div>

            <p className="mt-10 rounded-md border border-outline-variant p-4 text-body-md text-on-surface-variant">
              Acest document este un model orientativ și nu constituie consultanță
              juridică. Recomandăm revizuirea de către un specialist înainte de
              utilizarea în producție.
            </p>
          </div>
        </article>

        <Footer />
      </div>
    </div>
  );
}
