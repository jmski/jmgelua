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
        <div className="text-slate-300 flex flex-col gap-4 text-xs mobile:text-base xs:text-lg">
          <div className="h-64 bg-slate-500/25 rounded-md overflow-auto scrollbar p-6 flex flex-col gap-4">
            <p>
              Hello! My name is Jon and I enjoy making things come to{" "}
              <span className="text-teal-500 hover:text-pink-500 hover-underline-animation">
                life on the internet.
              </span>
            </p>
            <p>
              My coding journey started back in 2000 when I had the idea to
              build an online profile for myself in order to impress a girl—{" "}
              <span className="italic">
                Mind you this was before Facebook was a thing lol!{" "}
                <span className="text-teal-500 hover:text-pink-500 hover-underline-animation">
                  #boomer
                </span>
              </span>
            </p>
            <p>
              Turns out that this would take me down the path to learn a lot
              about HTML and CSS!
            </p>
            <p>
              Fast-forward to today, I&apos;m a{" "}
              <span className="text-teal-500 hover:text-pink-500 hover-underline-animation">
                stay-at-home dad
              </span>{" "}
              <span className="text-teal-500 hover:text-pink-500 hover-underline-animation">
                living the dream
              </span>{" "}
              as a freelance developer.
            </p>
            <p>
              My goal right now is to find opportunities where I can challenge
              myself to learn and develop new skills, as well as build
              accessible, inclusive products and digital experiences for my
              clients.
            </p>
          </div>
          <p className="px-6">
            I recently started working on a passion project called{" "}
            <span className="text-teal-500 hover:text-pink-500 hover-underline-animation">
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
          <span className="px-6">
            Here are a few technologies I&apos;ve been working with recently:
          </span>
          <ul className="grid grid-cols-2 gap-4 px-6">
            {techList.map((tech, index) => (
              <li key={index} className="flex items-center gap-4">
                <IoTriangleOutline color="#14b8a6" size="10" />
                <span className=" text-teal-500 hover:text-pink-500 ease-in-out duration-200 hover-underline-animation">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center lg:py-20 mt-20 lg:-mt-20">
          <video
            className="rounded-full mix-blend-screen grayscale hover:filter-none brightness-50 ease-in-out duration-200"
            loop
            autoPlay
            muted
          >
            <source
              src={"/videos/jmg-profile-butter-dance.mp4"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Profile;
