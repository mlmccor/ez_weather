import React from 'react';

import Location from './Location'

const LocationList = ({locations, getWeather}) => {
  let formattedLists = () => {
    return locations.map((location) => <Location location={location} getWeather={getWeather}/>)
  }
  if (locations.length > 1) {
    return (
      <div>
      <h3>Search Results</h3>
      {formattedLists()}
      </div>
    )
  } else {
    return (<div>Nothing</div>)
  }
}

export default LocationList
