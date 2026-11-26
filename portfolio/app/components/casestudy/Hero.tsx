import Image from "next/image";
import { Hand } from "lucide-react";
import type { CSSProperties } from "react";
import type { CaseStudyData } from "@/app/components/CaseStudy";

interface CaseStudyHeroProps {
  data: CaseStudyData;
}

export function CaseStudyHero({ data }: CaseStudyHeroProps) {
  const screenshot = data.screenshot;
  const portrait = screenshot ? screenshot.height / screenshot.width > 1.3 : false;

  return (
    <section className="section pb-14 lg:pb-20">
      <div className="shell">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <span className="tag">{data.tag}</span>
            <h1 className="text-display mt-5 max-w-[13ch]">{data.title}</h1>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink-soft lg:text-xl">
              {data.intro}
            </p>

            <span className="hand mt-7 inline-flex -rotate-2 items-center gap-2 text-2xl text-ink-soft">
              <Hand size={18} strokeWidth={2} />By Raj G
            </span>

            <div className="mt-8 flex flex-wrap gap-3">
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

          {screenshot && (
            <div className="mx-auto w-full max-w-[520px] lg:col-span-6 lg:max-w-none">
              <div className={portrait ? "relative mx-auto w-full max-w-[300px]" : "relative w-full"}>
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-2 translate-y-3 rotate-[2.5deg] rounded-[14px] border-2 border-ink bg-marigold sm:translate-x-3 sm:translate-y-4"
                />
                <div
                  className="sticker relative p-2"
                  style={{ "--tilt": "-1.5deg" } as CSSProperties}
                >
                  <Image
                    src={screenshot.src}
                    alt={`${data.title} app screenshot`}
                    width={screenshot.width}
                    height={screenshot.height}
                    className="block h-auto w-full rounded-[6px] border-2 border-ink"
                    sizes={
                      portrait
                        ? "(min-width: 1024px) 300px, 80vw"
                        : "(min-width: 1024px) 520px, 100vw"
                    }
                    priority
                  />
                </div>
              </div>
              {portrait && (
                <p className="mt-6 text-center text-tag text-ink-soft">
                  Portrait screenshot from a real device
                </p>
              )}
            </div>
          )}
        </div>

        <div className="mt-12 lg:mt-16">
          <div
            className="sticker p-6 sm:p-7 lg:p-8"
            style={{ "--tilt": "-0.5deg" } as CSSProperties}
          >
            <h2 className="text-h3">At a glance</h2>
            <dl className="mt-5 grid grid-cols-2 gap-x-5 gap-y-5 lg:grid-cols-4 lg:gap-x-8">
              <div className="border-t-2 border-dashed border-ink/30 pt-3">
                <dt className="text-tag text-ink-soft">Role</dt>
                <dd className="mt-1 text-small font-semibold">{data.glance.role}</dd>
              </div>
              <div className="border-t-2 border-dashed border-ink/30 pt-3">
                <dt className="text-tag text-ink-soft">Stack</dt>
                <dd className="mt-1 text-small font-semibold">{data.glance.stack}</dd>
              </div>
              <div className="border-t-2 border-dashed border-ink/30 pt-3">
                <dt className="text-tag text-ink-soft">Status</dt>
                <dd className="mt-1 text-small font-semibold">{data.glance.status}</dd>
              </div>
              <div className="border-t-2 border-dashed border-ink/30 pt-3">
                <dt className="text-tag text-ink-soft">Link</dt>
                <dd className="mt-1 text-small font-semibold">
                  <a
                    href={data.glance.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center underline decoration-2 underline-offset-4"
                  >
                    {data.glance.linkLabel}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
