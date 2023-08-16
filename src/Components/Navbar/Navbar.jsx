import React from "react";
import "./navbar.css";
import { usePlanet } from "../../Context/PlanetContext";

function Navbar() {
  // useContext
  const { setSelectedPlanet, createId, setIsMobileMenu,planetArr ,isMobileMenu} = usePlanet();

  // all planet names


  // setting the chosen planet name
  const handleSelectedPlanet = (e) => {
    let selectedPlanet = e.target.textContent;
    setSelectedPlanet(selectedPlanet);
  };

  // create unique key array
  const planetKeys = planetArr.map(() => createId());


  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <h2 className="navbarLeftLogo">THE PLANETS</h2>
        </div>
        <div className="navbarRight">
          <img
            src="assets/icon-hamburger.svg"
            alt="mobileMenu"
            className="navbarRightMobileMenu"
            onClick={() => setIsMobileMenu((prev) => !prev)}
            style={isMobileMenu ? { opacity: 0.1 } : {}}
          />
          <div className="navbarRightLinks">
            {planetArr.map((planet, index) => (
              <h4
                className="navbarRightLink"
                onClick={handleSelectedPlanet}
                key={planetKeys[index]}
              >
                {planet}
              </h4>
            ))}
          </div>
        </div>
      </div>
      <hr className="navbarSep" />
    </div>
  );
}

export default Navbar;
