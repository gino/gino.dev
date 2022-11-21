export function Libraries() {
  return (
    <div className="relative px-16 py-20 rounded-3xl bg-gradient-to-tl from-violet-900 via-violet-600 to-violet-400">
      <div className="absolute inset-0 z-[1] bg-center bg-[url(/patterns/graph.svg)] [mask-image:radial-gradient(at_top_left,white,rgba(255,255,255,0)_70%)] rounded-tl-3xl" />

      <div className="relative z-10 grid items-center grid-cols-3">
        <div className="max-w-sm col-span-2">
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
            <button className="px-5 py-3 text-sm font-semibold tracking-wide transition duration-150 ease-in-out rounded-lg bg-black/20 focus:outline-none hover:bg-black/30">
              View all of favorite libraries
            </button>
          </div>
        </div>
        <div className="relative -ml-20">
          <div className="absolute -top-11">
            <button className="flex items-center px-3 py-2 space-x-3 text-sm font-semibold transition duration-150 ease-in-out rounded-lg bg-black/10 hover:bg-black/20 active:bg-black/30">
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
          <div className="bg-black/30 overflow-hidden border divide-y divide-white/5 border-white/10 w-[28rem] rounded-2xl backdrop-blur-[70px] shadow-xl shadow-black/30 relative z-20">
            {["test/test", "test/test", "test/test"].map(
              (repository, index) => (
                <div key={index} className="relative py-6 px-7">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mb-1 font-semibold hover:underline"
                  >
                    {repository}
                  </a>
                  <div className="max-w-xs text-sm truncate text-white/80">
                    An awesome repository that is featured
                  </div>

                  <div className="absolute flex items-center px-3 py-2 space-x-2 text-xs font-semibold rounded-full top-5 right-5 bg-white/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-white/30"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="tracking-wide">12.3K</span>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="absolute -left-5 -bottom-5 border border-white/10 z-10 w-[calc(100%+20px)] h-[calc(100%+20px)] bg-white/10 rounded-bl-[24px] [mask-image:linear-gradient(40deg,#fff_16.35%,hsla(0,0%,100%,0)_39.66%)]" />
        </div>
      </div>
    </div>
  );
}
