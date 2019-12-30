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

export function getUser() {  
  return (dispatch) => {
    let token = document.querySelector('meta[name="csrf-token"]').content;
    console.log(token)
    let url = 'localhost:3001/api/v1/users/1'
    return fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
      redirect: "error"
    }).then(response => response.json()).then(user=> {
      console.log(user)
      dispatch ({type:'LOADING_USER', payload: user})
    })
  }
}
