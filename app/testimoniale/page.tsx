import type { Metadata } from "next";
import { Nav, Footer, Marker, FormulaBg, Chip } from "../components/site";
import { Testimonials } from "../components/testimonials";

export const metadata: Metadata = {
  title: "Testimoniale — N&D Education",
  description: "Elevii noștri povestesc cum au ajuns la rezultatele de la BAC.",
};

export default function TestimonialePage() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-6 px-4 py-6 sm:px-8">
        <Nav />

        {/* Header */}
        <section className="glass relative overflow-hidden rounded-xl p-8">
          <FormulaBg img="/8.png" />
          <div className="relative flex flex-col gap-4">
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-black uppercase leading-[1.2] tracking-[-0.03em]">
              <Marker>Testimoniale</Marker>
            </h1>
            <p className="max-w-xl text-body-lg text-on-surface-variant">
              Rezultate reale, povestite de elevii noștri. Treci cu mouse-ul peste
              un clip ca să pornească.
            </p>
          </div>
        </section>

        <Testimonials />

        <Footer />
      </div>
    </div>
  );
}
