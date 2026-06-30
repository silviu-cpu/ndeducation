import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { CookieSettingsButton } from "./cookie-consent";
import { EnrollButton } from "./enroll-modal";

/**
 * Brand wordmark: serif "N&D" + bold uppercase "Education", matching the logo.
 * Color is inherited so it stays legible on both themes.
 */
export function Wordmark({
  className = "",
  stacked = false,
}: {
  className?: string;
  stacked?: boolean;
}) {
  if (stacked) {
    return (
      <span className={`inline-flex flex-col items-center leading-[0.95] ${className}`}>
        <span className="font-serif text-[1.3em] font-extrabold tracking-tight">
          N<span className="font-sans">&amp;</span>D
        </span>
        <span className="text-[0.58em] font-extrabold uppercase tracking-[0.18em] text-primary">Education</span>
      </span>
    );
  }
  return (
    <span className={`inline-flex items-baseline gap-2 whitespace-nowrap ${className}`}>
      <span className="font-serif font-extrabold tracking-tight">
        N<span className="font-sans">&amp;</span>D
      </span>
      <span className="text-[0.78em] font-extrabold uppercase tracking-[0.12em] text-primary">Education</span>
    </span>
  );
}

export function Nav() {
  return (
    <header className="glass flex items-center justify-between rounded-xl px-6 py-4">
      <Link href="/" className="flex items-center gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary font-sans text-sm font-black text-on-primary">
          ND
        </span>
        <Wordmark className="text-headline-md" />
      </Link>
      <nav className="hidden items-center gap-8 md:flex">
        <Link className="label-hud text-on-surface-variant transition-colors hover:text-on-surface" href="/profesori">Profesori</Link>
        <Link className="label-hud text-on-surface-variant transition-colors hover:text-on-surface" href="/testimoniale">Testimoniale</Link>
        <Link className="label-hud text-on-surface-variant transition-colors hover:text-on-surface" href="/despre">Despre noi</Link>
      </nav>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <EnrollButton className="cta-pulse h-11 rounded-md bg-primary px-5 text-label-md font-semibold uppercase tracking-wide text-on-primary transition-shadow hover:shadow-[0_0_24px_-4px_#ffaa06]">
          Începe acum
        </EnrollButton>
      </div>
    </header>
  );
}

/** Decorative handwritten-formula texture layer (4–10.png). Theme-aware via CSS. */
export function FormulaBg({
  img,
  duration,
  size,
  opacity,
  posX,
  posY,
  cover,
}: {
  img: string;
  duration?: number;
  /** Background-size in % (default 120). Higher = more zoomed in. */
  size?: number;
  /** Override the layer opacity for stronger/weaker contrast on this instance. */
  opacity?: number;
  /** Horizontal shift in % (positive = move the image to the right). */
  posX?: number;
  /** Vertical shift in % (positive = move down). */
  posY?: number;
  /** Fill the whole element (background-size: cover), static — guarantees no gaps. */
  cover?: boolean;
}) {
  const style: React.CSSProperties = { backgroundImage: `url(${img})` };
  if (duration) style.animationDuration = `${duration}s`;
  if (opacity != null) style.opacity = opacity;
  if (!cover) {
    if (size) style.backgroundSize = `${size}%`;
    const vars = style as Record<string, string | number>;
    if (posX != null) vars["--fx"] = `${posX}%`;
    if (posY != null) vars["--fy"] = `${posY}%`;
  }

  return (
    <div
      aria-hidden
      className={`formula-layer${cover ? " formula-cover" : ""}`}
      style={style}
    />
  );
}

export function Footer() {
  return (
    <footer className="glass relative mt-2 flex flex-col gap-8 overflow-hidden rounded-xl px-8 py-10">
      <FormulaBg img="/7.png" />
      <div className="relative flex flex-col justify-between gap-8 md:flex-row">
        <div className="max-w-xs">
          <Wordmark className="text-headline-md" />
          <p className="mt-3 text-body-md text-on-surface-variant">
            Meditații 1-la-1 premium pentru Bacalaureat. Profesori dedicați,
            pregătire structurată și rezultate dovedite.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
          <FooterCol
            title="Platformă"
            links={[
              { label: "Acasă", href: "/" },
              { label: "Profesori", href: "/profesori" },
              { label: "Testimoniale", href: "/testimoniale" },
              { label: "Despre noi", href: "/despre" },
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
  className = "",
}: {
  children: React.ReactNode;
  tone?: "primary" | "secondary" | "tertiary" | "ghost";
  className?: string;
}) {
  const tones = {
    primary: "bg-primary text-on-primary",
    secondary: "bg-secondary text-on-secondary",
    tertiary: "bg-tertiary text-on-tertiary",
    ghost: "border border-outline-variant text-on-surface-variant",
  };
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-label-md font-semibold uppercase tracking-wide ${tones[tone]} ${className}`}
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
