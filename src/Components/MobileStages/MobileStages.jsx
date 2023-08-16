import React from "react";
import { usePlanet } from "../../Context/PlanetContext";
import "./mobileStages.css";

function MobileStages({ color }) {
  const { selectedStage, setSelectedStage, createId, deviceType } = usePlanet();
  const mobileStagesArr = ["OVERVIEW", "STRUCTURE", "SURFACE"];

  return (
    <>
      {deviceType==='mobile' && (
        <div className="mobileStages">
          <div className="mobileStagesWrapper">
            {mobileStagesArr.map((stage) => (
              <h4
                key={createId()}
                className="mobileStage"
                onClick={() => setSelectedStage(stage)}
                style={
                  selectedStage === stage
                    ? { textDecoration: "underline 4px solid " + color,opacity: '100%' }
                    : {}
                }
              >
                {stage}
              </h4>
            ))}
          </div>
          <hr className="mobileStageSep" />
        </div>
      )}
    </>
  );
}

export default MobileStages;
