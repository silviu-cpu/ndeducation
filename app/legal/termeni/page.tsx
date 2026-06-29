import type { Metadata } from "next";
import { LegalShell, LEGAL } from "../../components/legal-shell";

export const metadata: Metadata = {
  title: "Termeni și condiții — N&D Education",
  description: "Termenii și condițiile de utilizare a platformei N&D Education.",
};

export default function TermeniPage() {
  return (
    <LegalShell title="Termeni și" highlight="condiții">
      <p>
        Bun venit la {LEGAL.brand}! Platforma noastră oferă meditații 1-la-1,
        materiale de studiu, simulări și suport pentru pregătirea examenului de
        Bacalaureat. Prin utilizarea platformei, ești de acord cu acești termeni
        și cu Nota de confidențialitate, care explică modul în care prelucrăm
        datele cu caracter personal.
      </p>

      <h2>Despre platformă</h2>
      <p>
        {LEGAL.brand} („platforma”, „noi”) pune la dispoziție tehnologia și
        conținutul prin care elevii se pot pregăti pentru Bacalaureat și pot
        comunica cu meditatorii. Facilităm legătura dintre elevi și meditatori,
        dar pregătirea efectivă și rezultatele depind de implicarea fiecărui
        elev.
      </p>

      <h2>Contul tău</h2>
      <p>
        Unele funcții pot necesita crearea unui cont. Te obligi să oferi
        informații corecte, complete și actuale și să le păstrezi actualizate.
        Ești responsabil pentru toată activitatea desfășurată prin contul tău și
        pentru păstrarea în siguranță a datelor de autentificare.
      </p>
      <ul>
        <li>Nu crea un cont folosind date false sau identitatea altei persoane.</li>
        <li>Nu îți partaja datele de autentificare cu alte persoane.</li>
        <li>Dacă ești minor, ai nevoie de acordul unui părinte sau tutore.</li>
      </ul>

      <h2>Serviciile noastre</h2>
      <p>
        Platforma poate include meditații live, materiale și exerciții, simulări
        de examen și suport prin WhatsApp. Ne străduim să oferim un serviciu
        util și disponibil, dar putem modifica, suspenda sau întrerupe anumite
        funcții atunci când este necesar pentru securitatea, integritatea sau
        buna funcționare a serviciului.
      </p>

      <h2>Rezervări și plăți</h2>
      <p>
        Anumite servicii pot fi contra cost (de exemplu ședințe de meditații sau
        abonamente). Prețul aplicabil este cel afișat la momentul rezervării sau
        al achiziției. Detaliile privind facturarea, reînnoirea și anularea sunt
        comunicate clar înainte de plată.
      </p>

      <h2>Proprietate intelectuală</h2>
      <p>
        Conținutul platformei (texte, materiale didactice, design, grafică,
        software, mărci) aparține {LEGAL.brand} sau ne este licențiat. Îl poți
        folosi exclusiv în scop personal și necomercial, în legătură cu
        pregătirea ta. Nu îl poți copia, distribui sau exploata fără acordul
        nostru scris.
      </p>

      <h2>Utilizare acceptabilă</h2>
      <p>
        Te obligi să folosești platforma responsabil și în conformitate cu legea.
        Nu este permis să transmiți conținut ilegal, abuziv, discriminatoriu sau
        înșelător, să încerci să ocolești măsurile de securitate, să extragi date
        automat sau să perturbi experiența altor utilizatori.
      </p>

      <h2>Conținut generat de utilizator</h2>
      <p>
        Ești responsabil pentru conținutul pe care îl transmiți (mesaje,
        întrebări, fișiere). Acesta trebuie să fie corect, să nu încalce
        drepturile terților și să nu conțină material ilegal sau dăunător. Putem
        elimina conținutul care încalcă acești termeni.
      </p>

      <h2>Limitarea răspunderii</h2>
      <p>
        În limitele permise de lege, {LEGAL.brand} nu garantează obținerea unui
        anumit rezultat la examen și nu răspunde pentru pierderi rezultate din
        utilizarea sau imposibilitatea utilizării platformei. Nimic din acești
        termeni nu exclude răspunderea care nu poate fi exclusă conform legii.
      </p>

      <h2>Modificări ale termenilor</h2>
      <p>
        Putem actualiza acești termeni din când în când. Vom actualiza data de la
        începutul paginii, iar continuarea utilizării platformei după modificări
        înseamnă acceptarea acestora.
      </p>

      <h2>Contact</h2>
      <p>
        Pentru întrebări legate de acești termeni, ne poți scrie la{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>.
      </p>
    </LegalShell>
  );
}
