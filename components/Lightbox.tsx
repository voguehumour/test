"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { Artwork } from "@/lib/artwork-data";

interface LightboxProps {
  items: Artwork[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (next: number) => void;
}

export function Lightbox({ items, index, onClose, onIndexChange }: LightboxProps) {
  const open = index !== null;

  const next = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % items.length);
  }, [index, items.length, onIndexChange]);

  const prev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + items.length) % items.length);
  }, [index, items.length, onIndexChange]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, next, prev]);

  if (!open || index === null) return null;
  const piece = items[index];
  if (!piece) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${piece.title}, ${piece.medium}, ${piece.dimensions}`}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close (Esc)"
        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 inline-flex items-center justify-center w-11 h-11 text-white/90 hover:text-white transition"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
        </svg>
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous (←)"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-12 h-12 text-white/85 hover:text-white transition"
          >
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next (→)"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-12 h-12 text-white/85 hover:text-white transition"
          >
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      <div
        className="relative z-0 flex flex-col items-center justify-center w-full h-full p-6 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-w-[92vw] max-h-[78vh] w-auto h-auto">
          <Image
            src={piece.image}
            alt={piece.alt}
            width={2000}
            height={2500}
            className="max-w-[92vw] max-h-[78vh] w-auto h-auto object-contain"
            priority
          />
        </div>
        <figcaption className="mt-6 text-center max-w-2xl">
          <p className="font-display italic text-2xl text-white">
            {piece.title}
          </p>
          <p className="mt-1 text-sm text-white/70">
            {piece.year} · {piece.medium} · {piece.dimensions}
          </p>
          <p className="mt-1 text-xs text-white/50 tracking-widest uppercase numeral">
            {index + 1} / {items.length}
          </p>
        </figcaption>
      </div>
    </div>
  );
}
