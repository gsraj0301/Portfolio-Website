import Link from "next/link";

interface StackSectionProps {
  stack: string[];
}

export function StackSection({ stack }: StackSectionProps) {
  return (
    <section className="section">
      <div className="shell">
        <h2 className="text-h3 mb-4">Stack</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li key={tech} className="chip chip-solid">
              {tech}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-small text-ink-soft">
          <Link
            href="/#skills"
            className="inline-flex min-h-11 items-center font-semibold underline decoration-2 underline-offset-4"
          >
            See how I use this stack
          </Link>
        </p>
      </div>
    </section>
  );
}
