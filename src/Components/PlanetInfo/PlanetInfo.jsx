import React from 'react'
import './planetInfo.css'

function PlanetInfo({value}) {
  return (
    <div className='planetInfo'>
      <div className="planetInfoWrapper">
        <div className="planetInfoCard">
          <h4 className="planetInfoCardTitle">ROTATION TIME</h4>
          <h2 className="planetInfoCardValue">{value.rotation}</h2>
        </div>
        <div className="planetInfoCard">
          <h4 className="planetInfoCardTitle">REVOLUTION TIME</h4>
          <h2 className="planetInfoCardValue">{value.revolution}</h2>
        </div>
        <div className="planetInfoCard">
          <h4 className="planetInfoCardTitle">radius</h4>
          <h2 className="planetInfoCardValue">{value.radius}</h2>
        </div>
        <div className="planetInfoCard">
          <h4 className="planetInfoCardTitle">AVERAGE TEMP.</h4>
          <h2 className="planetInfoCardValue">{value.temperature}</h2>
        </div>
      </div>
    </div>
  )
}

export default PlanetInfo