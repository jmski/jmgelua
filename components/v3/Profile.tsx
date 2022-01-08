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
      className="px-12 mt-0 sm:px-16 sm:mt-8 md:px-28 w-full h-screen"
    >
      <div className="flex gap-4">
        <div className="flex justify-start items-center gap-4 text-3xl w-full mb-8">
          <span className="text-teal-500 font-mono">1.</span>{" "}
          <span className="text-slate-300 font-bold whitespace-nowrap">
            About Me
          </span>
          <div className="bg-slate-700 w-full max-w-60 h-1px"> </div>
        </div>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2">
        <div className="text-slate-500 flex flex-col gap-4">
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
            freelance developer. My main focus these days is find opportunities
            where I can build accessible, inclusive products and digital
            experiences
          </p>
          <p className="hover:text-slate-300 ease-in-out duration-200">
            I also recently started working on a passion project called
            Fatherhood Frenzy. To learn more about this click <a>here</a>
          </p>
          <span className="hover:text-slate-300 ease-in-out duration-200">
            Here are a few technologies I&apos;ve been working with recently:
          </span>
          <ul className="grid grid-cols-2 gap-4">
            {techList.map((tech, index) => (
              <li key={index} className="flex">
                <IoTriangleOutline color="#14b8a6" size="23" />
                <span className="pl-4 hover:text-slate-300 ease-in-out duration-200">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center border-2 border-teal-500 rounded-md mx-12">
          <h1>Image here</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
