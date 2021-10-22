import Link from 'next/link';

const Projects = () => {

  const projectData = [
    {
      title: "StartupFuel",
      dateStart: "May 1, 2021",
      desc: "Created a professional landing page with responsive design and animations.",
      img: "/images/pitchbox.png",
      views: "1.2K",
      comments: "6",
      link: "http://startupfuel-pitchbox.netlify.app",
    },
    {
      title: "Fatherhood Frenzy",
      dateStart: "Sept 1, 2021",
      desc: "Passion project to build a community for parents looking to make income online.",
      img: "/images/fatherhoodfrenzy.png",
      views: "1.2K",
      comments: "6",
      link: "http://fatherhood-frenzy.netlify.app",
    },
  ]

  return (
    <section id="projects" className="h-full mb-44">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-3xl font-bold mt-20">RECENT PROJECTS</h3>
        <span className="text-1 mb-10">Last 12 Months</span>
      </div>

      <div className="flex flex-wrap -m-4">
        {projectData.map((project, index) => (
          <div key={index} className="p-4 sm:w-1/2 lg:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                  src={project.img} alt={project.title}/>
              <div className="p-6 hover:bg-indigo-900 hover:text-white transition duration-300 ease-in">
                <h2 className="text-base font-medium text-indigo-400 mb-1">{project.dateStart}</h2>
                <h1 className="text-2xl font-semibold mb-3">{project.title}</h1>
                <p className="leading-relaxed mb-3">{project.desc}</p>
                <div className="flex items-center flex-wrap ">
                  <a href={project.link} target="_blank" className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0 mr-2">Preview
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                        fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  {/*
                  <span
                    className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none"
                        strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>{project.views}
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none"
                        strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                      </path>
                    </svg>{project.comments}
                  </span>
                  */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;