export function getWeather(location) {
  let coordinates =`${location.geometry.lat},${location.geometry.lng}`
  return (dispatch) => {
    dispatch({type: 'LOADING_WEATHER'})
    dispatch({type: 'SET_CURRENT_LOCATION', payload: location.formatted})
    let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/apikey/${coordinates}`
    return fetch(url).then(resp => resp.json()).then(weather => {
      dispatch({type:'STOP_LOADING_LOCATIONS'})
      return dispatch({type:'ADD_WEATHER', payload: weather})
    })
  }
}

export function getCoordinates(query) {
  let sanitizedQuery = query.replace(/\W/g, '%2')
  console.log(sanitizedQuery)
  return (dispatch) => {
    dispatch({type:'LOADING_LOCATIONS'})
    let url = 'https://api.opencagedata.com/geocode/v1/json?q=' + sanitizedQuery + '&key=apikey'
    return fetch(url)
    .then(resp => resp.json())
    .then(data => {
      return dispatch({type:'RETRIEVE_LOCATION_LIST', payload: data.results})
    })
  }
}
