import type { CSSProperties, FC } from "react";

const books = [
  {
    title: "Hands That Remember",
    genre: "Sci-fi mech story.",
    tilt: "-1.5deg",
    fill: "var(--card)",
  },
  {
    title: "Sword That Talks",
    genre: "Fantasy with a talking sword named Ozarion.",
    tilt: "1.5deg",
    fill: "var(--blush)",
  },
];

export const WordsSection: FC = () => {
  return (
    <section id="words" aria-labelledby="words-title" className="section">
      <div className="shell">
        <h2 id="words-title" className="text-h2">
          Words
        </h2>
        <p className="text-small mt-4 max-w-[58ch] text-ink-soft">
          I also write. Under the name Raj G, I&rsquo;m working on two novels. I
          started with ChoiceScript interactive fiction before moving to prose.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {books.map((book) => (
            <article
              key={book.title}
              className="book flex min-h-[260px] flex-col p-6 pl-7"
              style={
                { "--tilt": book.tilt, background: book.fill } as CSSProperties
              }
            >
              <span className="tag self-start">in progress</span>
              <h3 className="text-h2 mt-6">{book.title}</h3>
              <p className="text-small mt-3 text-ink-soft">{book.genre}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
