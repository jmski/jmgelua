import React from "react";
import { projectData } from "../../pages/api/v2/projectData";
import Article from "./Article";

const Projects = () => {
  return (
    <div
      className="flex flex-col py-16 px-8 sm:p-16 md:py-16 md:px-24"
      id="projects"
    >
      <div className="w-full text-left mb-20">
        <h1 className="text-blue-200 text-4xl leading-10 sm:text-5xl sm:leading-12 md:text-6xl md:leading-18 font-extrabold">
          <span className="px-4 bg-gradient-to-r from-blue-500 to-teal-500 bg-growing-underline hover:text-white">
            my recent projects.
          </span>
        </h1>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((element, index) => (
          <Article
            key={index}
            imgUrl={element.img}
            date={element.dateStart}
            text={element.title}
            desc={element.desc}
            href={element.href}
            github={element.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
