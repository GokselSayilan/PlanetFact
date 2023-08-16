import React from "react";
import "./planetApp.css";
import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";
import MobileMenu from "../MobileMenu/MobileMenu";

import { usePlanet } from "../../Context/PlanetContext";

function PlanetApp() {
  const { isMobileMenu } = usePlanet();



  return (
    <div className="planetApp">
      <img src="assets/background-stars.svg" alt="" className="mainBg" />
      <Navbar />
      <Content />
      {isMobileMenu && <MobileMenu />}
    </div>
  );
}

export default PlanetApp;
