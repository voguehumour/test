import { cn } from "@/lib/cn";

export function SectionLabel({
  numeral,
  label,
  className,
}: {
  numeral: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-baseline gap-4 font-sans text-[10px] uppercase tracking-widest text-ink-muted", className)}>
      <span className="numeral text-ink/60">{numeral}</span>
      <span className="block h-px w-8 bg-ink/30 translate-y-[-3px]" />
      <span>{label}</span>
    </div>
  );
}
