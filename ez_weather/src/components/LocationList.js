import React from 'react';

const LocationList = (locations) => {
  let formattedLists = () => {
    console.log('hits here')
    return locations.locations.map((location) => <h4>{location.formatted}</h4>)
  }
  if (locations.locations.length > 0) {
    return (
      <div>
      <h3>Search Results</h3>
      {formattedLists()}
      </div>
    )
  } else {
    return (<div>NOthing</div>)
  }
}

export default LocationList
