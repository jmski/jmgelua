import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Intro from '../components/Intro';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';

const Home = () => {


  return (
    <>
      <Head>
        <title>JM Gelua Portfolio</title>
        <meta name="description" content="Jon-Michael Gelua Portfolio" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <NavBar/>
      <Intro/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default Home;