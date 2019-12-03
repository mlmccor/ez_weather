import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

function App() {
  return (
    <div className="App">
      This Works!
    </div>
  );
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = dispatch => ({
  getWeather: () => dispatch(getWeather())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
