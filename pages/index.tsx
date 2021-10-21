import Head from 'next/head';
import Link from 'next/link';

const Home = () => {

  const social = [
    {
      alt: "LinkedIn",
      href: "https://linkedin.com/in/jmgelua",
      icon: "linkedin"
    },
    {
      alt: "GitHub",
      href: "https://github.com/jmski",
      icon: "github"
    },
    {
      alt: "Hackerrank",
      href: "https://hackerrank.com/geluajm",
      icon: "hackerrank"
    },
    {
      alt: "Resume",
      href: "",
      icon: "resume"
    },
  ]

  const navigation = [
    {name: "Course", href: "/course"},
    {name: "Blog", href: "/blog"},
    {name: "About", href: "/about"},
    {name: "Contact", href: "/contact"},
  ]


  return (
    <>
      <Head>
        <title>Jon Michael Gelua Portfolio</title>
        <meta name="description" content="Jon-Michael Gelua Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Nav */}
      <nav className="flex justify-between h-20 bg-green-400 z-10 sticky top-0">
        <Link href="/">
          <a className="flex items-center pl-4">Jon Michael Gelua</a>
        </Link>
        <div className="flex items-center pr-4">
          {navigation.map((item, index) => (
            <Link href={item.href} key={index}>
              <a className="pr-2">{item.name}</a>
            </Link>
          ))}
        </div>
      </nav>
      
      {/* Hero */}
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="bg-gray-200">
          <h1 className=" text-6xl">Hi, <span className="text-red-500 text-5xl">I'm Jon.</span></h1>
          <h2 className="text-3xl">I'm a full stack developer.</h2>
        </div>
        <div className="flex gap-4 justify-between mt-4">
          {social.map((item, index) => (
            <Link key={index} href={item.href}>
              <a 
                alt={item.alt}
                target="_blank"
                >{item.icon}</a>
            </Link>
          ))}
          
        </div>
      </div>

      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-200">
          <h1 className=" text-6xl">Hi, <span className="text-red-500 text-5xl">I'm Jon.</span></h1>
          <h2 className="text-3xl">I'm a full stack developer.</h2>
        </div>
      </div>


    </>
  )
}

export default Home;