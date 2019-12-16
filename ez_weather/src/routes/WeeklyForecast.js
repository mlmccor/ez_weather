import React from 'react';

import ForecastDay from '../components/ForecastDay'

const WeeklyForecast = (weekly) => {
  if (!weekly.data) return <p></p>
  let generateDays = function() {
    return weekly.data.map((day) => <ForecastDay {...day}/>)
  }
  return(
    <div>
      <h2>Weekly Forecast</h2>
      <h4>{weekly.summary}</h4>
      <ul>
        {generateDays()}
      </ul>
    </div>
  )
}
export default WeeklyForecast
