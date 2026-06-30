import type { Metadata } from "next";
import { Nav, Footer, Marker, Chip, FormulaBg } from "../components/site";

export const metadata: Metadata = {
  title: "Despre noi — N&D Education",
  description: "Echipa din spatele N&D Education: profesori dedicați de Matematică și Română.",
};

type Member = {
  name: string;
  subject: string;
  title: string;
  bio: string;
  hobbies: string[];
};

const team: Member[] = [
  {
    name: "Andrei Ionescu",
    subject: "Matematică",
    title: "Profesor de Matematică",
    bio: "Predau matematica de peste 10 ani și cred că orice elev poate ajunge la 10, cu metoda potrivită. La ședințe lucrăm pe subiecte de examen, pas cu pas, până când totul devine logic și natural.",
    hobbies: ["Șah", "Alergare", "Astronomie", "Cafea de specialitate"],
  },
  {
    name: "Elena Stan",
    subject: "Română",
    title: "Profesoară de Limba și literatura română",
    bio: "Mă pasionează să transform eseul de Bacalaureat dintr-o corvoadă într-un text pe care chiar vrei să-l scrii. Lucrăm pe structură, argumente și stil, ca punctajul maxim să devină regulă, nu excepție.",
    hobbies: ["Lectură", "Teatru", "Drumeții", "Scris creativ"],
  },
];

export default function DesprePage() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <div className="blob pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-6 px-4 py-6 sm:px-8">
        <Nav />

        {/* Header */}
        <section className="glass relative overflow-hidden rounded-xl p-8">
          <FormulaBg img="/6.png" />
          <div className="relative flex flex-col gap-4">
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-black uppercase leading-[1.4] tracking-[-0.03em]">
              Despre <Marker className="marker-bounce">noi</Marker>
            </h1>
            <p className="max-w-xl text-body-lg text-on-surface-variant">
              Suntem profesori cu experiență la catedră și rezultate dovedite la Bacalaureat.
              <br />
              Credem în meditații 1-la-1 făcute profesionist — fără grupe, fără timp pierdut.
              <br />
              Doar tu, profesorul tău și drumul spre nota dorită.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {team.map((m) => (
            <MemberCard key={m.name} member={m} />
          ))}
        </section>

        <Footer />
      </div>
    </div>
  );
}

function MemberCard({ member }: { member: Member }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <article className="glass flex flex-col gap-5 rounded-xl p-6">
      {/* Photo placeholder — swap for <Image> when the real photo is ready */}
      <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-md bg-surface-container-lowest">
        <span className="font-serif text-6xl font-extrabold text-on-surface-variant/40">
          {initials}
        </span>
        <span className="absolute bottom-3 left-3 rounded bg-black/40 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
          Foto
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Marker className="w-fit">{member.name}</Marker>
          <Chip tone="primary">{member.subject}</Chip>
          <span className="label-hud text-on-surface-variant">{member.title}</span>
        </div>

        <p className="text-body-md text-on-surface-variant">{member.bio}</p>

        <div className="mt-1 flex flex-col gap-2">
          <span className="label-hud text-on-surface">Hobby-uri</span>
          <div className="flex flex-wrap gap-2">
            {member.hobbies.map((h) => (
              <Chip key={h} tone="ghost">{h}</Chip>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
