import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const NavBar = () => {
  const navigationData = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "What is JM6?",
      href: "#jm6",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Features",
      href: "#features",
    },
    {
      title: "Library",
      href: "#blog",
    },
  ];

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bg-gray-800 text-white p-8 sm:py-8 sm:px-24">
      <div className="flex justify-between items-center">
        <div className="flex-1 flex justify-start items-center whitespace-nowrap">
          <div className="mr-8">
            <span className="font-extrabold text-2xl">JM-6</span>
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
            Resume
          </p>
          <button
            className="bg-orange-600 py-2 px-4 rounded-lg text-lg font-medium leading-6 border-0 outline-0"
            type="button"
          >
            Hire Me
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
            <div className="bg-gray-900 flex justify-end items-end flex-col text-right p-8 absolute right-0 top-10 min-w-xxs mt-4 rounded-md shadow-sm scale-up-center">
              <div className="font-medium text-xl leading-6 mb-4">
                {navigationData.map((element, index) => (
                  <p key={index} className="pt-4">
                    <a href={element.href}>{element.title}</a>
                  </p>
                ))}
              </div>
              <div className="md:hidden">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
