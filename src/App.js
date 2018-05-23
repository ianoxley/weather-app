import React, { Component } from 'react';
import './App.css';
import Header from './header';

// TODO: replace with actual data
const data = {
  location: 'Newcastle-upon-Tyne',
  currentTemperature: '17'
};

class App extends Component {
  componentDidMount() {
    if (window.history && window.history.replaceState) {
      window.history.replaceState(undefined, 'Today', '#day-1');
    }
  }

  render() {
    return (
      <main className="app">
        <Header
          location={ data.location }
          currentTemperature={ data.currentTemperature }
        />
        <ol id="tabs">
          <li className="tab">
            <a href="#day-1">Day 1</a>
          </li>
          <li className="tab">
            <a href="#day-2">Day 2</a>
          </li>
          <li className="tab">
            <a href="#day-3">Day 3</a>
          </li>
          <li className="tab">
            <a href="#day-4">Day 4</a>
          </li>
          <li className="tab">
            <a href="#day-5">Day 5</a>
          </li>
        </ol>
        <ol id="tab-panels">
          <li id="day-1" className="tab-panel">
            <div>Content Day 1</div>
          </li>
          <li id="day-2" className="tab-panel">
            <div>Content Day 2</div>
          </li>
          <li id="day-3" className="tab-panel">
            <div>Content Day 3</div>
          </li>
          <li id="day-4" className="tab-panel">
            <div>Content Day 4</div>
          </li>
          <li id="day-5" className="tab-panel">
            <div>Content Day 5</div>
          </li>
        </ol>
      </main>
    );
  }
}

export default App;
