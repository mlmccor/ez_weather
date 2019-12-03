export default (state = {weather: {}}, action) => {
  switch(action.type) {
    case 'LOADING_WEATHER':
      return state
    default:
      return state
  }
}
