import React from 'react';

import Hour from '../components/Hour'

const Hourly = (hourList) => {
  let generateHours = () => {
    return hourList.data.map((hour) => <Hour {...hour}/>)
  }
  return (
    <div>
      <h2>{hourList.summary && hourList.summary}</h2>
      {hourList.summary && generateHours()}
    </div>
  )
}

export default Hourly
