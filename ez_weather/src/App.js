import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CurrentWeather from './routes/CurrentWeather'
import WeeklyForcast from './routes/WeeklyForcast'

import {getWeather} from './actions/weatherActions'

class App extends Component {

  componentDidMount() {
    this.props.getWeather()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Link to='/'>Current Weather</Link>
          <Link to='/weekly'>Weekly Forcast</Link>


          <Route exact path='/' render= {props => <CurrentWeather/>}/>
          <Route path='/weekly' render= {props => <WeeklyForcast/>}/>

        </div>
      </Router>
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
