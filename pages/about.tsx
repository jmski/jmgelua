import Link from 'next/link';

const About = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        <h1 className="font-bold">First Post</h1>
        <h2>
          <Link href="/">
            <a className=" italic">Back to home</a>
          </Link>
        </h2>
      </div>
  </div>
  )
}

export default About;