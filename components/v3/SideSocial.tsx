import React from "react";
import { FiGithub, FiLinkedin, FiPaperclip } from "react-icons/fi";
import { SiLeetcode, SiInstagram } from "react-icons/si";

const SideSocial = () => {
  const socialMedia = [
    {
      href: "https://github.com/jmski",
      icon: <FiGithub />,
    },
    {
      href: "https://linkedin.com/in/jmgelua",
      icon: <FiLinkedin />,
    },
    {
      href: "https://leetcode.com/jmgelua",
      icon: <SiLeetcode />,
    },
    {
      href: "https://www.instagram.com/jmski.gg/",
      icon: <SiInstagram />,
    },
    {
      href: "/JonMichaelGeluaResume2022.pdf",
      icon: <FiPaperclip />,
    },
  ];

  return (
    <div className="fixed bottom-0 pl-10">
      <div className="hidden md:flex flex-col justify-center items-center gap-8">
        {socialMedia.map((element, index) => (
          <span
            key={index}
            className="text-slate-500 hover:text-teal-500 text-2xl transform ease-in-out duration-200 hover:-translate-y-0.5"
          >
            <a href={element.href} target={"_blank"} rel={"noreferrer"}>
              {element.icon}
            </a>
          </span>
        ))}
        <div className="bg-slate-500 w-1px h-24"> </div>
      </div>
    </div>
  );
};

export default SideSocial;
