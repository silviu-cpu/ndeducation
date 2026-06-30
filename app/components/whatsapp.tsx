import { SectionLabel, Marker, FormulaBg } from "./site";
import { PhoneMockup } from "./whatsapp-chat";

/** Key selling point: 24/7 instant WhatsApp support, shown as an iPhone chat mockup. */
export function WhatsAppSection() {
  return (
    <section className="glass relative grid grid-cols-1 items-center gap-10 overflow-hidden rounded-xl p-8 lg:grid-cols-2 lg:p-12">
      <FormulaBg img="/10.png" />

      {/* iPhone mockup */}
      <div className="relative flex justify-center">
        <PhoneMockup />
      </div>

      {/* Explanatory text */}
      <div className="relative flex flex-col gap-6">
        <SectionLabel>Suport</SectionLabel>
        <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-black uppercase leading-[1.45] tracking-[-0.03em]">
          Suport <span className="text-primary live-pulse">24/7</span> pe{" "}
          <Marker className="ml-2 marker-bounce">WhatsApp</Marker>
        </h2>
        <p className="max-w-md text-body-lg text-on-surface-variant">
          Unul dintre aspectele cheie ale meditațiilor noastre este suportul
          non-stop pe WhatsApp. Elevul ne poate scrie oricând, la orice oră, ce
          are nevoie — iar noi îi răspundem instant.
        </p>
        <ul className="flex flex-col gap-3">
          {[
            "Răspuns instant la întrebări, zi și noapte",
            "Rezolvări pe poză, direct în conversație",
            "Fără programare — scrii când ai nevoie",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-body-md text-on-surface">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#25d366] text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/40766661551"
          target="_blank"
          rel="noopener noreferrer"
          className="wa-pulse inline-flex h-12 w-fit items-center gap-2 rounded-md bg-[#25d366] px-6 text-label-md font-semibold uppercase tracking-wide text-white transition-shadow hover:shadow-[0_0_28px_-4px_#25d366]"
        >
          <WhatsAppGlyph />
          Scrie-ne pe WhatsApp
        </a>
      </div>
    </section>
  );
}

function WhatsAppGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.16c-.24.68-1.42 1.3-1.96 1.34-.5.05-1.13.24-3.66-.77-3.08-1.21-5.06-4.3-5.21-4.5-.15-.2-1.25-1.66-1.25-3.17s.79-2.25 1.07-2.56c.28-.31.61-.39.81-.39.2 0 .41 0 .58.01.19.01.44-.07.69.53.24.59.83 2.04.9 2.19.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.39-.45.52-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12.99 2.06 1.3 2.35 1.45.29.15.46.13.63-.08.17-.2.73-.85.92-1.14.2-.29.39-.24.66-.15.27.1 1.71.81 2 .96.29.15.49.22.56.34.07.12.07.71-.17 1.39z" />
    </svg>
  );
}
