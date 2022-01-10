import React from "react";

const SideEmail = () => {
  return (
    <div className="fixed bottom-0 right-0 -mr-10 z-10">
      <div className="hidden md:flex flex-col justify-center items-center gap-20">
        <div className="transition ease-in-out duration-100 rotate-90 transform hover:-translate-y-1">
          <a
            href={"mailto:geluajm@gmail.com"}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <span className="text-slate-500 hover:text-teal-500 text-md font-mono tracking-widest cursor-pointer transform ease-in-out duration-100">
              jmgelua@gmail.com
            </span>
          </a>
        </div>
        <div className="bg-slate-500 w-1px h-40 mt-8"> </div>
      </div>
    </div>
  );
};

export default SideEmail;
