export default (state = {current: {}}, action) => {
  switch(action.type) {
    case 'LOADING_WEATHER':
      return state
    case 'ADD_WEATHER':
      return {...state, current: action.payload}
    default:
      return state
  }
}
