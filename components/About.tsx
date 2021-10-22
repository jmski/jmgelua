

const About = () => {
  return (
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
  )
}

export default About;