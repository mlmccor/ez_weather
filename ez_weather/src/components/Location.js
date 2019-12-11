import React from 'react';

const Location = ({location, getWeather}) => {
  let selectLocation = () => {
    return getWeather()
  }
  return (
    <div>
      <h4>{location.formatted}</h4>
      <button onClick={selectLocation}>Select</button>
    </div>
  )
}

export default Location
