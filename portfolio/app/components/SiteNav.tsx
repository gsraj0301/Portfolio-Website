"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Briefcase, Wrench, Coffee, Mail } from "lucide-react";
import { ScrollProgress } from "./ScrollProgress";

const desktopLinks = [
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "hobbies", label: "Hobbies" },
];

const mobileLinks = [
  { id: "work", label: "Work", Icon: Briefcase },
  { id: "skills", label: "Skills", Icon: Wrench },
  { id: "hobbies", label: "Hobbies", Icon: Coffee },
  { id: "contact", label: "Contact", Icon: Mail },
];

const spyIds = ["work", "skills", "hobbies", "contact"];

export function SiteNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    for (const id of spyIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="shell pb-1 pt-4 lg:hidden">
        <Link
          href="/"
          className="bricolage inline-flex min-h-11 min-w-11 items-center justify-center text-lg font-extrabold tracking-tight text-ink"
        >
          raj g.
        </Link>
      </div>

      <header className="hidden lg:block sticky top-0 z-40 border-b-2 border-ink bg-paper">
        <nav
          aria-label="Primary"
          className="shell flex h-16 items-center justify-between gap-4 relative"
        >
          <Link
            href="/"
            className="bricolage inline-flex min-h-11 items-center text-xl font-extrabold tracking-tight"
          >
            raj g.
          </Link>

          <div className="flex items-center gap-1">
            {desktopLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={[
                    "inline-flex min-h-11 items-center rounded-full border-2 px-3.5 py-1.5 text-[0.9375rem] font-medium transition-colors",
                    isActive
                      ? "border-ink bg-marigold text-ink"
                      : "border-transparent text-ink hover:bg-card hover:border-ink",
                  ].join(" ")}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="/raj-g-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border-2 border-transparent px-3.5 py-1.5 text-[0.9375rem] font-medium text-ink transition-colors hover:border-ink hover:bg-card"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="btn btn-primary ml-2 px-4 py-2 text-base min-h-12"
            >
              Say hi
            </a>
          </div>

          <ScrollProgress />
        </nav>
      </header>

      <nav
        aria-label="Sections"
        className="lg:hidden fixed inset-x-0 bottom-0 z-50 mx-auto mb-3 w-[calc(100%-24px)] max-w-md rounded-full border-2 border-ink bg-ink px-2 py-2 shadow-[0_6px_0_0_var(--ink)]"
        style={{ marginBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <ul className="grid grid-cols-4">
          {mobileLinks.map(({ id, label, Icon }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className="nav-item flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-full py-1 transition-transform duration-100 active:scale-95"
                >
                  <span className="relative grid h-7 w-7 place-items-center">
                    <span
                      aria-hidden="true"
                      className={[
                        "absolute inset-0 rounded-full bg-marigold transition-[transform,opacity] duration-200 ease-out",
                        isActive ? "scale-100 opacity-100" : "scale-[0.6] opacity-0",
                      ].join(" ")}
                    />
                    <Icon
                      size={20}
                      strokeWidth={2}
                      aria-hidden="true"
                      className={isActive ? "relative text-ink" : "relative text-paper"}
                    />
                  </span>
                  <span
                    className={[
                      "text-[0.875rem] leading-none",
                      isActive ? "text-paper font-semibold" : "text-paper/80",
                    ].join(" ")}
                  >
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
