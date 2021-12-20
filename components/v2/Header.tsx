import React, { useState } from "react";
import Image from "next/image";
import img1 from "../../public/images/svg/jm6-logo.svg";
import img2 from "../../public/images/svg/jm6-logo-v2.svg";

const Header = () => {
  const [toggleLogo, setToggleLogo] = useState(img1);

  const [squirtleHover, setSquirtleHover] = useState(false);
  const [squirtleText, setSquirtleText] = useState("squirtle, squirt");
  const [response, setResponse] = useState("");

  const onSubmit = (response) => {
    let squirtle = response;
    setSquirtleText(squirtle);
    setSquirtleHover(true);
    setResponse("");
  };

  return (
    <div
      className="lg:h-screen flex flex-col justify-evenly item-center lg:flex-row-reverse py-16 px-8 sm:p-16 md:py-16 md:px-24"
      id="home"
    >
      <div className="flex-1 flex flex-col justify-center items-start mb-12 lg:ml-20 max-w-3xl">
        <h1 className="font-extrabold text-5xl sm:text-6xl leading-14 sm:leading-16 tracking-tighter text-transparent text-blue-200">
          i build{" "}
          <span className="px-4 bg-gradient-to-r from-blue-500 to-teal-500 bg-growing-underline hover:text-white whitespace-nowrap">
            blue-tiful
          </span>{" "}
          websites
        </h1>
        <p className="text-base leading-6 sm:text-xl sm:leading-7 text-primary mt-4">
          <span className="px-1 bg-gradient-to-r from-blue-500 to-teal-500 bg-growing-underline hover:text-white">
            Jon-Michael Gelua,
          </span>{" "}
          is a self-taught web engineer with a knack for building things with
          his hands. He was born and raised in the{" "}
          <span className="px-1 bg-gradient-to-r from-blue-500 to-teal-500 bg-growing-underline hover:text-white">
            6ix.
          </span>{" "}
          A black belt in shotokan karate and kpop enthusiast. His favorite
          color is{" "}
          <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-growing-underline hover:text-white px-1">
            blue
          </span>
        </p>

        <div className="w-full flex flex-row justify-start items-center mt-8">
          <img
            onMouseEnter={() => setSquirtleHover(true)}
            onMouseLeave={() => setSquirtleHover(false)}
            className="-scale-x-1"
            src={"/images/squirtle.gif"}
          />
          <p
            className={`${
              squirtleHover ? "block" : "hidden"
            } m-0 sm:ml-4 font-medium text-xs leading-9 text-white text-center`}
          >
            {squirtleText}
          </p>
        </div>
        <div className="flex flex-row w-full mt-0 mb-4">
          <input
            className="flex-2 w-full text-xs sm:text-xl leading-6 sm:leading-7 bg-background lg:bg-footer text-white border-2 border-background lg:border-footer outline-0 py-2 px-2 sm:py-4 sm:px-4 rounded-tl-lg rounded-bl-lg"
            type="text"
            id="input"
            placeholder="Say something nice"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
          />
          <button
            className="flex-1 w-full text-base sm:text-xl leading-6 sm:leading-7 bg-blue-500 hover:bg-teal-500 text-white border-2 border-blue-500 hover:border-teal-500 ease-in-out duration-200 outline-0 px-4 rounded-tr-lg rounded-br-lg"
            type="submit"
            onClick={() => onSubmit(response)}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 max-w-auto items-center max-w-3xl">
        <Image
          onMouseEnter={() => setToggleLogo(img1)}
          onMouseLeave={() => setToggleLogo(img2)}
          src={toggleLogo}
        />
      </div>
    </div>
  );
};

export default Header;
