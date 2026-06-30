import { CountUp } from "./count-up";

type Tone = "default" | "primary" | "secondary";

/** Stat number (counts up in view) with a label below. */
export function Stat({
  value,
  label,
  tone = "default",
}: {
  value: string;
  label: string;
  tone?: Tone;
}) {
  const accent =
    tone === "primary"
      ? "text-primary"
      : tone === "secondary"
        ? "text-secondary"
        : "text-on-surface";

  return (
    <div className="flex flex-col gap-1">
      <CountUp value={value} className={`font-mono text-4xl font-black tracking-tight ${accent}`} />
      <span className="label-hud text-on-surface-variant">{label}</span>
    </div>
  );
}
