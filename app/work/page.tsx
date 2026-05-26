import Link from "next/link";
import { WORK } from "@/lib/work";

export const metadata = { title: "Work" };

export default function WorkIndex() {
  return (
    <div className="px-[var(--gutter)] pt-32 pb-24">
      <h1 className="font-serif text-step-4 tracking-tight mb-16 max-w-[16ch]">
        Selected work
      </h1>
      <ul className="border-t border-hairline">
        {WORK.map((s) => (
          <li key={s.slug} className="border-b border-hairline">
            <Link
              href={`/work/${s.slug}`}
              data-cursor="link"
              data-cursor-label="open"
              className="group grid grid-cols-12 items-center gap-[var(--gutter)] py-10"
            >
              <div className="col-span-3 md:col-span-2 overflow-hidden aspect-[4/5]">
                <img
                  src={s.image}
                  alt=""
                  aria-hidden
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ viewTransitionName: `work-${s.slug}`, filter: "saturate(0.85)" }}
                />
              </div>
              <div className="col-span-9 md:col-span-7">
                <h2 className="font-serif text-step-2 tracking-tight transition-colors duration-200 group-hover:text-accent">
                  {s.title}
                </h2>
                <p className="mt-2 text-fg-dim max-w-[52ch]">{s.context}</p>
              </div>
              <div className="hidden md:block md:col-span-3 text-right font-mono text-step--1 text-fg-dim">
                {s.client} · {s.year}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
