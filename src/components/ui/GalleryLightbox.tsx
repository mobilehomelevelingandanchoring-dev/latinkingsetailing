"use client";

import { useEffect, useCallback, useState, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { SiteImage } from "@/lib/images";

interface Props {
  images: readonly SiteImage[];
  initialIndex?: number;
  onClose: () => void;
}

export function GalleryLightbox({ images, initialIndex = 0, onClose }: Props) {
  const [index, setIndex] = useState(initialIndex);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  // Touch swipe
  const touchStartX = useRef<number>(0);
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) { if (delta > 0) next(); else prev(); }
  };

  useEffect(() => {
    closeRef.current?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const img = images[index];

  return (
    <div
      ref={overlayRef}
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Close */}
      <button
        ref={closeRef}
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        <X size={22} />
      </button>

      {/* Counter */}
      <span className="lightbox-counter" aria-live="polite">
        {index + 1} / {images.length}
      </span>

      {/* Prev */}
      {images.length > 1 && (
        <button className="lightbox-nav lightbox-nav-prev" onClick={prev} aria-label="Previous image">
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Image */}
      <div className="lightbox-img-wrap">
        <Image
          key={img.slug}
          src={img.src}
          alt={img.alt}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      {/* Caption */}
      <p className="lightbox-caption">{img.alt}</p>

      {/* Next */}
      {images.length > 1 && (
        <button className="lightbox-nav lightbox-nav-next" onClick={next} aria-label="Next image">
          <ChevronRight size={28} />
        </button>
      )}
    </div>
  );
}
