export function getWeather() {
  return (dispatch) => {
    dispatch({type: 'LOADING_WEATHER'})
    let url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/apiKey/40.440624,-79.995888'
    return fetch(url).then(resp => resp.json()).then(weather => {
      return dispatch({type:'ADD_WEATHER', payload: weather})
    })
  }
}
