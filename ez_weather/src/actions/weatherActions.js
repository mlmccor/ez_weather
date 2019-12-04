export function getWeather() {
  return (dispatch) => {
    dispatch({type: 'LOADING_WEATHER'})
    return fetch('https://api.darksky.net/forecast/[insertKeyHere]/40.440624,-79.995888',{
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
      },
      redirect: "error"
    }).then(resp => resp.json()).then(weather => {
      console.log(weather.currently)
      return dispatch({type:'ADD_WEATHER', payload: weather.currently})
    })
  }
}
