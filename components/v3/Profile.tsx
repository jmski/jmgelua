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
          <p className="hover:text-slate-300 ease-in-out duration-200">
            Hello! My name is Jon and I enjoy making things come to life on the
            internet. My coding journey started back in 2000 when I decided to
            create an online profile for myself in hopes to connect with hot
            babes —{" "}
            <span className="italic">
              Before Facebook was a thing! Don&apos;t judge me!
            </span>{" "}
          </p>
          <p className="hover:text-slate-300 ease-in-out duration-200">
            Turns out that trying to score some points with the ladies would
            allow me to learn a lot about HTML and CSS!
          </p>
          <p className="hover:text-slate-300 ease-in-out duration-200">
            Fast-forward to today, I&apos;ve worked with start-ups as a
            freelance developer. My main focus these days are to find
            opportunities where I can build accessible, inclusive products and
            digital experiences for my clients.
          </p>
          <p className="hover:text-slate-300 ease-in-out duration-200">
            I also recently started working on a passion project called{" "}
            <span className="text-teal-500 hover-underline-animation scale-up-center">
              <a
                href="https://fatherhoodfrenzy.com"
                target={"_blank"}
                rel={"noreferrer"}
              >
                Fatherhood Frenzy
              </a>
            </span>
          </p>
          <span className="hover:text-slate-300 ease-in-out duration-200">
            Here are a few technologies I&apos;ve been working with recently:
          </span>
          <ul className="grid grid-cols-2 gap-4">
            {techList.map((tech, index) => (
              <li key={index} className="flex items-center">
                <IoTriangleOutline color="#14b8a6" size="10" />
                <span className="pl-4 hover:text-slate-300 ease-in-out duration-200">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center border-2 border-teal-500 rounded-md mx-12 my-12 lg:mt-0">
          <h1>Image here</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
