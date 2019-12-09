import {combineReducers} from 'redux';
import weather from './weather'
import locationList from './locationList'


export default combineReducers({
  weather, locationList
});
