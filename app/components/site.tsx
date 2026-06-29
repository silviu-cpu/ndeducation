import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { CookieSettingsButton } from "./cookie-consent";

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
    <footer className="glass relative mt-2 flex flex-col gap-8 overflow-hidden rounded-xl px-8 py-10">
      <FormulaBg img="/7.png" />
      <div className="relative flex flex-col justify-between gap-8 md:flex-row">
        <div className="max-w-xs">
          <span className="text-headline-md tracking-tight">
            N&amp;D <span className="text-primary">Education</span>
          </span>
          <p className="mt-3 text-body-md text-on-surface-variant">
            Centrul de comandă pentru Bacalaureat. Meditații, simulări și progres
            în timp real.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
          <FooterCol
            title="Platformă"
            links={[
              { label: "Acasă", href: "/" },
              { label: "Profesori", href: "/catalog" },
              { label: "Testimoniale", href: "/testimoniale" },
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              { label: "Termeni și condiții", href: "/legal/termeni" },
              { label: "Confidențialitate", href: "/legal/confidentialitate" },
              { label: "Politică cookies", href: "/legal/cookies" },
            ]}
          />
        </div>
      </div>
      <div className="relative flex flex-col gap-3 border-t border-outline-variant pt-6 text-on-surface-variant sm:flex-row sm:items-center sm:justify-between">
        <span className="label-hud">© 2025 N&amp;D Education</span>
        <div className="flex items-center gap-4">
          <CookieSettingsButton />
          <span className="font-mono text-code-sm">status: <span className="text-secondary">online</span></span>
        </div>
      </div>
      <p className="relative flex items-center justify-center gap-1.5 text-body-md text-on-surface-variant">
        made with
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff3b30" aria-label="dragoste" role="img">
          <path d="M12 21s-6.7-4.35-9.33-8.06C.9 10.2 1.5 6.7 4.2 5.3c2-1.04 4.2-.3 5.3 1.2l.5.7.5-.7c1.1-1.5 3.3-2.24 5.3-1.2 2.7 1.4 3.3 4.9 1.53 7.64C18.7 16.65 12 21 12 21z" />
        </svg>
        by{" "}
        <a
          href="https://www.skillview.ro/home"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-on-surface transition-colors hover:text-primary"
        >
          Skillview
        </a>
      </p>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="label-hud text-on-surface">{title}</span>
      {links.map((l) => (
        <Link key={l.href} href={l.href} className="text-body-md text-on-surface-variant transition-colors hover:text-primary">
          {l.label}
        </Link>
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
