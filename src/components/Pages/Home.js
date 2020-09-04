import React, { useEffect, useState } from "react";
import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import Menu from "./Menu";
import Slider from "./Slider";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <AboutPage />
      <Slider />
      <Menu />
      <ContactUs />
    </div>
  );
};

export default Home;
