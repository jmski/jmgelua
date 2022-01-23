import React from "react";
import {
  Feature,
  Footer,
  Header,
  NavBar,
  Profile,
  Projects,
  SideEmail,
  SideSocial,
} from "../components/v3";

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
