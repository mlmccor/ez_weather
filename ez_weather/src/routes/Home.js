import React, { Component } from 'react';
import { connect } from 'react-redux'

import {getCoordinates, getWeather} from '../actions/weatherActions'

import LocationSearch from '../components/LocationSearch'
import LocationList from '../components/LocationList'

class Home extends Component {
  render() {
    return(
      <div>
        <h1>Home Page</h1>
        <LocationSearch getCoordinates={this.props.getCoordinates}/>
        <LocationList locations={this.props.results} getWeather={this.props.getWeather}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.locationList
}

const mapDispatchToProps = dispatch => ({
  getCoordinates: (query) => dispatch(getCoordinates(query)),
  getWeather: (location) => dispatch(getWeather(location))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
