import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  return (
    <header className="glass flex items-center justify-between rounded-xl px-6 py-4">
      <Link href="/" className="flex items-center gap-3">
        <span className="grid h-9 place-items-center rounded-md bg-primary px-2 font-mono text-sm font-black text-on-primary">
          N&amp;D
        </span>
        <span className="text-headline-md tracking-tight">Education</span>
      </Link>
      <nav className="hidden items-center gap-8 md:flex">
        <Link className="label-hud text-on-surface-variant transition-colors hover:text-on-surface" href="/catalog">Profesori</Link>
        <Link className="label-hud text-on-surface-variant transition-colors hover:text-on-surface" href="/testimoniale">Testimoniale</Link>
      </nav>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <button className="h-11 rounded-md bg-primary px-5 text-label-md font-semibold uppercase tracking-wide text-on-primary transition-shadow hover:shadow-[0_0_24px_-4px_#ffaa06]">
          Începe acum
        </button>
      </div>
    </header>
  );
}

/** Decorative handwritten-formula texture layer (4–10.png). Theme-aware via CSS. */
export function FormulaBg({ img }: { img: string }) {
  return (
    <div
      aria-hidden
      className="formula-layer"
      style={{ backgroundImage: `url(${img})` }}
    />
  );
}

export function Footer() {
  return (
    <footer className="glass mt-2 flex flex-col gap-8 rounded-xl px-8 py-10">
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div className="max-w-xs">
          <span className="text-headline-md tracking-tight">
            N&amp;D <span className="text-primary">Education</span>
          </span>
          <p className="mt-3 text-body-md text-on-surface-variant">
            Centrul de comandă pentru Bacalaureat. Meditații, simulări și progres
            în timp real.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-6 sm:grid-cols-3">
          <FooterCol title="Platformă" links={["Tutori", "Materiale", "Simulări", "Prețuri"]} />
          <FooterCol title="Companie" links={["Despre", "Cariere", "Blog", "Contact"]} />
          <FooterCol title="Legal" links={["Termeni", "Confidențialitate", "Cookies"]} />
        </div>
      </div>
      <div className="flex flex-col gap-2 border-t border-outline-variant pt-6 text-on-surface-variant sm:flex-row sm:items-center sm:justify-between">
        <span className="label-hud">© 2025 N&amp;D Education</span>
        <span className="font-mono text-code-sm">status: <span className="text-secondary">online</span></span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="label-hud text-on-surface">{title}</span>
      {links.map((l) => (
        <a key={l} href="#" className="text-body-md text-on-surface-variant transition-colors hover:text-primary">
          {l}
        </a>
      ))}
    </div>
  );
}

export function Chip({
  children,
  tone = "primary",
}: {
  children: React.ReactNode;
  tone?: "primary" | "secondary" | "tertiary" | "ghost";
}) {
  const tones = {
    primary: "bg-primary text-on-primary",
    secondary: "bg-secondary text-on-secondary",
    tertiary: "bg-tertiary text-on-tertiary",
    ghost: "border border-outline-variant text-on-surface-variant",
  };
  return (
    <span
      className={`rounded-full px-3 py-1 text-label-md font-semibold uppercase tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/**
 * N&D signature: a highlighter-marker box behind a word — amber fill, black
 * text, slight rotation, like the brand's study graphics.
 */
export function Marker({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-block -rotate-1 bg-primary px-3 py-0.5 text-on-primary shadow-[0_0_30px_-6px_#ffaa06] ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-primary" />
      <span className="label-hud text-on-surface-variant">{children}</span>
    </div>
  );
}
