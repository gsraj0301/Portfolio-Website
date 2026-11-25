"use client";

import Image from "next/image";
import { MetricStickers } from "./MetricStickers";
import type { CaseStudyData } from "@/app/components/CaseStudy";

interface CaseStudyHeroProps {
  data: CaseStudyData;
}

type GalleryImage = { src: string; width: number; height: number; caption?: string };

export function CaseStudyHero({ data }: CaseStudyHeroProps) {
  const glanceItems = [
    { label: "Role", value: data.glance.role },
    { label: "Stack", value: data.glance.stack },
    { label: "Status", value: data.glance.status },
    { label: "Link", value: data.glance.linkLabel, link: data.glance.linkHref },
  ];

  const galleryImage = data.gallery?.[0];
  const screenshotImage = data.screenshot
    ? { src: data.screenshot.src, width: data.screenshot.width, height: data.screenshot.height, caption: undefined }
    : undefined;
  const screenshot = galleryImage ?? screenshotImage;

  return (
    <section className="pt-28 pb-28">
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-start">
          <div>
            <span className="tag">{data.tag}</span>
            <h1 className="text-display mt-4 max-w-[46ch]">{data.title}</h1>
            <p className="mt-6 max-w-[62ch] text-ink-soft">{data.intro}</p>

            <h2 className="text-h3 mt-10">At a glance</h2>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {glanceItems.map((item, i) => (
                <div
                  key={i}
                  className="sticker p-6"
                  style={{
                    "--tilt": ["-3deg", "2deg", "-1.5deg", "1.5deg"][i % 4],
                    background: "var(--card)",
                  } as React.CSSProperties}
                >
                  <span className="block text-tag text-ink-soft">{item.label}</span>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-small font-semibold underline decoration-2 underline-offset-4"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="block text-small font-semibold">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {data.live ? (
                <a
                  href={data.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Visit site
                </a>
              ) : null}
              <a
                href={data.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                GitHub repo
              </a>
            </div>
          </div>

          {screenshot && (
            <div>
              <Image
                src={screenshot.src}
                alt={`${data.title} app screenshot`}
                width={screenshot.width}
                height={screenshot.height}
                className="frame w-full h-auto"
                sizes="(min-width: 1024px) 50vw, 100vw"
                loading="lazy"
              />
              {screenshot.caption && (
                <p className="mt-2 text-tag text-ink-soft">{screenshot.caption}</p>
              )}
            </div>
          )}
        </div>

        {data.metrics && data.metrics.length > 0 && (
          <MetricStickers metrics={data.metrics} />
        )}
      </div>
    </section>
  );
}