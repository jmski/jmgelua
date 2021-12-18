import About from "../components/v1/About";
import Contact from "../components/v1/Contact";
import Intro from "../components/v1/Intro";
import NavBar from "../components/v1/NavBar";
import Projects from "../components/v1/Projects";

const Home = () => {
  return (
    <>
      <NavBar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
