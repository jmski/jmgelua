import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const NavBar = () => {
  const navLinks = [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Feature",
      href: "#feature",
    },
    {
      title: "Work",
      href: "#work",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-slate-900 sticky top-0 text-slate-300 px-12 py-4 z-50">
      <div className="flex justify-between items-center">
        <div className="w-20">
          <Link href="/">
            <a>
              <img src={"/images/svg/logo.svg"} />
            </a>
          </Link>
        </div>
        <div className="hidden md:flex font-mono">
          <ol className="flex justify-between items-center gap-12 list-decimal text-teal-500">
            {navLinks.map((element, index) => (
              <li key={index}>
                <a href={element.href}>
                  <span className="text-slate-300 hover:text-pink-500 ease-in-out duration-200 hover-underline-animation">
                    {element.title}
                  </span>
                </a>
              </li>
            ))}
          </ol>
          <a
            href={"/JonMichaelGeluaResume2022.pdf"}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <button
              className="text-teal-500 font-medium hover:text-pink-500 ease-in-out duration-200 py-2 px-4 ml-12 rounded-md leading-6 border-2 border-teal-500 hover:border-pink-500 outline-0"
              type="button"
            >
              Resume
            </button>
          </a>
        </div>
        {/** Mobile Menu */}
        <div className="md:hidden ml-4 relative ">
          {menuOpen ? (
            <RiCloseLine
              className="scale-up-center"
              color="#14b8a6"
              size={30}
              onClick={toggleMenu}
            />
          ) : (
            <RiMenu3Line
              className="scale-up-center"
              color="#14b8a6"
              size={30}
              onClick={toggleMenu}
            />
          )}
          {menuOpen && (
            <div className="bg-slate-900 text-right p-8 absolute right-0 top-10 min-w-2xs gap-4 rounded-md shadow-sm scale-up-center">
              <ol className="flex flex-col items-end gap-12 list-decimal text-teal-500 mb-12">
                {navLinks.map((element, index) => (
                  <li key={index}>
                    <a href={element.href}>
                      <span className="text-slate-300 hover:text-pink-500 ease-in-out duration-200">
                        {element.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
              <a
                href={"/JonMichaelGeluaResume2022.pdf"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                <button
                  className="font-medium text-teal-500 hover:text-pink-500 ease-in-out duration-200 py-2 px-4 ml-12 rounded-md leading-6 border-2 border-teal-500 hover:border-pink-500 outline-0"
                  type="button"
                >
                  Resume
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
