import React from "react";
import Footer from "../components/v3/Footer";
import Header from "../components/v3/Header";
import NavBar from "../components/v3/NavBar";
import Profile from "../components/v3/Profile";
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
      <Footer />
    </div>
  );
};

export default Home;
