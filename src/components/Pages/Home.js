import React, { useEffect, useState } from "react";
import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import Menu from "./menu/Menu";
import Slider from "./Slider";
import ContactUs from "./ContactUs";
import FollowUs from "./FollowUs";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <AboutPage />
      <Slider />
      <Menu />
      <ContactUs />
      <FollowUs />
    </div>
  );
};

export default Home;
