import Image from "next/image";
import type { CaseStudyData } from "@/app/components/CaseStudy";

interface FeatureShowcaseProps {
  data: CaseStudyData;
}

type GalleryImage = { src: string; width: number; height: number; caption?: string };

export function FeatureShowcase({ data }: FeatureShowcaseProps) {
  const galleryImages: GalleryImage[] = data.gallery ?? [];
  const screenshotImage: GalleryImage | undefined = data.screenshot
    ? { src: data.screenshot.src, width: data.screenshot.width, height: data.screenshot.height }
    : undefined;
  const images = galleryImages.length > 0 ? galleryImages : (screenshotImage ? [screenshotImage] : []);

  return (
    <section className="section">
      <div className="shell">
        <h2 className="text-h3 mb-4">What I built</h2>
        <ul className="mt-4 space-y-4">
          {data.features.map((feature, i) => {
            const leadEnd = feature.indexOf(". ");
            const lead =
              leadEnd > 0 && leadEnd < 40 ? feature.slice(0, leadEnd + 1) : null;
            const rest = lead ? feature.slice(leadEnd + 2) : feature;
            return (
              <li key={i} className="sticker p-6">
                <div className="flex gap-3 items-start">
                  <span className="shrink-0 mt-1 text-small font-semibold text-ink">•</span>
                  <div>
                    {lead ? <span className="bricolage text-tag text-ink font-bold">{lead}</span> : null}
                    <span className="mt-1 block text-small text-ink-soft">{rest}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {images.length > 0 && (
          <div className="mt-12">
            <h2 className="text-h3 mb-4">In use</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {images.map((img, i) => (
                <div key={i}>
                  <Image
                    src={img.src}
                    alt={`${data.title} screenshot ${i + 1}`}
                    width={img.width}
                    height={img.height}
                    className="frame w-full h-auto"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    loading="lazy"
                  />
                  {img.caption && (
                    <p className="mt-4 text-tag text-ink-soft">{img.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
