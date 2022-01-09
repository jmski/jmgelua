import React from "react";
import { FiExternalLink, FiFolder, FiGithub } from "react-icons/fi";

const Article = () => {
  return (
    <div className="bg-slate-800 p-4 transform ease-in-out duration-200 hover:-translate-y-1">
      <div className="flex flex-row justify-between items-center">
        <FiFolder size={40} color="#14b8a6" />
        <div className="flex gap-4 text-slate-500">
          <span className="ease-in-out duration-200 hover:text-teal-500">
            <FiGithub size={25} />
          </span>
          <span className="ease-in-out duration-200 hover:text-teal-500">
            <FiExternalLink size={25} />
          </span>
        </div>
      </div>
      <div className="mt-4">
        <span className="text-slate-300 text-left">Title</span>
        <p className="text-slate-300 flex flex-wrap">Description goes here</p>
        <ul className="text-slate-500 flex flex-wrap gap-4">
          <li>Tech</li>
          <li>Tech</li>
          <li>Tech</li>
        </ul>
      </div>
    </div>
  );
};

export default Article;
