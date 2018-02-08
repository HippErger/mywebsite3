import React, { Component } from 'react';
import './stylesheets/App.css';
import IconRow from './components/IconRow';
import Particles from 'react-particles-js';
// import PortfolioButton from './components/portfolioButton.js';// import Particle from 'react-particle';

// import PartParams from './particles.json';
// insert route to new page on line 15
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <a className='title-Name'>Clayton Berger</a>
          </h1>
          <hr />
          <IconRow />
        </header>
      </div>
    );
  }
}

export default App;
// <Particles params={{PartParams}}   style={{PartPararms.color}} />
