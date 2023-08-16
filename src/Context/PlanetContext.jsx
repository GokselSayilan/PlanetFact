import { createContext, useContext, useState,useEffect } from "react";

// unique identifier library
import { v4 as uuidv4 } from "uuid";

// planet data json
import data from "../data.json";

const PlanetContext = createContext();

export function PlanetProvider({ children }) {
  const [selectedPlanet, setSelectedPlanet] = useState("mercury");
  const [selectedStage, setSelectedStage] = useState("OVERVIEW");
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [deviceType, setDeviceType] = useState("");

  // all planet name
  const planetArr = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];

  // all mobile color
  const planetColorArr = [
    "#DEF4FC",
    "#F7CC7F",
    "#545BFE",
    "#FF6A45",
    "#ECAD7A",
    "#FCCB6B",
    "#65F0D5",
    "#497EFA"
  ];

    // device type
    useEffect(() => {
      const handleResize = () => {
        const innerWidth = window.innerWidth;
  
        if (innerWidth > 1000) {
          setDeviceType("desktop");
        } else if (innerWidth >= 500 && innerWidth <= 1000) {
          setDeviceType("tablet");
        } else {
          setDeviceType("mobile");
        }
      };
  
      // İlk render sonrası boyutu ayarla
      handleResize();
  
      // Boyut değişikliklerini dinle
      window.addEventListener("resize", handleResize);
  
      // Bileşen çıkışı yapıldığında olay dinleyiciyi kaldır
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  // random unique id creator
  const createId = () => {
    return uuidv4();
  };

  return (
    <PlanetContext.Provider
      value={{
        selectedPlanet,
        setSelectedPlanet,
        createId,
        data,
        isMobileMenu,
        setIsMobileMenu,
        planetArr,
        planetColorArr,
        selectedStage,
        setSelectedStage,
        deviceType,
        setDeviceType

      }}
    >
      {children}
    </PlanetContext.Provider>
  );
}

export function usePlanet() {
  return useContext(PlanetContext);
}
