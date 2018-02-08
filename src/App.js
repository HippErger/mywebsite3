import React, { Component } from 'react';
import './App.css';
import IconRow from './components/IconRow';
import Particles from 'react-particles-js';
import PortfolioButton from './components/portfolioButton.js';// import Particle from 'react-particle';

// import PartParams from './particles.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clayton Berger</h1>
          <hr />
          <IconRow />
        </header>
        <PortfolioButton />
      </div>
    );
  }
}

export default App;
// <Particles params={{PartParams}}   style={{PartPararms.color}} />
