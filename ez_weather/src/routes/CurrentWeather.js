import React from 'react';


const CurrentWeather = ({current}) => {
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

  return (
    <div>
      <h1>Current Temp: { current && current.temperature}</h1>
      {displayTime()}
    </div>
  )
}

export default CurrentWeather
