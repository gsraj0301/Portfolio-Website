import Image from "next/image";
import type { CaseStudyData } from "@/app/components/CaseStudy";

interface FeatureShowcaseProps {
  data: CaseStudyData;
}

const FEATURE_TILTS = ["-1.5deg", "1.5deg", "-3deg", "2deg"];

type GalleryImage = { src: string; width: number; height: number; caption?: string };

export function FeatureShowcase({ data }: FeatureShowcaseProps) {
  const galleryImages: GalleryImage[] = data.gallery ?? [];
  const screenshotImage: GalleryImage | undefined = data.screenshot
    ? { src: data.screenshot.src, width: data.screenshot.width, height: data.screenshot.height }
    : undefined;
  const images = galleryImages.length > 0 ? galleryImages : (screenshotImage ? [screenshotImage] : []);

  return (
    <section className="section pt-28 pb-28">
      <div className="shell">
        <h2 className="text-h3 mt-12">What it does</h2>
        <ul className="mt-4 space-y-6">
          {data.features.map((feature, i) => (
            <li
              key={i}
              className="sticker p-6 flex flex-col gap-3"
              style={{
                "--tilt": FEATURE_TILTS[i % FEATURE_TILTS.length],
                background: "var(--card)",
              } as React.CSSProperties}
            >
              <div className="bricolage text-h3 leading-none">{i + 1}</div>
              <p className="text-small text-ink-soft">{feature}</p>
            </li>
          ))}
        </ul>

        {images.length > 0 && (
          <>
            <h2 className="text-h3 mt-12">In use</h2>
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
                    <p className="mt-2 text-tag text-ink-soft">{img.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}