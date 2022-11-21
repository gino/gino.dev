import clsx from "clsx";
import { PropsWithChildren } from "react";
import { TypographyLogo } from "../components/ui/TypographyLogo";

function Highlight({ children }: PropsWithChildren) {
  return (
    <span className="font-semibold text-white transition duration-300 ease-in-out border-b-2 cursor-pointer border-white/10 hover:border-blue-600">
      {children}
    </span>
  );
}

function Index() {
  return (
    <div className="max-w-4xl py-16 mx-auto space-y-16">
      <header>
        <div>
          <TypographyLogo className="w-12" />
        </div>
      </header>

      <div>
        <div className="max-w-xl mb-16 leading-relaxed text-white/60">
          <div className="w-16 h-16 mb-8 overflow-hidden rounded-full bg-white/10">
            <img
              src="https://64.media.tumblr.com/9548df747fb7c87e7200e8d93fc9b6c0/tumblr_odj0xsEJ0E1vai64fo1_1280.jpg"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="space-y-4">
            <div>
              I'm a full-stack <Highlight>software engineer</Highlight> from The
              Netherlands.
            </div>
            <div className="text-white/40">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae facere dicta maxime doloribus labore alias nobis
              consectetur assumenda expedita, aspernatur quo ut ullam
              perferendis impedit! Laboriosam fugit, soluta deleniti.
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col space-y-4">
          <div className="px-5 py-3 text-sm font-medium tracking-wide rounded-lg bg-white/5 text-white/60">
            Available for{" "}
            <span className="font-semibold text-white">commissions</span>
          </div>
          <button
            className={clsx(
              "font-medium px-16 py-3 bg-clip-padding bg-white/90 hover:bg-white focus:outline-none rounded-xl text-black border-4 border-white/30 transition duration-200 ease-in-out relative",
              "before:absolute before:[background-image:conic-gradient(from_0deg,var(--tw-gradient-stops))] before:to-blue-600 before:from-purple-700 before:opacity-30 before:rounded-xl before:blur-xl before:inset-0 before:-z-[1] hover:before:opacity-60 before:transition before:duration-700 before:ease-in-out before:will-change-[filter]"
            )}
          >
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;
