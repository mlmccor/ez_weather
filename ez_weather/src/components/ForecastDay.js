import React from 'react';

const ForecastDay = (day) => {
  let time = new Date(day.time * 1000)
  return (
    <div class='container'>
      <p>{time.toDateString()}</p>
      <p>{day.summary}</p>
      <p>High: {day.temperatureHigh}</p>
      <p>Low: {day.temperatureLow}</p>
    </div>
  )
}

export default ForecastDay
