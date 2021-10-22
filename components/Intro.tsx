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
  )
}

export default Intro;