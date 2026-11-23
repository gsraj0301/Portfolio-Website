"use client";

import { useEffect, useState } from "react";
import { Briefcase, Wrench, Gamepad2, Mail } from "lucide-react";

const desktopLinks = [
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "games", label: "Games" },
  { id: "words", label: "Words" },
];

const mobileLinks = [
  { id: "work", label: "Work", Icon: Briefcase },
  { id: "skills", label: "Skills", Icon: Wrench },
  { id: "games", label: "Games", Icon: Gamepad2 },
  { id: "contact", label: "Contact", Icon: Mail },
];

const spyIds = ["work", "skills", "games", "words", "contact"];

export function SiteNav() {
  const [active, setActive] = useState("work");

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
      <div className="shell flex items-center justify-between pb-1 pt-4 lg:hidden">
        <a
          href="/"
          className="bricolage text-lg font-extrabold tracking-tight text-ink"
        >
          Raj G
        </a>
        <a
          href="/raj-g-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center rounded-full border-2 border-ink bg-card px-4 text-[0.9375rem] font-semibold text-ink shadow-[2px_2px_0_var(--ink)]"
        >
          Resume
        </a>
      </div>

      <header className="hidden lg:block sticky top-0 z-40 border-b-2 border-ink bg-paper">
        <nav
          aria-label="Primary"
          className="shell flex h-16 items-center justify-between gap-4"
        >
          <a href="/" className="bricolage text-xl font-extrabold tracking-tight">
            Raj G
          </a>

          <div className="flex items-center gap-1">
            {desktopLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={[
                    "rounded-full border-2 px-3.5 py-1.5 text-[0.9375rem] font-medium transition-colors",
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
              className="rounded-full border-2 border-transparent px-3.5 py-1.5 text-[0.9375rem] font-medium text-ink transition-colors hover:border-ink hover:bg-card"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="btn btn-primary ml-2 px-4 py-2 text-base min-h-11"
            >
              Say hi
            </a>
          </div>
        </nav>
      </header>

      <nav
        aria-label="Sections"
        className="lg:hidden fixed inset-x-0 bottom-0 z-50 mx-auto mb-3 w-[calc(100%-24px)] max-w-md rounded-full border-2 border-ink bg-ink px-2 py-2 shadow-[0_6px_0_rgba(28,23,19,0.25)]"
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
                  className="flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-full py-1"
                >
                  <span
                    className={[
                      "grid h-7 w-7 place-items-center rounded-full",
                      isActive ? "bg-marigold text-ink" : "bg-transparent text-paper",
                    ].join(" ")}
                  >
                    <Icon size={20} strokeWidth={2} aria-hidden="true" />
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
