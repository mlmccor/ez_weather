import React from 'react';
import Modal from 'react-bootstrap/Modal';

import Location from './Location'

const LocationList = ({locations, getWeather}) => {
  let formattedLists = () => {
    return locations.map((location) => <Location location={location} getWeather={getWeather}/>)
  }
  if (locations.length > 1) {
    return (
      <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Search Results</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {formattedLists()}
        </Modal.Body>


      </Modal.Dialog>

      </div>
    )
  } else {
    return (<div></div>)
  }
}

export default LocationList
