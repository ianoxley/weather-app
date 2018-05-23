import React from 'react';
import PropTypes from 'prop-types';
import './css/header.css';

const Header = (props) => {
  return (
    <header>
      <h1 className="app-title">Weather for { props.location }</h1>
      <p id="current-temp">{ Math.round(props.currentTemperature) }º<abbr title="Celcius">C</abbr></p>
      <p id="description">{ props.description }</p>
      <img src={ `http://openweathermap.org/img/w/${props.icon}.png` } alt={ props.description } />
    </header>
  );
};

Header.propTypes = {
  location: PropTypes.string.isRequired,
  currentTemperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Header;
