import Link from "next/link";
import Image from "next/image";
import { Category, getRepresentative, aspectStyle } from "@/lib/artwork-data";

export function CategoryTile({
  category,
  title,
  priority,
}: {
  category: Category;
  title: string;
  priority?: boolean;
}) {
  const piece = getRepresentative(category);

  return (
    <Link
      href={`/artwork/${category}`}
      className="group block focus:outline-none"
      aria-label={`View ${title}`}
    >
      <figure className="relative bg-[color:var(--color-background-alt)] overflow-hidden">
        <div className="relative" style={aspectStyle(piece?.aspect ?? "4:5")}>
          {piece ? (
            <Image
              src={piece.image}
              alt={`${title} — representative work`}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
              className="object-cover artwork-tile"
            />
          ) : null}
        </div>
        <figcaption className="absolute bottom-0 left-0 right-0 p-4 md:p-5 flex items-end justify-between bg-gradient-to-t from-black/45 via-black/15 to-transparent">
          <span className="font-display italic text-white text-2xl md:text-3xl leading-tight drop-shadow">
            {title}
          </span>
          <span
            aria-hidden
            className="hidden sm:inline-block text-white/85 text-xs tracking-widest uppercase pb-1.5 transition-transform duration-300 group-hover:translate-x-1"
          >
            View →
          </span>
        </figcaption>
      </figure>
    </Link>
  );
}
