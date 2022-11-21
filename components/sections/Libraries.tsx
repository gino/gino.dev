import { useState } from "react";
import { Repository } from "../../lib/github";

export const _repositories: [string, string][] = [
  ["hayes/pothos", "An awesome repository that is featured"],
  ["tailwindlabs/tailwindcss", "An awesome repository that is featured"],
  ["vercel/next.js", "An awesome repository that is featured"],
  ["pnpm/pnpm", "An awesome repository that is featured"],
  ["prisma/prisma", "An awesome repository that is featured"],
  ["vitejs/vite", "An awesome repository that is featured"],
  ["date-fns/date-fns", "An awesome repository that is featured"],
];

interface Props {
  repositories: Repository[];
}

export function Libraries({ repositories }: Props) {
  const [randomRepositories, setRepositories] = useState(() =>
    repositories.slice(0, 3)
  );

  return (
    <div className="relative px-8 py-12 md:px-16 md:py-20 rounded-3xl bg-gradient-to-tl from-violet-900 via-violet-600 to-violet-400">
      <div className="absolute inset-0 z-[1] bg-center bg-[url(/patterns/graph.svg)] [mask-image:radial-gradient(at_top_left,white,rgba(255,255,255,0)_70%)] rounded-tl-3xl" />

      <div className="relative z-10 items-center grid-cols-3 md:grid">
        <div className="col-span-2 md:max-w-sm">
          <div className="flex items-center justify-center w-10 h-10 mb-4 border shadow-sm rounded-xl bg-white/10 border-white/20 text-white/90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <div className="mb-4 text-xl font-semibold">Libraries</div>
          <div className="space-y-4 leading-relaxed text-white/90">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus minus asperiores commodi dolorum.
            </p>

            <p>
              Repellendus inventore rem nisi ab quia non. Enim consequuntur
              quibusdam illo eos repellendus.
            </p>
          </div>

          <div className="flex items-center mt-8 space-x-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/gino?tab=stars"
            >
              <button className="px-5 py-3 text-sm font-semibold tracking-wide transition duration-150 ease-in-out rounded-lg bg-black/20 focus:outline-none hover:bg-black/30">
                View all of my favorite libraries
              </button>
            </a>
          </div>
        </div>
        <div className="relative my-12 md:-ml-20 md:my-0">
          <div className="absolute -translate-x-1/2 -bottom-14 left-1/2 md:left-auto md:-translate-x-0 md:-bottom-auto md:-top-11">
            <button
              onClick={() =>
                setRepositories(() =>
                  repositories.sort(() => Math.random() - 0.5).slice(0, 3)
                )
              }
              className="flex items-center px-3 py-2 space-x-3 text-sm font-semibold transition duration-150 ease-in-out rounded-full md:rounded-lg bg-black/20 md:bg-black/10 hover:bg-black/20 active:bg-black/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>View more</span>
            </button>
          </div>
          <div className="bg-black/30 overflow-hidden border divide-y divide-white/5 border-white/10 md:w-[28rem] md:border-l md:border-r border-l-0 border-r-0 md:rounded-2xl md:backdrop-blur-[70px] shadow-lg md:shadow-xl md:shadow-black/30 relative z-20 md:-mx-0 -mx-8">
            {randomRepositories.map((repository) => (
              <div key={repository.id} className="relative py-6 px-7">
                <a
                  href={repository.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-1 font-semibold hover:underline"
                >
                  {repository.name}
                </a>
                <div className="text-sm truncate md:max-w-xs text-white/80">
                  {repository.description}
                </div>

                <div className="absolute flex items-center px-3 py-2 space-x-2 text-xs font-semibold rounded-full top-4 right-4 bg-white/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white/30"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="tracking-wide">
                    {Intl.NumberFormat("en-US", {
                      compactDisplay: "short",
                      notation: "compact",
                    }).format(repository.stars)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block absolute -left-5 -bottom-5 border border-white/10 z-10 w-[calc(100%+20px)] h-[calc(100%+20px)] bg-white/10 rounded-bl-[24px] [mask-image:linear-gradient(40deg,#fff_16.35%,hsla(0,0%,100%,0)_39.66%)]" />
        </div>
      </div>
    </div>
  );
}
