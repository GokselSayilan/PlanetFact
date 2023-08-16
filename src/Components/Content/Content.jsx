import React, { useEffect, useState } from "react";
import { usePlanet } from "../../Context/PlanetContext";
import PlanetInfo from "../PlanetInfo/PlanetInfo";
import "./content.css";
import MobileStages from "../MobileStages/MobileStages";

function Content() {
  const { data, selectedPlanet, createId ,selectedStage,setSelectedStage,deviceType,setDeviceType} = usePlanet(); // from context

  


  //animate
  const [animatePage, setAnimatePage] = useState(
    "animate__animated animate__fadeIn"
  );
  const [animatePlanet, setAnimatePlanet] = useState(
    "animate__animated animate__fadeIn"
  );

  const planetStagesArr = ["OVERVIEW", "STRUCTURE", "SURFACE"];
  const planetStageTitleArr = ['OVERVIEW','INTERNAL STRUCTURE','SURFACE GEOLOGY']

  useEffect(() => {
    setAnimatePlanet("");
    setAnimatePage("animate__animated animate__fadeIn");
    setSelectedStage("OVERVIEW");
  }, [selectedPlanet]);

  useEffect(() => {
    setAnimatePlanet("animate__animated animate__fadeIn");
    setAnimatePage("");
  }, [selectedStage]);

  const handleSelectedStage = (stage) => {
    setSelectedStage(stage);
  };



  return (
    <div className="content ">
      {data.map(
        (planet) =>
          planet.name.toLowerCase() === selectedPlanet.toLowerCase() && (
            <div className={`contentWrapper ${animatePage}`} key={createId()}>
              <div className={`contentPlanetImgWrapper ${animatePlanet}`}>
                <img
                  style={{ width: planet.imgSize[deviceType] }}
                  src={
                    selectedStage === "STRUCTURE"
                      ? planet.images.internal
                      : planet.images.planet
                  }
                  alt="planetPhoto"
                  className="contentPlanetImg"
                />
                {selectedStage === "SURFACE" && (
                  <img
                    src={planet.images.geology}
                    alt=""
                    className="planetGeologyImg"
                  />
                )}
              </div>
              <div className="contentPlanetDef">
                <div>
                  <h1 className="contentPlanetDefTitle">{planet.name}</h1>
                  <p className="contentPlanetDefDesc">
                    {planet.overview.content}
                  </p>
                  <p className="contentPlanetDefSource">
                    Source :
                    <a
                      href={
                        selectedStage === "OVERVIEW"
                          ? planet.overview.source
                          : selectedStage === "STRUCTURE"
                          ? planet.structure.source
                          : planet.geology.source
                      }
                      className="contentPlanetDefSourceLink"
                      target="_blank"
                    >
                      Wikipedia
                    </a>
                    <img
                      src="assets/icon-source.svg"
                      alt="sourceIcon"
                      className="contentPlanetDefSourceIcon"
                    />
                  </p>
                </div>
                <div className="contentPlanetDefStages">
                  {planetStagesArr.map((stage, index) => (
                    <div
                      className="contentPlanetDefStage"
                      onClick={() => handleSelectedStage(stage)}
                      key={stage + index}
                      style={
                        selectedStage === stage
                          ? { background: planet.color } // Eğer seçili aşama ise, belirli bir stil uygula
                          : {} // Aksi halde stil verme (varsayılan durum)
                      }
                    >
                      <p className="contentPlanetDefStageNumber">
                        0{index + 1}
                      </p>
                      <p className="contentPlanetDefStageTitle">{planetStageTitleArr[index]}</p>
                    </div>
                  ))}
                </div>
              </div>
              <PlanetInfo
                value={{
                  rotation: planet.rotation,
                  revolution: planet.revolution,
                  radius: planet.radius,
                  temperature: planet.temperature,
                }}
              />
              <MobileStages color={planet.color}/>
            </div>
          )
      )}
    </div>
  );
}

export default Content;
