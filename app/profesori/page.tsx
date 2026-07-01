import type { Metadata } from "next";
import Link from "next/link";
import { Nav, Footer, Chip, Marker, FormulaBg } from "../components/site";
import { EnrollButton } from "../components/enroll-modal";

export const metadata: Metadata = {
  title: "Profesori — N&D Education",
  description: "Meditatori verificați pentru fiecare materie de Bacalaureat.",
};

type Tone = "primary" | "secondary" | "tertiary";

type Tutor = {
  name: string;
  title: string;
  subject: string;
  tone: Tone;
  rating: number;
  sessions: number;
  price: number;
  blurb: string;
};

const tutors: Tutor[] = [
  {
    name: "Andrei Ionescu",
    title: "Dr.",
    subject: "Matematică",
    tone: "primary",
    rating: 4.9,
    sessions: 1280,
    price: 120,
    blurb: "Analiză și algebră pentru profil real. Rezolvări pas cu pas pe subiecte de examen.",
  },
  {
    name: "Elena Stan",
    title: "Prof.",
    subject: "Română",
    tone: "tertiary",
    rating: 5.0,
    sessions: 940,
    price: 100,
    blurb: "Eseuri structurate și comentarii literare care iau punctaj maxim la proba scrisă.",
  },
];

export default function Catalog() {
  return (
    <div className="relative flex flex-1 flex-col overflow-clip">
      <div className="blob pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-6 px-4 py-6 sm:px-8">
        <Nav />

        {/* Header */}
        <section className="glass relative overflow-hidden rounded-xl p-8">
          <FormulaBg img="/5.png" />
          <div className="relative flex flex-col gap-4">
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-black uppercase leading-[1.4] tracking-[-0.03em]">
              Profesorii <Marker className="marker-bounce">noștri</Marker>
            </h1>
            <p className="max-w-xl text-body-lg text-on-surface-variant">
              Meditatori verificați, cu rezultate dovedite. Rezervă o sesiune în
              câteva secunde.
            </p>
          </div>
        </section>

        {/* Tutor grid */}
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tutors.map((t) => (
            <TutorCard key={t.name} tutor={t} />
          ))}
        </section>

        {/* Become a tutor CTA */}
        <section className="glass glow-secondary flex flex-col items-center justify-between gap-6 rounded-xl p-8 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-headline-md uppercase">Ești meditator?</h2>
            <p className="mt-1 text-body-md text-on-surface-variant">
              Alătură-te rețelei N&amp;D Education și predă sute de elevi motivați.
            </p>
          </div>
          <button className="h-12 shrink-0 rounded-md border-[1.5px] border-secondary px-6 text-label-md font-semibold uppercase tracking-wide text-secondary transition-colors hover:bg-secondary/10">
            Devino tutor
          </button>
        </section>

        <Footer />
      </div>
    </div>
  );
}

function TutorCard({ tutor }: { tutor: Tutor }) {
  const ring = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  }[tutor.tone];

  return (
    <article className="glass flex flex-col gap-5 rounded-xl p-6 transition-transform hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <span className={`grid h-12 w-12 place-items-center rounded-md bg-surface-container-high font-mono text-lg font-black ${ring}`}>
            {tutor.name.split(" ").map((n) => n[0]).join("")}
          </span>
          <div>
            <h3 className="text-headline-md leading-tight">
              {tutor.title} {tutor.name}
            </h3>
            <p className="font-mono text-code-sm text-on-surface-variant">
              {tutor.sessions} sesiuni
            </p>
          </div>
        </div>
        <span className="flex items-center gap-1 font-mono text-body-md text-on-surface">
          <span className="text-primary">★</span>
          {tutor.rating.toFixed(1)}
        </span>
      </div>

      <Chip tone={tutor.tone}>{tutor.subject}</Chip>

      <p className="flex-1 text-body-md text-on-surface-variant">{tutor.blurb}</p>

      <div className="flex flex-col gap-4 border-t border-outline-variant pt-5">
        <p className="font-mono text-on-surface">
          <span className="text-2xl font-black text-primary">{tutor.price}</span>
          <span className="text-body-md text-on-surface-variant"> RON / oră</span>
        </p>
        <div className="flex gap-2">
          <EnrollButton className="h-11 flex-1 rounded-md bg-primary text-label-md font-semibold uppercase tracking-wide text-on-primary transition-shadow hover:shadow-[0_0_24px_-4px_#ffaa06]">
            Rezervă
          </EnrollButton>
          <Link
            href="/despre"
            className="grid h-11 flex-1 place-items-center rounded-md border border-outline-variant text-label-md font-semibold uppercase tracking-wide text-on-surface transition-colors hover:border-primary hover:text-primary"
          >
            Despre noi
          </Link>
        </div>
      </div>
    </article>
  );
}
