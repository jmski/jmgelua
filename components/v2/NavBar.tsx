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
  const buttonText = "Contact";
  const navText = "Resume";

  const [toggleMenu, setToggleMenu] = useState(false);

  const onClickHandler = (e) => {};

  return (
    <div className="text-white p-8 sm:py-8 sm:px-24">
      <div className="flex justify-between items-center">
        <div className="flex-1 flex justify-start items-center whitespace-nowrap">
          <div className="mr-8">
            <span className="font-extrabold tracking-tighter text-2xl gradient__text px-2 bg-gradient-to-r from-blue-500 to-cyan-500 bg-growing-underline text-primary hover:text-white">
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
            <a href="">{navText}</a>
          </p>
          <button
            className="bg-cyan-500 py-2 px-4 rounded-lg text-lg font-medium leading-6 border-0 outline-0"
            type="button"
            onClick={onClickHandler}
          >
            <a href="">{buttonText}</a>
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
            <div className="bg-gradient-to-br from-blue-900 to-gray-900 flex justify-end items-end flex-col text-right p-8 absolute right-0 top-10 min-w-1xs gap-4 rounded-md shadow-sm scale-up-center">
              <div className="font-medium text-xl leading-6">
                {navigationData.map((element, index) => (
                  <p key={index} className="pt-4">
                    <a href={element.href}>{element.title}</a>
                  </p>
                ))}
              </div>
              <div className="md:hidden flex flex-col gap-4 justify-end items-end text-right">
                <p className="font-medium text-xl leading-6 cursor-pointer">
                  <a href="">{navText}</a>
                </p>
                <button
                  className="bg-cyan-500 py-2 px-4 rounded-lg text-lg font-medium leading-6 border-0 outline-0"
                  type="button"
                  onClick={onClickHandler}
                >
                  <a href="">{buttonText}</a>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
