import Image from "next/image";
import Link from "next/link";
import { SITE_IMAGES } from "@/lib/images";
import { SectionHeader } from "@/components/ui/SectionHeader";

const PREVIEW_SLUGS = [
  "gallery-ford-mustang-bullitt-urmston-latin-king-detailing-11",
  "gallery-ferrari-12cilindri-urmston-latin-king-detailing-04",
  "gallery-ferrari-purosangue-urmston-latin-king-detailing-07",
  "gallery-audi-tt-urmston-latin-king-detailing-01",
  "gallery-ferrari-purosangue-urmston-latin-king-detailing-10",
  "gallery-ford-mustang-bullitt-urmston-latin-king-detailing-12",
];

const PREVIEW_IMAGES = PREVIEW_SLUGS
  .map((slug) => SITE_IMAGES.find((img) => img.slug === slug))
  .filter(Boolean) as typeof SITE_IMAGES[number][];

export function GalleryPreview() {
  return (
    <section className="section-pad">
      <div className="section-container">
        <SectionHeader
          eyebrow="Our work"
          title="Real cars,"
          titleHighlight="real results"
          description="Every vehicle shown was hand-detailed by Latin King Detailing across Urmston and Greater Manchester. Ferraris, Porsches, BMWs and everything in between — we come to you."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {PREVIEW_IMAGES.map((img) => (
            <div
              key={img.slug}
              className="relative aspect-square overflow-hidden rounded-xl group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery" className="btn btn-secondary">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
