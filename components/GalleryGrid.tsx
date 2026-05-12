"use client";

import { useState } from "react";
import { ArtworkCard } from "./ArtworkCard";
import { Lightbox } from "./Lightbox";
import { Artwork } from "@/lib/artwork-data";

export function GalleryGrid({ items }: { items: Artwork[] }) {
  const [index, setIndex] = useState<number | null>(null);

  if (!items.length) return null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 md:gap-y-20">
        {items.map((piece, i) => (
          <ArtworkCard
            key={piece.id}
            artwork={piece}
            index={i}
            onOpen={(idx) => setIndex(idx)}
          />
        ))}
      </div>

      <Lightbox
        items={items}
        index={index}
        onClose={() => setIndex(null)}
        onIndexChange={(n) => setIndex(n)}
      />
    </>
  );
}
