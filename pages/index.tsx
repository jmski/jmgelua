import Head from "next/head";
import About from "../components/v1/About";
import Contact from "../components/v1/Contact";
import Intro from "../components/v1/Intro";
import NavBar from "../components/v1/NavBar";
import Projects from "../components/v1/Projects";

const Home = () => {
  return (
    <>
      <Head>
        <title>JM Gelua Portfolio</title>
        <meta name="description" content="Jon-Michael Gelua Portfolio" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <NavBar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
