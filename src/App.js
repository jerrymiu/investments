import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './Navbar.js';
import Graph from './Graph.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar name="Jerry"/>
        <Graph />
      </div>
    );
  }
}

export default App;
