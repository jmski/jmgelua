import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineGlobe } from "react-icons/hi";

const Footer = () => (
  <div className="flex flex-col justify-center items-center bg-footer py-16 px-8 sm:p-16 md:py-16 md:px-24">
    <div className="w-full text-center mb-12">
      <h1 className="text-blue-200 text-4xl leading-10 sm:text-5xl sm:leading-12 md:text-6xl md:leading-18 font-extrabold">
        Do you have a project in mind?
        <br />
        <span className="px-4 bg-gradient-to-r from-blue-500 to-teal-500 bg-growing-underline hover:text-white cursor-pointer whitespace-nowrap">
          <a>Let's work together</a>
        </span>
      </h1>
    </div>

    <div className="text-white hover:text-teal-500 flex justify-center items-center p-4 border border-white hover:border-teal-500 ease-in-out duration-200 text-center mb-10 cursor-pointer">
      <p className=" text-sm sm:text-lg leading-5">
        <a href="mailto:geluajm@gmail.com">Connect with me</a>
      </p>
    </div>

    <div className="text-white flex justify-between items-start flex-row flex-wrap w-full text-left">
      <div className="mt-4 mx-0 sm:m-4 w-64">
        <span className="cursor-pointer font-extrabold tracking-tighter text-2xl gradient__text px-2 bg-gradient-to-r from-blue-500 to-teal-500 bg-growing-underline text-blue-200 hover:text-white">
          JM-6
        </span>
        <p>
          Web Engineer <br /> All Rights Reserved
        </p>
      </div>
      <div className="flex flex-start flex-col my-4 sm:m-4">
        <h4 className="text-sm leading-4 mb-4 font-bold text-primary">Links</h4>
        <p className="text-xs my-2 mx-0 cursor-pointer">
          <a href="#home">Home</a>
        </p>
        <p className="text-xs my-2 mx-0 cursor-pointer">
          <a href="#projects">Projects</a>
        </p>
        <p className="text-xs my-2 mx-0 cursor-pointer">
          <a href="mailto:geluajm@gmail.com">Contact</a>
        </p>
      </div>
      <div className="flex flex-start flex-col my-4 sm:m-4">
        <h4 className="text-sm leading-4 mb-4 font-bold text-primary">
          Social
        </h4>
        <p className="text-xs my-2 mx-0 cursor-pointer">
          <a href="https://linkedin.com/in/jmgelua" target="_blank">
            LinkedIn
          </a>
        </p>
        <p className="text-xs my-2 mx-0 cursor-pointer">
          <a href="https://leetcode.com/jmgelua" target="_blank">
            Leetcode
          </a>
        </p>
        <p className="text-xs my-2 mx-0 cursor-pointer">
          <a href="https://github.com/jmski" target="_blank">
            Github
          </a>
        </p>
        <p className="text-xs my-2 mx-0 cursor-pointer">
          <a href="/JonMichaelGeluaResume2022.pdf" target="_blank">
            Resume
          </a>
        </p>
      </div>
      <div className="flex flex-start flex-col my-4 sm:m-4">
        <h4 className="text-sm leading-4 mb-4 font-bold text-primary">
          Jon-Michael Gelua
        </h4>
        <p className="text-xs my-2 mx-0">
          Toronto, Ontario, Canada <HiOutlineGlobe className="inline-block" />
        </p>
        <p className="text-xs my-2 mx-0">
          <a href="tel:647-834-1667">
            Call me on my <AiOutlinePhone className="inline-block" />
          </a>
        </p>
        <p className="text-xs my-2 mx-0">
          <a href="mailto:geluajm@gmail.com">
            geluajm@gmail.com <AiOutlineMail className="inline-block" />
          </a>
        </p>
      </div>
    </div>

    <div className="mt-8 text-center w-full my-4 sm:m-4">
      <p className="text-xs text-white">@2021 JMG. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
