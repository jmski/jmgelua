import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import featureData from "../../pages/api/v3/featureData";
import styled from "styled-components";

export const StyledProject = styled.div`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  @media (max-width: 768px) {
  }
  &:not(:last-of-type) {
    margin-bottom: 100px;
    @media (max-width: 768px) {
      margin-bottom: 70px;
    }
    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }
  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;
      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;
      @media (max-width: 768px) {
        justify-content: flex-start;
      }
      li {
        margin: 0 0 5px 20px;
        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;
      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }
  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }
    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }
  .project-overline {
    margin: 10px 0;
    font-weight: 400;
  }
  .project-title {
    font-size: clamp(24px, 5vw, 28px);
    @media (min-width: 768px) {
      margin: 0 0 20px;
    }
    @media (max-width: 768px) {
      a {
        position: static;
        &:before {
          content: "";
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }
  .project-description {
    position: relative;
    z-index: 2;
    padding: 25px;
    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    }
    strong {
      font-weight: normal;
    }
  }
  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;
    li {
      margin: 0 20px 5px 0;
      white-space: nowrap;
    }
    @media (max-width: 768px) {
      margin: 10px 0;
      li {
        margin: 0 10px 5px 0;
      }
    }
  }
  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    a {
      padding: 10px;
    }
  }
  .project-image {
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;
    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }
    a {
      width: 100%;
      height: 100%;
      vertical-align: middle;
      &:hover,
      &:focus {
        background: transparent;
        outline: 0;
        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: all 0.25s;
        mix-blend-mode: screen;
      }
    }

    .img {
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);
      transition: all 0.25s;

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }
`;

const Feature = () => {
  return (
    <div id="feature" className="px-20 mx-auto w-full max-w-7xl h-screen">
      <div className="flex gap-4">
        <div className="flex justify-start items-center gap-4 text-xl sm:text-3xl w-full mb-8">
          <span className="text-teal-500 font-mono">2.</span>{" "}
          <span className="text-slate-300 font-bold whitespace-nowrap">
            Some Things I&apos;ve Built
          </span>
          <div className="bg-slate-700 w-full max-w-60 h-1px"> </div>
        </div>
      </div>
      {featureData.map((feature, index) => (
        <StyledProject key={index}>
          <div className="project-content">
            <div>
              <span className="font-mono text-teal-500 text-md project-overline">
                Featured Project
              </span>

              <h3 className="text-slate-300 font-bold hover:text-teal-500 ease-in-out duration-200 project-title">
                <a href={feature.preview} target={"_blank"} rel={"noreferrer"}>
                  {feature.title}
                </a>
              </h3>

              <div
                className="text-slate-300 bg-slate-700 md:rounded-md project-description"
                dangerouslySetInnerHTML={{ __html: feature.desc }}
              />

              <ul className="font-mono text-slate-300 md:text-slate-500 project-tech-list">
                {featureData[index].tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>

              <div className="text-slate-300 md:text-slate-500 project-links">
                <a
                  href={feature.github}
                  aria-label="Github Link"
                  className="ease-in-out duration-200 hover:-translate-y-0.5"
                >
                  <span className=" hover:text-teal-500 ease-in-out duration-200">
                    <FiGithub size={27} />
                  </span>
                </a>

                <a
                  href={feature.preview}
                  aria-label="External Link"
                  className="ease-in-out duration-200 hover:-translate-y-0.5"
                >
                  <span className=" hover:text-teal-500 ease-in-out duration-200">
                    <FiExternalLink size={27} />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-blue-300 before:filter-none hover:outline-0 hover:bg-transparent rounded-md project-image">
            <a>
              <img
                src={feature.src}
                className="md:rounded-md img"
                alt={feature.title}
              />
            </a>
          </div>
        </StyledProject>
      ))}
    </div>
  );
};

export default Feature;
