export default (state = {results: []}, action) => {
  switch(action.type) {
    case 'LOADING_LOCATIONS':
      return state
    case 'RETRIEVE_LOCATION_LIST':
      return {...state, results: action.payload}
    default:
      return state
  }
}
