import React, { Component } from 'react';
import Header from './header';
import SummaryTabs from './summary-tabs';
import './css/App.css';

const apiKey = process.env.REACT_APP_API_KEY;
const location = 'Newcastle,gb';
const units = 'metric';

const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=${units}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: null
    };
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
          if (window.history && window.history.replaceState) {
            window.history.replaceState(undefined, 'Today', '#day-1');
          }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { isLoaded, error, data } = this.state;

    if (error) {
      return (
        <div>Error: { error.message }</div>
      );
    } else if (!isLoaded) {
      return (
        <div>Loading&hellip;</div>
      );
    } else {
      const { city, list } = data;
      return (
        <main className="app">
          <Header
            location={ city.name }
            currentTemperature={ list[0].main.temp }
            description={ list[0].weather[0].main }
            icon={ list[0].weather[0].icon }
          />
          <SummaryTabs
            data={ list }
          />
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
}

export default App;
