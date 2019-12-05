import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './routes/Home'
import CurrentWeather from './routes/CurrentWeather'
import WeeklyForecast from './routes/WeeklyForecast'

import {getWeather} from './actions/weatherActions'

class App extends Component {

  componentDidMount() {
    this.props.getWeather()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Link to='/'>Home</Link><br/>
          <Link to='/current'>Current Weather</Link><br/>
          <Link to='/weekly'>Weekly Forecast</Link>


          <Route exact path='/' render= {props => <Home/>}/>
          <Route path='/weekly' render= {props => <WeeklyForecast {...this.props.weather.daily}/>}/>
          <Route path='/current' render= {props =><CurrentWeather current={this.props.weather.currently}/>}/>

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
