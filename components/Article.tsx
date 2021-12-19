import React from "react";

const Article = ({ imgUrl, date, text, desc, href, github }) => (
  <div className="w-full h-full flex flex-col bg-footer hover:bg-primary ease-in-out duration-200 text-white hover:text-black">
    <div className="w-full h-full bg-background">
      <img className="w-full h-full" src={imgUrl} alt="blog_image" />
    </div>
    <div className="flex flex-col justify-between pt-4 px-6 h-full">
      <div>
        <p className="text-xs font-bold leading-9">{date}</p>
        <h3 className="text-lg leading-6 sm:text-2xl font-extrabold sm:leading-7 mb-4 cursor-pointer">
          {text}
        </h3>
        <p className="text-xs mb-10">{desc}</p>
      </div>
      <div className="flex justify-between mb-4 mx-2">
        <p className="text-xs font-bold leading-9">
          <a href={href} target="_blank">
            Live Preview
          </a>
        </p>
        <p className="text-xs font-bold leading-9">
          <a href={github} target="_blank">
            View Github
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Article;
