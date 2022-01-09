import React from "react";
import Feature from "../components/v3/Feature";
import Footer from "../components/v3/Footer";
import Header from "../components/v3/Header";
import NavBar from "../components/v3/NavBar";
import Profile from "../components/v3/Profile";
import Projects from "../components/v3/Projects";
import SideEmail from "../components/v3/SideEmail";
import SideSocial from "../components/v3/SideSocial";

const Home = () => {
  return (
    <div id="root" className="gradient-bg">
      <NavBar />
      <SideSocial />
      <SideEmail />
      <Header />
      <Profile />
      <Feature />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
