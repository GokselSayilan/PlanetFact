import React, { useEffect } from "react";
import "./mobileMenu.css";
import { usePlanet } from "../../Context/PlanetContext";

function MobileMenu() {
  const { planetArr, planetColorArr, createId, setSelectedPlanet,setIsMobileMenu } =
    usePlanet();



  return (
    <div className="mobileMenu">
      <div className="mobileMenuWrapper">
        <div className="mobileMenuItems">
          {planetArr.map((planet, index) => (
         <React.Fragment key={createId()}>
              <div
                className="mobileMenuItem"
                key={createId()}
                onClick={() => {
                  setSelectedPlanet(planet)
                  setIsMobileMenu(false)
                }}
              >
                <div className="mobileMenuItemLeft">
                  <div
                    className="mobileMenuItemLeftPlanet"
                    style={{ background: planetColorArr[index] }}
                  ></div>
                  <p className="mobileMenuItemLeftTitle">{planet}</p>
                </div>
                <div className="mobileMenuItemRight">
                  <img
                    src="assets/icon-chevron.svg"
                    alt="menuIcon"
                    className="mobileMenuItemRightIcon"
                  />
                </div>
              </div>
              <hr className="mobileMenuSep" />
              </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
