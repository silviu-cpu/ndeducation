import Link from "next/link";
import { Nav, Footer, Chip, SectionLabel, Marker, FormulaBg } from "./components/site";
import { IntroSplash } from "./components/intro-splash";
import { WhatsAppSection } from "./components/whatsapp";
import { Stat } from "./components/stat";
import { CountUp } from "./components/count-up";
import { EnrollButton } from "./components/enroll-modal";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <IntroSplash />
      {/* Ambient light-leaks */}
      <div className="blob pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="blob pointer-events-none absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-6 px-4 py-6 sm:px-8">
        <Nav />

        {/* Hero */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="glass glow-primary col-span-1 flex flex-col justify-center rounded-xl p-8 lg:col-span-7">
            <div className="flex flex-col gap-6">
              <h1 className="text-[clamp(2.5rem,7vw,4rem)] font-black uppercase leading-[1.15] tracking-[-0.04em]">
                Proiectat
                <br />
                pentru <Marker className="marker-bounce">performanță</Marker>
              </h1>
              <p className="max-w-md text-body-lg text-on-surface-variant">
                Meditatori de top, simulări reale și progres monitorizat în timp real.
                <br />
                <br />
                Pregătire 1-la-1 dedicată, gândită să te ducă exact la nota pe care o vrei.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <EnrollButton className="cta-pulse grid h-12 place-items-center rounded-md bg-primary px-6 text-label-md font-semibold uppercase tracking-wide text-on-primary transition-shadow hover:shadow-[0_0_28px_-4px_#ffaa06]">
                  Începe acum
                </EnrollButton>
                <Link href="/profesori" className="grid h-12 place-items-center rounded-md border-[1.5px] border-secondary px-6 text-label-md font-semibold uppercase tracking-wide text-secondary transition-colors hover:bg-secondary/10">
                  Vezi profesorii
                </Link>
              </div>
            </div>
          </div>

          {/* Visual command panel */}
          <div className="glass relative col-span-1 min-h-[260px] overflow-hidden rounded-xl p-6 lg:col-span-5">
            <FormulaBg img="/7.png" cover opacity={0.32} />
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "linear-gradient(#ffaa06 1px, transparent 1px), linear-gradient(90deg, #ffaa06 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-lowest via-transparent to-secondary/10" />
            <div className="relative flex h-full flex-col justify-end">
              <div>
                <CountUp
                  value="1000+"
                  className="font-mono text-5xl font-black tracking-tight text-on-surface"
                />
                <p className="mt-1 text-body-md text-on-surface-variant">
                  ore de meditații livrate
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="glass grid grid-cols-2 gap-6 rounded-xl p-8 md:grid-cols-4">
          <Stat value="100%" label="Rată de promovare" tone="primary" />
          <Stat value="250+" label="Elevi activi" />
          <Stat value="24/7" label="Suport meditatori" />
          <Stat value="<1h" label="Timp de răspuns" tone="secondary" />
        </section>

        {/* Features bento */}
        <section id="materii" className="flex flex-col gap-6">
          <SectionLabel>Sistemul tău de pregătire</SectionLabel>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-6 lg:grid-cols-12">
            {/* Headline feature */}
            <article className="glass glow-primary relative col-span-2 flex flex-col justify-between overflow-hidden rounded-xl p-8 md:col-span-4 lg:col-span-7 lg:row-span-2">
              <FormulaBg img="/6.png" />
              <div className="relative">
                <Chip tone="primary" className="cta-pulse">Disponibil acum</Chip>
              </div>
              <div className="relative mt-10">
                <h3 className="text-headline-lg uppercase leading-[1.05]">
                  Matematică
                  <br />
                  fără secrete
                </h3>
                <p className="mt-4 max-w-md text-body-lg text-on-surface-variant">
                  De la funcții la integrale: lecții structurate pe subiectele de
                  examen, cu rezolvări pas cu pas și seturi de antrenament.
                </p>
              </div>
            </article>

            {/* Average grade */}
            <article className="col-span-2 flex flex-col justify-between rounded-xl bg-primary p-7 text-on-primary md:col-span-2 lg:col-span-5">
              <span className="label-hud opacity-70">Notă medie la BAC</span>
              <div>
                <p className="font-mono text-5xl font-black leading-none">9.3</p>
                <p className="mt-2 text-body-md font-semibold">
                  media obținută de elevii pregătiți cu noi.
                </p>
              </div>
            </article>

            <Feature
              className="lg:col-span-5"
              tone="secondary"
              kicker="Chat instant"
              title="Răspunsuri în secunde"
              body="Trimite o problemă, primești soluția de la un meditator disponibil."
            />

            <Feature
              className="md:col-span-3 lg:col-span-6"
              kicker="Simulări reale"
              title="Subiecte tip examen"
              body="Cronometrate și notate automat, exact ca în ziua probei."
            />
            <Feature
              className="md:col-span-3 lg:col-span-6"
              tone="tertiary"
              kicker="Ședințe 1-la-1"
              title="Meditații premium, complet personalizate"
              body="Sesiuni individuale cu profesori de top, structurate riguros pe nevoile, nivelul și ritmul tău — fără grupe, fără timp pierdut."
            />
          </div>
        </section>

        {/* 24/7 WhatsApp support */}
        <WhatsAppSection />

        {/* CTA banner */}
        <section className="glass glow-primary relative overflow-hidden rounded-xl p-10 text-center sm:p-16">
          <FormulaBg img="/9.png" />
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(#ffaa06 1px, transparent 1px), linear-gradient(90deg, #ffaa06 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative mx-auto flex max-w-xl flex-col items-center gap-6">
            <span className="label-hud text-secondary">{"// sistem online"}</span>
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-black uppercase leading-[1.2] tracking-[-0.03em]">
              Sistemul este online.
              <br />
              <Marker className="marker-bounce">Ești pregătit?</Marker>
            </h2>
            <EnrollButton className="cta-pulse h-12 rounded-md bg-primary px-8 text-label-md font-semibold uppercase tracking-wide text-on-primary transition-shadow hover:shadow-[0_0_24px_-4px_#ffaa06]">
              Conectează-te
            </EnrollButton>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

function Feature({
  kicker,
  title,
  body,
  tone = "default",
  className = "",
}: {
  kicker: string;
  title: string;
  body: string;
  tone?: "default" | "secondary" | "tertiary";
  className?: string;
}) {
  const kickerColor =
    tone === "secondary"
      ? "text-secondary"
      : tone === "tertiary"
        ? "text-tertiary"
        : "text-on-surface-variant";
  const glow =
    tone === "secondary"
      ? "glow-secondary"
      : tone === "tertiary"
        ? "glow-tertiary"
        : "";
  return (
    <article
      className={`glass ${glow} col-span-2 flex flex-col gap-3 rounded-xl p-7 ${className}`}
    >
      <span className={`label-hud ${kickerColor}`}>{kicker}</span>
      <h3 className="text-headline-md leading-tight">{title}</h3>
      <p className="text-body-md text-on-surface-variant">{body}</p>
    </article>
  );
}
