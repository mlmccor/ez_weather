export default (state = {current: '' ,results: [], searching: false, loading: false}, action) => {
  switch(action.type) {
    case 'LOADING_LOCATIONS':
      return {...state, loading: true}
    case 'RETRIEVE_LOCATION_LIST':
      return {...state, results: action.payload, searching: true, loading:false}
    case 'SET_CURRENT_LOCATION':
      return {...state, current: action.payload}
    case 'STOP_LOADING_LOCATIONS':
      return {...state, results: [], searching:false}
    default:
      return state
  }
}
