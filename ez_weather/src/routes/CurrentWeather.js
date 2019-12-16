import React from 'react';


const CurrentWeather = ({current}) => {

  const display = () => {
    if (current) {
      return (
        <div>
          <h2>Current Temp: { current && current.temperature}</h2>
          {displayTime()}
          <p>{current && current.summary}</p>
          <p>Chance of Precipitation: {current && current.precipProbability}%</p>
        </div>
      )
    } else return <div/>
  }

  const displayTime = () => {
    if (current) {
      let time = new Date(current.time * 1000)
      return (
        <div>
        <h4>{time.toDateString()}</h4>
        <h4>{time.toTimeString()}</h4>
        </div>
      )
    }
  }

  return display()
}

export default CurrentWeather
