import type { CSSProperties, FC } from "react";
import Image from "next/image";
import { HobbiesCountUp } from "./HobbiesCountUp";

const consoles = ["SNES", "GBA", "PlayStation", "PS2", "NDS", "3DS", "PS3", "PC"];

const games = [
  {
    rank: 5,
    title: "Growlanser series (PS2)",
    line: "Combat that never gets boring, choices that actually matter, multiple endings, and a story that's crazy good. This is why I still love JRPGs.",
    fill: "var(--mint)",
    tilt: "-1.5deg",
  },
  {
    rank: 4,
    title: "Mass Effect trilogy",
    line: "Three games with a great story, characters you really grow with, and combat that stays fun.",
    fill: "var(--paper)",
    tilt: "1.5deg",
  },
  {
    rank: 3,
    title: "Dragon Age: Origins",
    line: "Fantasy is my favourite genre, and this one nails it: a story that pulls you in and combat that never gets boring.",
    fill: "var(--blush)",
    tilt: "-2deg",
  },
  {
    rank: 2,
    title: "Sleeping Dogs",
    line: "Crazy martial-arts fights in an open-world Hong Kong. What else do you need?",
    fill: "var(--card)",
    tilt: "3deg",
  },
  {
    rank: 1,
    title: "Telltale games",
    line: "I love games that tell a story, and Telltale tells them best. Come back, please.",
    fill: "var(--card)",
    tilt: "-1deg",
  },
];

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

function ChessBoard() {
  const squares = [];

  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const dark = (row + col) % 2 === 1;
      squares.push(
        <rect
          key={`${row}-${col}`}
          x={col * 11}
          y={row * 11}
          width={11}
          height={11}
          fill={dark ? "var(--ink)" : "var(--card)"}
        />,
      );
    }
  }

  return (
    <svg
      viewBox="0 0 88 88"
      width={88}
      height={88}
      aria-hidden="true"
      className="shrink-0 rounded-[6px] border-2 border-ink"
    >
      <rect width="88" height="88" fill="var(--card)" />
      {squares}
    </svg>
  );
}

export const HobbiesSection: FC = () => {
  return (
    <section
      id="hobbies"
      aria-labelledby="hobbies-title"
      className="section bg-marigold"
    >
      <div className="shell">
        <h2 id="hobbies-title" className="text-h2">
          When I&rsquo;m not coding
        </h2>
        <p className="text-small mt-4 max-w-[62ch] text-ink">
          Games, old PCs, chess and stories. Where the keyboard takes a break.
        </p>

        <article
          className="sticker mt-10 p-6 sm:p-8"
          style={
            { "--tilt": "-1deg", background: "var(--card)" } as CSSProperties
          }
        >
          <h3 className="text-h3">Games</h3>
          <div className="mt-4">
            <HobbiesCountUp />
          </div>
          <p className="text-small mt-3 max-w-[62ch] text-ink-soft">
            From SNES to PS3 and PC. Give me a great story over great graphics
            any day, and yes, I keep a ranked top 5.
          </p>

          <ul
            className="no-scrollbar mt-5 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2"
            aria-label="Consoles"
          >
            {consoles.map((console) => (
              <li key={console} className="snap-start">
                <span className="chip chip-solid bg-card">{console}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {games.map((game) => {
              const isTop = game.rank === 1;
              return (
                <li
                  key={game.rank}
                  className={[
                    "sticker flex flex-col p-4",
                    isTop ? "p-5 sm:col-span-2 sm:p-6" : "",
                  ].join(" ")}
                  style={
                    {
                      "--tilt": game.tilt,
                      background: game.fill,
                    } as CSSProperties
                  }
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className={[
                        "bricolage shrink-0 font-extrabold leading-none",
                        isTop ? "text-5xl text-tomato" : "text-4xl",
                      ].join(" ")}
                    >
                      {game.rank}
                    </span>
                    <h4 className={isTop ? "text-h2" : "text-h3"}>
                      {game.title}
                    </h4>
                  </div>
                  <p className="text-small mt-2 text-ink-soft">{game.line}</p>
                </li>
              );
            })}
          </ul>
        </article>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <article
            className="sticker flex flex-col p-6 lg:col-span-4"
            style={
              { "--tilt": "1.5deg", background: "var(--mint)" } as CSSProperties
            }
          >
            <h3 className="text-h3">Old PCs</h3>
            <div className="mt-5 flex gap-8">
              <div>
                <span className="bricolage block text-5xl font-extrabold leading-none">
                  5
                </span>
                <span className="text-tag mt-1 block font-medium">PCs</span>
              </div>
              <div>
                <span className="bricolage block text-5xl font-extrabold leading-none">
                  3
                </span>
                <span className="text-tag mt-1 block font-medium">laptops</span>
              </div>
            </div>
            <p className="text-small mt-5 text-ink-soft">
              My grandfather and uncle had old PCs that had seen better decades,
              so I became the family PC doctor. Five PCs and three laptops
              diagnosed so far, and the waiting room is still open.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <Image
                src="/images/pc-repair.jpeg"
                alt="A desktop PC repair"
                width={899}
                height={1599}
                className="frame h-40 w-full object-cover"
                sizes="(min-width: 1024px) 16vw, 45vw"
                loading="lazy"
              />
              <Image
                src="/images/laptop-repair.jpeg"
                alt="A laptop repair"
                width={1599}
                height={899}
                className="frame h-40 w-full object-cover"
                sizes="(min-width: 1024px) 16vw, 45vw"
                loading="lazy"
              />
            </div>
          </article>

          <article
            className="sticker flex flex-col p-6 lg:col-span-4"
            style={
              {
                "--tilt": "-2deg",
                background: "var(--paper)",
              } as CSSProperties
            }
          >
            <h3 className="text-h3">Writing</h3>
            <p className="text-small mt-3 text-ink-soft">
              I write fiction as Raj G. Two novels in progress: one with giant
              mechs, one with a talking sword. Yes, the sword talks.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {books.map((book) => (
                <div
                  key={book.title}
                  className="book flex min-h-[150px] flex-col p-4 pl-5"
                  style={
                    {
                      "--tilt": book.tilt,
                      background: book.fill,
                    } as CSSProperties
                  }
                >
                  <span className="tag self-start">in progress</span>
                  <h4 className="text-h3 mt-3">{book.title}</h4>
                  <p className="text-small mt-1 text-ink-soft">{book.genre}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="flex flex-col gap-6 lg:col-span-4">
            <article
              className="sticker p-6"
              style={
                {
                  "--tilt": "1deg",
                  background: "var(--card)",
                } as CSSProperties
              }
            >
              <h3 className="text-h3">Reading</h3>
              <p className="text-small mt-3 text-ink-soft">
                Most of my reading is choose-your-own-adventure books from
                Choice of Games and Hosted Games, where I get to make all the
                bad decisions.
              </p>
              <p className="text-small mt-3 text-ink-soft">
                The rest is fantasy, like Ranger&rsquo;s Apprentice and Lord of
                the Rings.
              </p>
            </article>

            <article
              className="sticker p-6"
              style={
                {
                  "--tilt": "-1.5deg",
                  background: "var(--blush)",
                } as CSSProperties
              }
            >
              <h3 className="text-h3">Chess</h3>
              <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <ChessBoard />
                <p className="text-small text-ink-soft">
                  I play chess. In my head I&rsquo;m a grandmaster. The board has
                  other opinions.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
