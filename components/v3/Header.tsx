import React from "react";
import { RiHandHeartLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="px-4 mobile:px-12 my-20 sm:px-20 sm:my-32 md:px-28 md:-mt-12 lg:-mt-20 lg:px-40">
      <div className="w-full h-screen flex justify-center md:items-center">
        <div className="flex flex-col gap-6 z-10">
          <div className="text-teal-500 hover:text-pink-500 ease-in-out duration-200 flex items-center gap-4">
            <span className="text-xs xs:text-lg font-mono">Hi there!</span>
            <RiHandHeartLine size={26} />
          </div>

          <span className="text-slate-300 text-2xl mobile:text-4xl xs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl xs:leading-14 sm:leading-16 tracking-tighter font-bold">
            My name is{" "}
            <span className="px-2 bg-gradient-to-r from-teal-500 to-pink-500 bg-growing-underline hover:text-white">
              Jon
            </span>
          </span>
          <span className="text-slate-400 text-2xl mobile:text-4xl xs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl xs:leading-14 sm:leading-16 tracking-tighter font-bold">
            I build things on the internet
          </span>
          <div className="lg:w-1/2">
            <span className="text-slate-500 hover:text-slate-300 ease-in-out duration-200 font-mono text-xs mobile:text-base xs:text-lg">
              I&apos;m a freelance web engineer specializing in building (and
              occasionally designing) awesome digital experiences. Currently,
              I&apos;m focused on building an idle role playing game called{" "}
              <span className="text-teal-500 hover:text-pink-500 hover-underline-animation">
                <a
                  href={"https://fatherhoodfrenzy.com"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  Fatherhood Frenzy
                </a>
              </span>
            </span>
          </div>
          <div>
            <a
              href={"https://fatherhoodfrenzy.com"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <button
                className="text-teal-500 font-medium hover:text-pink-500 ease-in-out duration-200 py-2 px-4 rounded-md leading-6 border-2 border-teal-500 hover:border-pink-500 outline-0"
                type="button"
              >
                Check It Out
              </button>
            </a>
          </div>
        </div>
        <div className="absolute hidden md:flex flex-row justify-end w-full h-screen px-32 py-20 opacity-5 z-0">
          <img className="object-cover" src={"/images/squirtle.gif"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
