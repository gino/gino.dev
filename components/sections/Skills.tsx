export function Skills() {
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
          <div className="mb-4 text-xl font-semibold">
            Skills &amp; experiences
          </div>
          <div className="space-y-4 leading-relaxed text-white/90">
            <p>
              All the languages and frameworks that I have knowledge of and have
              used before in a variety of projects.
            </p>

            <p>
              Repellendus inventore rem nisi ab quia non. Enim consequuntur
              quibusdam illo eos repellendus.
            </p>
          </div>

          <div className="flex items-center mt-8 space-x-2">
            <button className="px-5 py-3 text-sm font-semibold tracking-wide transition duration-150 ease-in-out rounded-lg bg-black/20 focus:outline-none hover:bg-black/30">
              View all of my skills
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
