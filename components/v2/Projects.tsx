import React from "react";
import { mainStoryData, projectData } from "../../pages/api/v2/projectData";
import Article from "../Article";

const Projects = () => {
  return (
    <div
      className="flex flex-col py-16 px-8 sm:p-16 md:py-16 md:px-24"
      id="projects"
    >
      <div className="w-full text-left mb-20">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 text-4xl leading-10 sm:text-5xl sm:leading-12 md:text-6xl md:leading-18 font-extrabold">
          My recent projects.
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col-reverse">
        <div className="flex-1 lg:w-1/2 w-full my-8 lg:mr-8 lg:my-0">
          <Article
            imgUrl={mainStoryData.img}
            date={mainStoryData.dateStart}
            text={mainStoryData.title}
            desc={mainStoryData.desc}
            href={mainStoryData.href}
            github={mainStoryData.github}
          />
        </div>
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
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
    </div>
  );
};

export default Projects;
