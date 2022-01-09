import React from "react";
import Article from "../v3/Article";

const Projects = () => {
  return (
    <div
      id="work"
      className="w-full h-screen px-20 flex flex-col justify-center items-center"
    >
      <span className="text-slate-300 text-3xl font-bold">
        Other Noteworthy Projects
      </span>
      <span className="text-teal-500 font-mono">in the past year</span>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
};

export default Projects;
