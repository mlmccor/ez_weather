import React from 'react';


const Hour = (hour) => {
  let time = new Date(hour.time * 1000)
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <div>
      <h4>{days[time.getDay()]}</h4>
      <h4>{time.toTimeString()}</h4>
      <p>Temperature: {hour.temperature}</p>
      <p>{hour.summary}</p>
      <p>Chance of Precipitation: {hour.precipProbability * 100 }%</p>
    </div>
  )
}

export default Hour
