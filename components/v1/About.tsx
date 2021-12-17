

const About = () => {
  return (
    <section className="h-full">
      <div id="about" className="bg-gradient-to-r from-indigo-300 to-blue-300 transform -skew-y-6 h-96">
        <div className="flex flex-col justify-center items-center transform skew-y-6 pt-10">
          <h3 className="text-3xl font-bold">BTS</h3>
          <span className="text-1">"The 8th Member"</span>
          <div className="flex items-center mt-10">
            <img className="w-32 max-w-xs" src="/images/profile_t.svg"></img>
            <ul className="ml-10 list-disc flex flex-col gap-2">
            <li>Self Taught Developer</li>
            <li>Dancer and Martial Artist</li>
            <li>Over 6K+ hours of Minecraft Experience</li>
            <li>Aspiring Children's Author</li>
            <li>Lives in Toronto, Canada</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;