import React, { Component } from 'react';
import { connect } from 'react-redux'

import {getCoordinates, getWeather} from '../actions/weatherActions'

import LocationSearch from '../components/LocationSearch'
import LocationList from '../components/LocationList'
import Loading from '../components/Loading';

class Home extends Component {

  generateLocations() {
    if (this.props.searching) {
      return <LocationList locations={this.props.results} getWeather={this.props.getWeather}/>
    }
  }
  render() {
    if (this.props.loading) {
      return (
        <div>
          <Loading/>
        </div>
      )

    } else {
      return(
        <div>
          <h2>Home Page</h2>
          <LocationSearch getCoordinates={this.props.getCoordinates}/>
          {this.generateLocations()}
        </div>
      )

    }
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
