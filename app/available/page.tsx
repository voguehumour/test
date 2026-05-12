import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { aspectStyle, getForSale } from "@/lib/artwork-data";

export const metadata: Metadata = {
  title: "Available Artwork",
  description:
    "Original paintings, sketches, and drawings currently available for purchase.",
};

const formatPrice = (n: number) =>
  `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

export default function AvailablePage() {
  const items = getForSale();

  return (
    <div className="container-content pt-10 md:pt-14 pb-20">
      <header className="mb-10 md:mb-14">
        <h1 className="font-display text-4xl md:text-5xl">
          Available Artwork For Sale
        </h1>
        <p className="mt-3 text-[color:var(--color-text-secondary)] max-w-xl">
          Original work currently available for direct purchase.
        </p>
      </header>

      {items.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 md:gap-y-20">
          {items.map((piece) => {
            const subject = `Inquiry: ${piece.title}`;
            const href = `/contact?subject=${encodeURIComponent(subject)}`;
            return (
              <figure key={piece.id} className="flex flex-col">
                <Link
                  href={href}
                  className="block bg-[color:var(--color-background-alt)] overflow-hidden"
                  aria-label={`Inquire about ${piece.title}`}
                >
                  <div className="relative" style={aspectStyle(piece.aspect)}>
                    <Image
                      src={piece.image}
                      alt={piece.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                      className="object-cover artwork-tile"
                    />
                  </div>
                </Link>
                <figcaption className="mt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                  <div>
                    <p className="font-display text-[20px] font-medium leading-tight">
                      {piece.title}
                    </p>
                    <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                      {piece.dimensions} · {piece.medium}
                    </p>
                    {piece.price !== undefined && (
                      <p className="mt-1 text-[17px] tabular-nums">
                        {formatPrice(piece.price)}
                      </p>
                    )}
                  </div>
                  <Link href={href} className="btn-outline whitespace-nowrap">
                    Contact to Purchase
                  </Link>
                </figcaption>
              </figure>
            );
          })}
        </div>
      ) : (
        <p className="italic text-[color:var(--color-text-secondary)]">
          Available works will be listed here as they become available. For
          now, please inquire directly via the{" "}
          <Link
            href="/contact"
            className="underline underline-offset-4 hover:text-[color:var(--color-text-primary)]"
          >
            Contact page
          </Link>
          .
        </p>
      )}
    </div>
  );
}
