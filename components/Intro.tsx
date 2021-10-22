import Link from 'next/link';
import { FaEnvelope, FaFileAlt, FaGithub, FaHackerrank, FaLinkedin } from 'react-icons/fa'

const Intro = () => {

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

  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <img src="/images/profile.png" className="mb-2 max-w-xs md:max-w-md"/>
      <h1 className=" text-4xl md:text-5xl lg:text-7xl font-extrabold">Hi,{' '}
      <span className=" text-5xl md:text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
        I'm Jon.
      </span></h1>
      <h2 className="text-3xl md:text-4xl lg:text-5xl">Front-end Developer</h2>
      <div className="flex gap-4 justify-between mt-4">
        {social.map((item, index) => (
          <Link key={index} href={item.link}>
            <a target="_blank" className="p-1.5 text-4xl md:text-5xl text-blue-500 transition duration-200 ease-in-out hover:text-blue-800">
              {item.icon}
            </a>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Intro;