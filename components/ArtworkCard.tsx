import Image from "next/image";
import { Artwork, aspectStyle } from "@/lib/artwork-data";

export function ArtworkCard({
  artwork,
  onOpen,
  index,
}: {
  artwork: Artwork;
  onOpen: (index: number) => void;
  index: number;
}) {
  return (
    <figure className="flex flex-col">
      <button
        type="button"
        onClick={() => onOpen(index)}
        aria-label={`View ${artwork.title} full size`}
        className="group block bg-[color:var(--color-background-alt)] overflow-hidden focus:outline-none focus-visible:outline-2 focus-visible:outline-[color:var(--color-accent)]"
      >
        <div className="relative" style={aspectStyle(artwork.aspect)}>
          <Image
            src={artwork.image}
            alt={artwork.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
            className="object-cover artwork-tile"
          />
        </div>
      </button>
      <figcaption className="mt-4">
        <p className="font-display text-[18px] font-medium leading-snug">
          {artwork.title}
        </p>
        <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
          {artwork.year} · {artwork.medium} · {artwork.dimensions}
        </p>
      </figcaption>
    </figure>
  );
}
