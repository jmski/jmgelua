import React, { useState } from "react";

const Header = () => {
  const [userEmail, setUserEmail] = useState("");

  return (
    <div
      className="flex flex-col lg:flex-row py-16 px-8 sm:p-16 md:py-16 md:px-24"
      id="home"
    >
      <div className="flex-1 flex flex-col justify-center items-start mb-12">
        <h1 className="font-extrabold text-5xl sm:text-6xl leading-14 sm:leading-16 tracking-tighter text-transparent text-blue-200">
          i build{" "}
          <span className="px-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-growing-underline hover:text-white">
            blue-tiful
          </span>{" "}
          websites
        </h1>
        <p className="text-base leading-6 sm:text-xl sm:leading-7 text-primary">
          A self-taught web engineer with a knack for building things with his
          hands. Born and raised in the{" "}
          <span className="px-1 bg-gradient-to-r from-blue-500 to-cyan-500 bg-growing-underline hover:text-white">
            6ix.
          </span>{" "}
          A stay-at-home dad who loves to play Roblox with his kids. His
          favorite color is{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-growing-underline hover:text-white px-1">
            blue
          </span>
        </p>

        <div className="flex flex-row w-full mt-8 mb-4">
          <input
            className="flex-2 w-full text-xs sm:text-xl leading-6 sm:leading-7 bg-background text-white border-2 border-background outline-0 py-2 px-2 sm:py-4 sm:px-4 rounded-tl-lg rounded-bl-lg"
            type="email"
            placeholder="Your Email Address"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <button
            className="flex-1 w-full text-base sm:text-xl leading-6 sm:leading-7 bg-cyan-500 text-white border-2 border-cyan-500 outline-0 px-4 rounded-tr-lg rounded-br-lg"
            type="button"
          >
            Get Started
          </button>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-start items-center mt-8">
          <img className="w-44 h-9" src={"/images/people.png"} />
          <p className="m-0 sm:ml-4 font-medium text-xs leading-9 text-white text-center">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={"/images/ai.png"} />
      </div>
    </div>
  );
};

export default Header;
