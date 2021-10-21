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
      link: "",
      icon: <FaFileAlt />
    },
    {
      alt: "Email",
      link: "",
      icon: <FaEnvelope />
    },
  ]
  const navigation = [
    {name: "Course", link: "/course"},
    {name: "Blog", link: "/blog"},
    {name: "About", link: "/about"},
    {name: "Contact", link: "/contact"},
  ]


  return (
    <>
      <Head>
        <title>Jon Michael Gelua Portfolio</title>
        <meta name="description" content="Jon-Michael Gelua Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      {/* Nav */}
      <nav className="flex justify-between h-20 z-10 sticky top-0">
        <Link href="/">
          <a className="flex items-center pl-4">Jon Michael Gelua</a>
        </Link>
        <div className="flex items-center pr-4">
          {navigation.map((item, index) => (
            <Link href={item.link} key={index}>
              <a className="pr-2 transition duration-200 ease-in-out hover:text-blue-800">{item.name}</a>
            </Link>
          ))}
        </div>
      </nav>
      
      {/* Hero */}
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="bg-gray-200">
          <h1 className=" text-7xl font-extrabold">Hi,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 text-8xl">
            I'm Jon.
          </span></h1>
          <h2 className="text-5xl">I'm a full stack developer.</h2>
        </div>
        <div className="flex gap-4 justify-between mt-4">
          {social.map((item, index) => (
            <Link key={index} href={item.link}>
              <a target="_blank" className="p-1.5 text-5xl text-blue-500 border-2 transition duration-200 ease-in-out hover:text-blue-800">
                {item.icon}
              </a>
            </Link>
          ))}
        </div>
      </div>



    </>
  )
}

export default Home;