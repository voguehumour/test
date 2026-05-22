import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Kitten } from "@/lib/kittens-data";

const statusStyles: Record<Kitten["status"], string> = {
  Available: "text-[color:var(--color-accent)]",
  Reserved: "text-[color:var(--color-text-secondary)]",
  Sold: "text-[color:var(--color-text-secondary)] line-through",
};

export function KittenCard({ kitten }: { kitten: Kitten }) {
  const isAvailable = kitten.status === "Available";

  return (
    <article className="flex flex-col border border-[color:var(--color-border)] bg-[color:var(--color-background-alt)]">
      <div
        className="w-full bg-[color:var(--color-border)]/40 flex items-center justify-center"
        style={{ aspectRatio: "1 / 1" }}
        aria-hidden
      >
        <span className="text-xs uppercase tracking-[0.15em] text-[color:var(--color-text-secondary)]">
          Photo coming soon
        </span>
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h2 className="font-display text-2xl">{kitten.name}</h2>
          <span
            className={cn(
              "text-xs uppercase tracking-[0.15em] pt-1.5",
              statusStyles[kitten.status],
            )}
          >
            {kitten.status}
          </span>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <span className="text-xs uppercase tracking-[0.12em] text-[color:var(--color-text-secondary)]">
            {kitten.sex}
          </span>
          <span className="text-xs uppercase tracking-[0.12em] text-[color:var(--color-text-secondary)]">
            {kitten.color}
          </span>
          {kitten.birthdate && (
            <span className="text-xs uppercase tracking-[0.12em] text-[color:var(--color-text-secondary)]">
              Born {new Date(kitten.birthdate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </span>
          )}
        </div>

        <p className="text-sm text-[color:var(--color-text-secondary)] leading-relaxed flex-1">
          {kitten.description}
        </p>

        {kitten.price && (
          <p className="text-sm font-display text-[color:var(--color-text-primary)]">
            ${kitten.price.toLocaleString()}
          </p>
        )}

        <div className="pt-2">
          {isAvailable ? (
            <Link
              href={`/contact?subject=Inquiry about ${kitten.name}`}
              className="btn-solid text-center w-full"
            >
              Inquire
            </Link>
          ) : (
            <span className="block text-center text-xs uppercase tracking-[0.15em] text-[color:var(--color-text-secondary)] py-3 border border-[color:var(--color-border)]">
              {kitten.status}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
