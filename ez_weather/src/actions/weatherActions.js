export function getWeather() {
  return (dispatch) => {
    dispatch({type: 'LOADING_WEATHER'})
    let url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/apikey/40.440624,-79.995888'
    return fetch(url).then(resp => resp.json()).then(weather => {
      return dispatch({type:'ADD_WEATHER', payload: weather})
    })
  }
}

export function getCoordinates(query) {
  let sanitizedQuery = query.replace(/\W/g, '%2')
  return (dispatch) => {
    let url = 'https://api.opencagedata.com/geocode/v1/json?q=' + sanitizedQuery + '&key=apikey'
    return fetch(url)
    .then(resp => resp.json())
    .then(data => {
      return dispatch({type:'RETRIEVE_LOCATION_LIST', payload: data.results})
    })
  }
}
