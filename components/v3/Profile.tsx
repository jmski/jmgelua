import React from "react";
import { IoTriangleOutline } from "react-icons/io5";

const Profile = () => {
  const techList = [
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Redux",
  ];
  return (
    <div
      id="about"
      className="px-4 mobile:px-12 my-20 sm:px-20 sm:my-32 md:px-28 md:-mt-12 lg:-mt-20 lg:px-40 w-full"
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-start items-center gap-4 text-sm mobile:text-xl xs:text-2xl sm:text-3xl w-full mb-8">
          <span className="text-slate-300 text-xl mobile:text-3xl font-bold">
            <span className="text-teal-500 font-mono">1.</span> About Me
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="text-slate-500 flex flex-col gap-4 text-xs mobile:text-base xs:text-lg">
          <div className="h-64 overflow-auto scrollbar pr-12 flex flex-col gap-4">
            <p className="hover:text-slate-300 ease-in-out duration-200">
              Hello! My name is Jon and I enjoy making things come to{" "}
              <span className="text-teal-500 hover:text-slate-300 hover-underline-animation">
                life on the internet.
              </span>
            </p>
            <p className="hover:text-slate-300 ease-in-out duration-200">
              My coding journey started back in 2000 when I had the idea to
              build an online profile for myself in order to impress a girl—{" "}
              <span className="italic">
                Mind you this was before Facebook was a thing lol!{" "}
                <span className="text-teal-500 hover:text-slate-300 hover-underline-animation">
                  #boomer
                </span>
              </span>
            </p>
            <p className="hover:text-slate-300 ease-in-out duration-200">
              Turns out that this would take me down the path to learn a lot
              about HTML and CSS!
            </p>
            <p className="hover:text-slate-300 ease-in-out duration-200">
              Fast-forward to today, I&apos;m a{" "}
              <span className="text-teal-500 hover:text-slate-300 hover-underline-animation">
                stay-at-home dad
              </span>{" "}
              <span className="text-teal-500 hover:text-slate-300 hover-underline-animation">
                living the dream
              </span>{" "}
              as a freelance developer.
            </p>
            <p className="hover:text-slate-300 ease-in-out duration-200">
              My goal right now is to find opportunities where I can challenge
              myself to learn and develop new skills, as well as build
              accessible, inclusive products and digital experiences for my
              clients.
            </p>
          </div>
          <p className="text-slate-300 ease-in-out duration-200">
            I recently started working on a passion project called{" "}
            <span className="text-teal-500 hover:text-slate-300 hover-underline-animation">
              <a
                href="https://fatherhoodfrenzy.com"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Fatherhood Frenzy
              </a>
            </span>{" "}
            come check it out!
          </p>
          <span className="text-slate-300 ease-in-out duration-200">
            Here are a few technologies I&apos;ve been working with recently:
          </span>
          <ul className="grid grid-cols-2 gap-4">
            {techList.map((tech, index) => (
              <li key={index} className="flex items-center gap-4">
                <IoTriangleOutline color="#14b8a6" size="10" />
                <span className=" text-teal-500 hover:text-slate-300 ease-in-out duration-200 hover-underline-animation">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center mx-12 my-12 lg:mt-0">
          <img src={"/images/profile.png"} alt={"Profile Picture"} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
