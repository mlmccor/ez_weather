export default (state = {current:{}, total:{}}, action) => {
  switch(action.type) {
    case 'LOADING_WEATHER':
      return state
    case 'ADD_WEATHER':
      return {...state, current: action.payload.currently, total: action.payload}
    default:
      return state
  }
}
