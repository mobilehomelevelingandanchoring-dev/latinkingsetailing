"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";
import type { SiteImage } from "@/lib/images";

interface Props {
  images: readonly SiteImage[];
  priorityCount?: number;
}

export function GalleryGrid({ images, priorityCount = 4 }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {images.map((img, i) => (
          <button
            key={img.slug}
            className="gallery-tile relative aspect-square overflow-hidden rounded-xl group"
            onClick={() => setLightboxIndex(i)}
            aria-label={`View: ${img.alt}`}
            type="button"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading={i < priorityCount ? "eager" : "lazy"}
              priority={i < priorityCount}
              decoding={i < priorityCount ? "sync" : "async"}
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
