import Link from "next/link";

interface StackSectionProps {
  stack: string[];
}

export function StackSection({ stack }: StackSectionProps) {
  return (
    <section className="section !pb-12 !pt-16 lg:!pb-16 lg:!pt-24">
      <div className="shell">
        <div className="flex flex-col gap-6 border-t-2 border-dashed border-ink/40 pt-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-h3">Stack</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <li key={tech} className="chip chip-solid">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/#skills"
            className="inline-flex min-h-11 shrink-0 items-center text-[0.9375rem] font-semibold underline decoration-2 underline-offset-4"
          >
            See how I use this stack
          </Link>
        </div>
      </div>
    </section>
  );
}
