import React, { Component } from 'react';
import { connect } from 'react-redux'

import {getCoordinates, getWeather} from '../actions/weatherActions'

import LocationSearch from '../components/LocationSearch'
import LocationList from '../components/LocationList'

class Home extends Component {

  generateLocations() {
    if (this.props.searching) {
      return <LocationList locations={this.props.results} getWeather={this.props.getWeather}/>
    }
  }
  render() {
    return(
      <div>
        <h2>Home Page</h2>
        <LocationSearch getCoordinates={this.props.getCoordinates}/>
        {this.generateLocations()}
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
