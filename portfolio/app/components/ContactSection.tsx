import type { FC } from "react";
import { ContactForm } from "./ContactForm";

export const ContactSection: FC = () => {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-title"
      className="section bg-tomato pb-32 text-ink lg:pb-28"
    >
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0">
            <h2 id="contact-title" className="text-h2">
              Say hi
            </h2>
            <p className="text-small mt-4 max-w-[46ch]">
              Internship, project, or just want to talk games? Email is fastest.
            </p>

            <a
              href="mailto:gsraj.developer@gmail.com"
              className="min-w-0 bricolage mt-6 inline-flex min-h-11 break-words text-[clamp(1.25rem,6vw,3rem)] font-extrabold leading-tight underline decoration-[3px] underline-offset-[6px]"
              style={{ overflowWrap: "anywhere" }}
            >
              gsraj.developer@gmail.com
            </a>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/raj-g-314576384/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/gsraj0301"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                GitHub
              </a>
              <a
                href="/raj-g-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Download resume
              </a>
            </div>
          </div>

          <ContactForm />
        </div>

        <p className="hand mt-14 text-center text-2xl">
          Built by Raj G in Chennai.
        </p>
      </div>
    </footer>
  );
};
