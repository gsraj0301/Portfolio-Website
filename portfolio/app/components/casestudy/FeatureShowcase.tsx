import Image from "next/image";
import type { CSSProperties } from "react";
import type { CaseStudyData } from "@/app/components/CaseStudy";
import { SectionFrame } from "./SectionFrame";

interface FeatureShowcaseProps {
  data: CaseStudyData;
}

type GalleryImage = { src: string; width: number; height: number; caption?: string };

const featureTilts = ["-1deg", "1deg", "-0.5deg", "1.5deg"];

export function FeatureShowcase({ data }: FeatureShowcaseProps) {
  const galleryImages: GalleryImage[] = data.gallery ?? [];
  const screenshotImage: GalleryImage | undefined = data.screenshot
    ? { src: data.screenshot.src, width: data.screenshot.width, height: data.screenshot.height }
    : undefined;
  const images = galleryImages.length > 0 ? galleryImages : screenshotImage ? [screenshotImage] : [];

  return (
    <SectionFrame title="What I built">
      <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        {data.features.map((feature, i) => {
          const leadEnd = feature.indexOf(". ");
          const lead = leadEnd > 0 && leadEnd < 40 ? feature.slice(0, leadEnd + 1) : null;
          const rest = lead ? feature.slice(leadEnd + 2) : feature;
          return (
            <li
              key={i}
              className="sticker flex flex-col p-5 lg:p-6"
              style={{ "--tilt": featureTilts[i % featureTilts.length] } as CSSProperties}
            >
              {lead ? (
                <span className="bricolage text-small font-bold leading-snug text-ink">{lead}</span>
              ) : null}
              <span
                className={[
                  "text-[1.0625rem] leading-relaxed text-ink-soft",
                  lead ? "mt-2" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {rest}
              </span>
            </li>
          );
        })}
      </ul>

      {images.length > 0 && (
        <div className="mt-12 lg:mt-14">
          <div className="flex items-center gap-5">
            <h3 className="text-h3 shrink-0">In use</h3>
            <span
              aria-hidden
              className="hidden h-0 flex-1 border-t-2 border-dashed border-ink/30 sm:block"
            />
          </div>

          <div className="mt-6 grid gap-6">
            {images.map((img, i) => {
              const portrait = img.height > img.width;
              return (
                <figure key={i} className={portrait ? "flex flex-col items-center" : ""}>
                  {portrait ? (
                    <div className="rounded-[26px] border-[6px] border-ink bg-card p-1 shadow-[var(--shadow-hard)]">
                      <Image
                        src={img.src}
                        alt={`${data.title} screenshot ${i + 1}`}
                        width={img.width}
                        height={img.height}
                        className="block h-auto max-h-[560px] w-auto rounded-[18px]"
                        sizes="(min-width: 1024px) 300px, 80vw"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div
                      className="frame overflow-hidden"
                      style={{ "--tilt": "-0.5deg" } as CSSProperties}
                    >
                      <div className="flex h-8 items-center gap-1.5 border-b-2 border-ink bg-card px-3">
                        <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-tomato" />
                        <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-marigold" />
                        <span className="h-2.5 w-2.5 rounded-full border-2 border-ink bg-mint" />
                      </div>
                      <Image
                        src={img.src}
                        alt={`${data.title} screenshot ${i + 1}`}
                        width={img.width}
                        height={img.height}
                        className="block h-auto w-full"
                        sizes="(min-width: 1024px) 720px, 100vw"
                        loading="lazy"
                      />
                    </div>
                  )}
                  {img.caption && (
                    <figcaption
                      className={[
                        "mt-4 text-tag text-ink-soft",
                        portrait ? "text-center" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              );
            })}
          </div>
        </div>
      )}
    </SectionFrame>
  );
}
