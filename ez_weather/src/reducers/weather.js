export default (state = {}, action) => {
  switch(action.type) {
    case 'LOADING_WEATHER':
      return state
    case 'ADD_WEATHER':
      return {...state, ...action.payload}
    default:
      return state
  }
}
