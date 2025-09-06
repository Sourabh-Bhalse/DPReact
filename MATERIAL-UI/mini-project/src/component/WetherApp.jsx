import React from 'react'
import SearchBox from './SearchBox'
import WeatherInfoBox from './WeatherInfoBox'

export default function WetherApp  ()  {
  return (
    <div style={{textAlign:"center", marginTop:"20px"}}>
        <h2>Weather App by @Sourabh</h2>
        <SearchBox />
        <WeatherInfoBox />
      
    </div>
  )
}
