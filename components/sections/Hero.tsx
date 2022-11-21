import clsx from "clsx";
import { Fragment, PropsWithChildren } from "react";
import { TypographyLogo } from "../ui/TypographyLogo";

export function Hero() {
  return (
    <div>
      <header>
        <div>
          <TypographyLogo className="w-12" />
        </div>
      </header>
      <div className="max-w-2xl my-16 leading-relaxed text-white/60">
        <div className="w-16 h-16 overflow-hidden rounded-full bg-white/10">
          <img
            src="/me.jpg"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="mt-8 mb-8 space-y-4">
          <div>
            I'm a full-stack <Highlight>software engineer</Highlight> from The
            Netherlands.
          </div>
          <div className="text-white/40">
            Welcome to my personal site. I'm a 21-years old self-taught software
            engineer from The Netherlands, that loves to create
            web-applications. I would love to work on interesting projects, feel
            free to reach out to me. Let's create something together!
          </div>
        </div>
        <div className="flex items-center gap-5">
          <SocialLinks />
        </div>
      </div>
      <div className="inline-flex flex-col">
        <div className="px-5 py-3 mb-2 text-xs font-medium tracking-wide text-center rounded-lg bg-white/5 text-white/60">
          Available for{" "}
          <span className="font-semibold text-white">commissions</span>
        </div>
        <a href="mailto:me@gino.dev">
          <button
            className={clsx(
              "font-medium text-sm px-16 py-3 bg-clip-padding bg-white/90 hover:bg-white focus:outline-none rounded-xl text-black border-4 border-white/30 transition duration-200 ease-in-out relative",
              "before:absolute before:[background-image:conic-gradient(from_0deg,var(--tw-gradient-stops))] before:to-blue-600 before:from-purple-700 before:opacity-30 before:rounded-xl before:blur-xl before:inset-0 before:-z-[1] hover:before:opacity-60 before:transition before:duration-700 before:ease-in-out before:will-change-[filter]"
            )}
          >
            Get in touch
          </button>
        </a>
      </div>
    </div>
  );
}

function Highlight({ children }: PropsWithChildren) {
  return (
    <span className="font-semibold text-white transition duration-300 ease-in-out border-b-2 cursor-pointer border-white/10 hover:border-white">
      {children}
    </span>
  );
}

function SocialLinks() {
  const links = [
    ["github", "https://github.com/gino/gino.dev"],
    ["linkedin", "https://linkedin.com/in/ginolouwsma"],
    ["instagram", "https://instagram.com/gino._1"],
  ];

  return (
    <Fragment>
      {links.map(([icon, url]) => (
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 ease-in-out opacity-50 hover:opacity-100"
        >
          <img src={`/social-icons/${icon}.svg`} className="w-5 h-5" />
        </a>
      ))}
    </Fragment>
  );
}
