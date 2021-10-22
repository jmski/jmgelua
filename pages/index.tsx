import Head from 'next/head';
import Link from 'next/link';
import { FaEnvelope, FaFileAlt, FaGithub, FaHackerrank, FaLinkedin } from 'react-icons/fa'


const Home = () => {

  const social = [
    {
      alt: "LinkedIn",
      link: "https://linkedin.com/in/jmgelua",
      icon: < FaLinkedin />
    },
    {
      alt: "GitHub",
      link: "https://github.com/jmski",
      icon: < FaGithub />
    },
    {
      alt: "Hackerrank",
      link: "https://hackerrank.com/geluajm",
      icon: < FaHackerrank />
    },
    {
      alt: "Resume",
      link: "/JonMichaelGeluaResume2021.pdf",
      icon: <FaFileAlt />
    },
    {
      alt: "Email",
      link: "mailto:geluajm@gmail.com",
      icon: <FaEnvelope />
    },
  ]

  const navigation = [
    {name: "ABOUT", link: "#about"},
    {name: "PROJECTS", link: "#projects"},
    {name: "CONTACT", link: "#contact"},
  ]


  return (
    <>
      <Head>
        <title>JM Gelua Portfolio</title>
        <meta name="description" content="Jon-Michael Gelua Portfolio" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <body className="overflow-hidden">

        {/* Nav */}
        <nav className="flex justify-between h-20 z-10 sticky top-0 px-6">
          <Link href="/">
            <a className="flex items-center bg-growing-underline hover:bg-growing-underline hover:text-blue-500">JM GELUA</a>
          </Link>
          <div className="flex gap-6 items-center">
            {navigation.map((item, index) => (
              <Link href={item.link} key={index}>
                <a className="transition duration-200 ease-in-out border-b-2 border-transparent hover:border-blue-500 hover:text-blue-800">{item.name}</a>
              </Link>
            ))}
          </div>
        </nav>
        
        {/* Hero */}
        <section className="flex flex-col justify-center items-center h-screen">
          <h1 className=" text-7xl font-extrabold">Hi,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 text-8xl">
            I'm Jon.
          </span></h1>
          <h2 className="text-5xl">I'm a full stack developer.</h2>
          <div className="flex gap-4 justify-between mt-4">
            {social.map((item, index) => (
              <Link key={index} href={item.link}>
                <a target="_blank" className="p-1.5 text-5xl text-blue-500 transition duration-200 ease-in-out hover:text-blue-800">
                  {item.icon}
                </a>
              </Link>
            ))}
          </div>
        </section>
        

        {/* About me */}
        <section className="h-full">
          <div id="about" className="bg-gradient-to-r from-indigo-300 to-blue-300 transform -skew-y-6 h-96">
            <div className="flex flex-col justify-center items-center transform skew-y-6">
              <h3 className="text-3xl font-bold mt-20">ABOUT ME</h3>
              <span className="text-1">JON-MICHAEL GELUA</span>
              <div className="flex items-center">
                <img className="w-36 max-w-xs mt-5" src="/images/profile_t.svg"></img>
                <ul className="m-5">
                <li> + Founder of Fatherhood Frenzy</li>
                <li> + Self Taught Developer</li>
                <li> + Professional League of Legends Player</li>
                <li> + Lives in Toronto, Canada</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* Projects */}
        <section id="projects" className="h-full mb-44">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-3xl font-bold mt-20">RECENT PROJECTS</h3>
            <span className="text-1 mb-10">Last 12 Months</span>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                    src="https://picsum.photos/id/188/720/400" alt="blog"/>
                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-indigo-300 mb-1">May 1, 2021</h2>
                  <h1 className="text-2xl font-semibold mb-3">StartupFuel Landing Page</h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                    fuga! Dolores quisquam eius cum accusamus?
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0 mr-2">Read More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                          fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span
                      className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                          stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                          stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path
                          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                        </path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                    src="https://picsum.photos/id/188/720/400" alt="blog"/>
                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-indigo-300 mb-1">Sept 1, 2021</h2>
                  <h1 className="text-2xl font-semibold mb-3">Fatherhood Frenzy</h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                    fuga! Dolores quisquam eius cum accusamus?
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0 mr-2">Read More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                          fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span
                      className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                          stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                          stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path
                          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                        </path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                    src="https://picsum.photos/id/188/720/400" alt="blog"/>
                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                  <h2 className="text-base font-medium text-indigo-300 mb-1">October 18, 2021</h2>
                  <h1 className="text-2xl font-semibold mb-3">Math Champ Components</h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                    fuga! Dolores quisquam eius cum accusamus?
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0 mr-2">Read More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                          fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span
                      className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                          stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                          stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path
                          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                        </path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="h-full">
          <div id="contact" className="bg-gradient-to-r from-indigo-300 to-blue-300 transform skew-y-6 h-96">
            <div className="flex flex-col justify-center items-center transform -skew-y-6">
              <span className="text-1 mt-20">Have a project in mind?</span>
              <h3 className="text-3xl font-bold">Let's work together</h3>
              <div className="mt-10">
                <Link href="mailto:geluajm@gmail.com">
                  <a>geluajm@gmail.com</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </body>
    </>
  )
}

export default Home;