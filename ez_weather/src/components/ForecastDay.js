import React from 'react';

const ForecastDay = (day) => {
  let time = new Date(day.time * 1000)
  return (
    <div>
      <strong>{time.toDateString()}</strong>
      <p>{day.summary}</p>
      <p>High: {day.temperatureHigh}</p>
      <p>Low: {day.temperatureLow}</p>
      <br/><br/>
    </div>
  )
}

export default ForecastDay
