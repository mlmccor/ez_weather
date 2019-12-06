import React, { Component } from 'react';
import { connect } from 'react-redux'

import {getCoordinates} from '../actions/weatherActions'

import LocationSearch from '../components/LocationSearch'

class Home extends Component {
  render() {
    return(
      <div>
        <h1>Home Page</h1>
        <LocationSearch getCoordinates={this.props.getCoordinates}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getCoordinates: () => dispatch(getCoordinates())
})

export default connect(null,mapDispatchToProps)(Home)
