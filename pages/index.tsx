import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Home = () => {
  const socialMedia = [
    {
      href: "/ds",
      icon: <FaGithub />,
    },
    {
      href: "/ds",
      icon: <FaGithub />,
    },
    {
      href: "/ds",
      icon: <FaGithub />,
    },
    {
      href: "/ds",
      icon: <FaGithub />,
    },
  ];

  const navigationData = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "Projects",
      href: "#projects",
    },
  ];
  const buttonText = "Contact";

  const [toggleMenu, setToggleMenu] = useState(false);

  const onClickHandler = (e) => {};
  return (
    <>
      <div className="sticky top-0 bg-blue-900 text-white p-8 sm:py-8 sm:px-24 z-10">
        <div className="flex justify-between items-center">
          <div className="flex-1 flex justify-start items-center whitespace-nowrap">
            <div className="mr-8">
              <span className="font-extrabold tracking-tighter text-2xl gradient__text px-2 bg-gradient-to-r from-blue-500  to-teal-500 bg-growing-underline text-blue-200 hover:text-white">
                JM-6
              </span>
            </div>
            <div className="hidden lg:flex flex-row gap-8">
              {navigationData.map((item, index) => (
                <p className="leading-6 text-lg font-medium" key={index}>
                  <a href={item.href}>{item.title}</a>
                </p>
              ))}
            </div>
          </div>
          <div className="hidden md:flex justify-end items-center">
            <p className="font-medium text-lg leading-6 px-4 cursor-pointer">
              <a href={"/JonMichaelGeluaResume2022.pdf"} target="_blank">
                Resume
              </a>
            </p>
            <button
              className="bg-blue-500 hover:bg-teal-500 ease-in-out duration-200 py-2 px-4 rounded-lg text-lg font-medium leading-6 border-0 outline-0"
              type="button"
              onClick={onClickHandler}
            >
              <a href="mailto:geluajm@gmail.com">{buttonText}</a>
            </button>
          </div>
          {/** mobile menu */}
          <div className="lg:hidden ml-4 relative">
            {toggleMenu ? (
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="bg-gray-900 flex justify-end items-end flex-col text-right p-8 absolute right-0 top-10 min-w-1xs gap-4 rounded-md shadow-sm scale-up-center">
                <div className="font-medium text-xl leading-6">
                  {navigationData.map((element, index) => (
                    <p key={index} className="pt-4">
                      <a href={element.href}>{element.title}</a>
                    </p>
                  ))}
                </div>
                <div className="md:hidden flex flex-col gap-4 justify-end items-end text-right">
                  <p className="font-medium text-xl leading-6 cursor-pointer">
                    <a href={"/JonMichaelGeluaResume2022.pdf"} target="_blank">
                      Resume
                    </a>
                  </p>
                  <button
                    className="bg-blue-500 hover:bg-teal-500 ease-in-out duration-200 py-2 px-4 rounded-lg text-lg font-medium leading-6 border-0 outline-0"
                    type="button"
                    onClick={onClickHandler}
                  >
                    <a href="mailto:geluajm@gmail.com">{buttonText}</a>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full h-screen bg-blue-900">
        {/** Social Media */}
        <div className="fixed bottom-0 pl-12">
          <div className="flex flex-col justify-center items-center gap-8">
            {socialMedia &&
              socialMedia.map((element, index) => (
                <span
                  key={index}
                  className="text-white transform ease-in-out duration-200 hover:-translate-y-0.5 hover:text-green-400"
                >
                  <a href={element.href}>{element.icon}</a>
                </span>
              ))}
            <div className="bg-white w-1px h-24"> </div>
          </div>
        </div>

        {/** Email */}
        <div className="fixed bottom-0 right-0 -mr-6">
          <div className="flex flex-col justify-center items-center gap-20">
            <div className="transition ease-in-out duration-200 rotate-90 transform hover:-translate-y-0.5">
              <span className="cursor-pointer transform ease-in-out duration-200 hover:text-green-400 text-white">
                jmgelua@gmail.com
              </span>
            </div>
            <div className="bg-white w-1px h-40 mt-8"> </div>
          </div>
        </div>

        <div className="-mt-12 w-full h-screen flex justify-center items-center px-40">
          <div className="flex flex-col">
            <span className="text-green-400">Hi, my name is</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-green-500 text-6xl font-extrabold">
              JM GELUA.
            </span>
            <span className="text-gray-400 text-6xl font-extrabold">
              I build things for the internets.
            </span>
            <div className="w-2/3">
              <span className="text-white">
                I&apos;m a freelance web engineer specializing in building (and
                occasionally designing) awesome digital experiences. Currently,
                I&apos;m focused on building an idle rpg for{" "}
                <span className="text-green-400">
                  <a>Fatherhood Frenzy</a>
                </span>
              </span>
            </div>
          </div>
        </div>
        {/** Hero End */}
      </div>
      <div className="w-full h-screen bg-green-900">Hello</div>
    </>
  );
};

export default Home;
