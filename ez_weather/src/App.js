import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

import {getWeather} from './actions/weatherActions'

class App extends Component {
  componentDidMount() {
    this.props.getWeather()
  }
  render() {
    return (
      <div className="App">
      This Works!
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = dispatch => ({
  getWeather: () => dispatch(getWeather())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
