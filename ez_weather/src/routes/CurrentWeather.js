import React from 'react';


const CurrentWeather = ({current}) => {
  let time = new Date(current.time * 1000)
  console.log(time)
  return (
    <div>
      <h1>Current Temp: {current.temperature}</h1>
      <h4>{time.toDateString()}</h4>
      <h4>{time.toTimeString()}</h4>
    </div>
  )
}

export default CurrentWeather
