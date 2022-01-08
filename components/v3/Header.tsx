import React from "react";
import { RiHandHeartLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="w-full h-screen">
      <div className="px-12 mt-0 sm:px-16 sm:mt-8 md:px-28 md:-mt-12 lg:-mt-20 lg:px-40 w-full h-screen flex justify-center md:items-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="text-teal-500 leading-6 text-lg font-mono">
              Hi there!
            </span>
            <RiHandHeartLine color="#14b8a6" size={26} />
          </div>

          <span className="text-slate-300 text-5xl sm:text-6xl md:text-7xl leading-14 sm:leading-16 tracking-tighter font-bold">
            My name is{" "}
            <span className="px-2 bg-gradient-to-r from-teal-500 to-blue-800 bg-growing-underline hover:text-white">
              Jon
            </span>
          </span>
          <span className="text-slate-400 text-5xl sm:text-6xl md:text-7xl leading-14 sm:leading-16 tracking-tighter font-bold">
            I build things for the internet
          </span>
          <div className="lg:w-1/2">
            <span className="text-white font-mono">
              I&apos;m a freelance web engineer specializing in building (and
              occasionally designing) awesome digital experiences. Currently,
              I&apos;m focused on building an idle role playing game called{" "}
              <span className="text-teal-500 hover-underline-animation">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
