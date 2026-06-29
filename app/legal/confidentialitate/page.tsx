import type { Metadata } from "next";
import { LegalShell, LEGAL } from "../../components/legal-shell";

export const metadata: Metadata = {
  title: "Confidențialitate — N&D Education",
  description: "Cum colectăm, folosim și protejăm datele tale la N&D Education.",
};

export default function ConfidentialitatePage() {
  return (
    <LegalShell title="Notă de" highlight="confidențialitate">
      <p>
        La {LEGAL.brand} ținem la confidențialitatea ta. Această notă explică ce
        date cu caracter personal colectăm, cum le folosim și ce drepturi ai,
        conform Regulamentului General privind Protecția Datelor (GDPR).
      </p>

      <h2>Cine suntem</h2>
      <p>
        {LEGAL.brand} este responsabilă pentru datele prelucrate prin platformă
        (operator de date). Ne poți contacta la{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> pentru orice întrebare
        legată de prelucrarea datelor.
      </p>

      <h2>Ce date colectăm</h2>
      <ul>
        <li>
          <strong>Date de cont și contact:</strong> nume, adresă de email, număr
          de telefon, preferințe de studiu.
        </li>
        <li>
          <strong>Date din interacțiuni:</strong> mesaje, întrebări trimise,
          materiale încărcate, istoricul ședințelor.
        </li>
        <li>
          <strong>Date tehnice:</strong> adresă IP, tip de browser și dispozitiv,
          mod de utilizare a site-ului (prin cookies și instrumente de analiză).
        </li>
      </ul>

      <h2>Cum folosim datele</h2>
      <ul>
        <li>pentru a furniza și administra serviciile (cont, ședințe, suport);</li>
        <li>pentru a comunica cu tine despre programări și actualizări;</li>
        <li>pentru a menține securitatea și a preveni utilizarea abuzivă;</li>
        <li>pentru a analiza și îmbunătăți platforma.</li>
      </ul>

      <h2>Temei legal</h2>
      <p>
        Prelucrăm datele pe baza executării contractului (pentru a-ți oferi
        serviciile), a interesului nostru legitim (securitate, îmbunătățirea
        platformei) și, acolo unde se aplică, pe baza consimțământului tău (de
        exemplu pentru cookies de analiză sau marketing). Îți poți retrage
        consimțământul oricând.
      </p>

      <h2>Cookies și analiză</h2>
      <p>
        Folosim cookies pentru funcționarea site-ului și, cu acordul tău, pentru
        analiză și marketing. Poți gestiona preferințele oricând din{" "}
        <a href="/legal/cookies">Politica de cookies</a>.
      </p>

      <h2>Cu cine partajăm datele</h2>
      <p>
        Ne bazăm pe furnizori de încredere care prelucrează date în numele
        nostru, exclusiv pentru a ne oferi serviciile lor — de exemplu găzduire
        cloud (AWS) și comunicare prin WhatsApp (Meta). Nu vindem datele tale.
      </p>

      <h2>Cât timp păstrăm datele</h2>
      <p>
        Păstrăm datele doar cât este necesar pentru scopurile descrise. Datele de
        cont se păstrează cât timp contul este activ; dacă acesta este șters sau
        inactiv pe o perioadă lungă, putem elimina sau anonimiza datele asociate.
      </p>

      <h2>Transferuri internaționale</h2>
      <p>
        Unii furnizori pot prelucra date în afara Spațiului Economic European. În
        astfel de cazuri ne asigurăm că există garanții adecvate (de exemplu
        clauze contractuale standard aprobate de Comisia Europeană).
      </p>

      <h2>Drepturile tale</h2>
      <ul>
        <li>dreptul de acces la datele tale;</li>
        <li>dreptul la rectificare și la ștergere;</li>
        <li>dreptul la restricționarea și la opoziția față de prelucrare;</li>
        <li>dreptul la portabilitatea datelor;</li>
        <li>dreptul de a retrage consimțământul;</li>
        <li>
          dreptul de a depune o plângere la Autoritatea Națională de Supraveghere
          a Prelucrării Datelor cu Caracter Personal (ANSPDCP).
        </li>
      </ul>
      <p>
        Pentru a-ți exercita drepturile, scrie-ne la{" "}
        <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>.
      </p>

      <h2>Securitate</h2>
      <p>
        Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja
        datele împotriva accesului neautorizat, pierderii sau utilizării abuzive.
        Niciun serviciu online nu este însă complet sigur, așa că te încurajăm
        să-ți protejezi propriile date de autentificare.
      </p>

      <h2>Modificări</h2>
      <p>
        Putem actualiza această notă din când în când. Vom actualiza data de la
        începutul paginii la fiecare schimbare.
      </p>
    </LegalShell>
  );
}
