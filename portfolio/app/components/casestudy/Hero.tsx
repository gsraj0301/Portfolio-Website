"use client";

import Image from "next/image";
import { Hand } from "lucide-react";
import type { CaseStudyData } from "@/app/components/CaseStudy";

interface CaseStudyHeroProps {
  data: CaseStudyData;
}

export function CaseStudyHero({ data }: CaseStudyHeroProps) {
  return (
    <section className="section pt-14 pb-20 lg:pt-20 lg:pb-32">
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-start">
          <div>
            <span className="tag">{data.tag}</span>
            <h1 className="text-display mt-4 max-w-[16ch]">{data.title}</h1>
            <p className="mt-6 max-w-[62ch] text-ink-soft">{data.intro}</p>

            <span className="mt-8 inline-block bricolage text-tag text-ink-soft rotate-[-3deg]">
              <Hand size={16} strokeWidth={2} className="mr-1.5" />By Raj G
            </span>

            <div className="mt-10 flex flex-wrap gap-3">
              {data.live ? (
                <a
                  href={data.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary min-h-12"
                >
                  Visit site
                </a>
              ) : null}
              <a
                href={data.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary min-h-12"
              >
                GitHub repo
              </a>
            </div>
          </div>

          {data.screenshot && (
            <div className="flex justify-center">
              <div
                className="relative inline-block"
                style={{ "--tilt": "2deg" } as React.CSSProperties}
              >
                <Image
                  src={data.screenshot.src}
                  alt={`${data.title} app screenshot`}
                  width={data.screenshot.width}
                  height={data.screenshot.height}
                  className="frame w-full max-w-[340px] h-auto"
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  loading="lazy"
                />
              </div>
              {data.screenshot?.width && data.screenshot?.height && data.screenshot.height / data.screenshot.width > 1.3 && (
                <p className="mt-3 text-tag text-ink-soft text-center">
                  Portrait screenshot from a real device
                </p>
              )}
            </div>
          )}
        </div>

        <div className="mt-16 sticker p-8">
          <h2 className="text-h3 mb-4">At a glance</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-y-2 border-dashed border-ink/40 py-4">
            <div>
              <dt className="text-tag text-ink-soft">Role</dt>
              <dd className="mt-1 text-small font-semibold">{data.glance.role}</dd>
            </div>
            <div>
              <dt className="text-tag text-ink-soft">Stack</dt>
              <dd className="mt-1 text-small font-semibold">{data.glance.stack}</dd>
            </div>
            <div>
              <dt className="text-tag text-ink-soft">Status</dt>
              <dd className="mt-1 text-small font-semibold">{data.glance.status}</dd>
            </div>
            <div>
              <dt className="text-tag text-ink-soft">Link</dt>
              <dd className="mt-1 text-small font-semibold underline decoration-2 underline-offset-4">
                <a
                  href={data.glance.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink font-semibold"
                >
                  {data.glance.linkLabel}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
