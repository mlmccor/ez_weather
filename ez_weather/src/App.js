import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './routes/Home'
import CurrentWeather from './routes/CurrentWeather'
import WeeklyForecast from './routes/WeeklyForecast'
import Hourly from './routes/Hourly'

import {getWeather, getUser} from './actions/weatherActions'

class App extends Component {

  componentDidMount() {
    this.props.getUser()
  }


  generateCurrent() {
    if (this.props.locationList.current) {
      return <h1>Current Location: {this.props.locationList.current}</h1>
    } else {
      return <p>No Location Selected</p>
    }
  }

  render() {
    return (
      <Router>
        <Container>
          <div className="App">
            <Link to='/'>Home</Link><br/>
            <Link to='/current'>Current Weather</Link><br/>
            <Link to='/weekly'>Weekly Forecast</Link><br/>
            <Link to='/hourly'>Hourly Forecast</Link>

            {this.generateCurrent()}

            <Route exact path='/' render= {props => <Home/>}/>
            <Route path='/weekly' render= {props => <WeeklyForecast {...this.props.weather.daily}/>}/>
            <Route path='/current' render= {props =><CurrentWeather current={this.props.weather.currently}/>}/>
            <Route path='/hourly' render= {props =><Hourly {...this.props.weather.hourly}/>}/>

          </div>
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = dispatch => ({
  getWeather: () => dispatch(getWeather()),
  getUser: () => dispatch(getUser())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
