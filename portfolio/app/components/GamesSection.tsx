import type { CSSProperties, FC } from "react";

const consoles = ["SNES", "GBA", "PlayStation", "PS2", "NDS", "3DS", "PS3", "PC"];

const games = [
  {
    rank: 5,
    title: "Growlanser series (PS2)",
    line: "Combat that never gets boring, choices that actually matter, multiple endings, and a story that's crazy good. This is why I still love JRPGs.",  
  },
  {
    rank: 4,
    title: "Mass Effect trilogy",
    line: "Three games with a great story, characters you really grow with, and combat that stays fun.",
  },
  {
    rank: 3,
    title: "Dragon Age: Origins",
    line: "Fantasy is my favourite genre, and this one nails it: a story that pulls you in and combat that never gets boring.",
  },
  {
    rank: 2,
    title: "Sleeping Dogs",
    line: "Crazy martial-arts fights in an open-world Hong Kong. What else do you need?",
  },
  {
    rank: 1,
    title: "Telltale games",
    line: "I love games that tell a story, and Telltale tells them best. Come back, please.",
  },
];

export const GamesSection: FC = () => {
  return (
    <section
      id="games"
      aria-labelledby="games-title"
      className="section bg-marigold"
    >
      <div className="shell">
        <h2 id="games-title" className="text-h2">
          Games
        </h2>

        <p className="text-small mt-4 max-w-[52ch] text-ink">
          I&rsquo;ll always pick a story first.
        </p>

        <div className="mt-6 flex flex-wrap items-end gap-x-4 gap-y-1">
          <span className="bricolage text-display leading-none">About 1,000</span>
          <span className="text-small pb-2 font-medium">
            games I play, SNES to PS3 &amp; PC
          </span>
        </div>

        <ul
          className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2"
          aria-label="Consoles"
        >
          {consoles.map((console) => (
            <li key={console} className="snap-start">
              <span className="chip chip-solid bg-card">{console}</span>
            </li>
          ))}
        </ul>

        <ol className="mt-10 flex flex-col gap-4">
          {games.map((game) => {
            const isTop = game.rank === 1;
            return (
              <li
                key={game.rank}
                className={[
                  "sticker flex items-start gap-5",
                  isTop ? "p-6 sm:p-8" : "p-5 sm:p-6",
                ].join(" ")}
                style={
                  {
                    "--tilt": isTop ? "-1deg" : "0deg",
                    background: isTop ? "var(--card)" : "var(--card)",
                  } as CSSProperties
                }
              >
                <span
                  className={[
                    "bricolage shrink-0 font-extrabold leading-none",
                    isTop
                      ? "text-6xl text-tomato sm:text-7xl"
                      : "text-4xl text-ink sm:text-5xl",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  {game.rank}
                </span>
                <div>
                  <h3 className={isTop ? "text-h2" : "text-h3"}>
                    {game.title}
                  </h3>
                  <p className="text-small prose-measure mt-2 text-ink-soft">
                    {game.line}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
