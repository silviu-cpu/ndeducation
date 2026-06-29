import type { Metadata } from "next";
import { LegalShell, LEGAL } from "../../components/legal-shell";
import { CookieSettingsButton } from "../../components/cookie-consent";

export const metadata: Metadata = {
  title: "Politică cookies — N&D Education",
  description: "Cum folosim cookies pe platforma N&D Education și cum le gestionezi.",
};

export default function CookiesPage() {
  return (
    <LegalShell title="Politică" highlight="cookies">
      <p>
        Această politică explică ce sunt cookie-urile, cum le folosim pe{" "}
        {LEGAL.brand} și cum îți poți gestiona preferințele.
      </p>

      <h2>Ce sunt cookie-urile</h2>
      <p>
        Cookie-urile sunt fișiere mici stocate în browserul tău. Ele ajută
        site-ul să funcționeze corect, să rețină preferințele tale (precum tema
        light/dark) și să înțeleagă cum este folosit site-ul.
      </p>

      <h2>Categorii de cookies</h2>
      <ul>
        <li>
          <strong>Necesare:</strong> esențiale pentru funcționarea site-ului
          (preferințe, securitate). Nu pot fi dezactivate.
        </li>
        <li>
          <strong>Analytics:</strong> ne ajută să înțelegem cum este folosit
          site-ul, ca să-l îmbunătățim. Se activează doar cu acordul tău.
        </li>
        <li>
          <strong>Marketing:</strong> pentru conținut și reclame relevante pe
          alte platforme. Se activează doar cu acordul tău.
        </li>
      </ul>

      <h2>Cum îți gestionezi preferințele</h2>
      <p>
        Îți poți schimba oricând alegerile privind cookie-urile de analiză și
        marketing din panoul de setări:
      </p>
      <p>
        <CookieSettingsButton />
      </p>

      <h2>Modificări</h2>
      <p>
        Putem actualiza această politică din când în când. Pentru întrebări, ne
        poți scrie la <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>.
      </p>
    </LegalShell>
  );
}
