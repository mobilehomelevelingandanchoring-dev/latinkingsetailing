import Image from "next/image";
import Link from "next/link";
import { SITE_IMAGES } from "@/lib/images";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ALL_GALLERY_IMAGES = SITE_IMAGES.filter((img) => img.service === "gallery");

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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {ALL_GALLERY_IMAGES.map((img) => (
            <div
              key={img.slug}
              className="relative aspect-square overflow-hidden rounded-xl group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery" className="btn btn-secondary">
            View Before &amp; After Results
          </Link>
        </div>
      </div>
    </section>
  );
}
