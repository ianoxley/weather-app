import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header>
      <h1 className="app-title">Weather for { props.location }</h1>
      <p id="current-temp">{ props.currentTemperature }</p>
    </header>
  );
};

Header.propTypes = {
  location: PropTypes.string.isRequired,
  currentTemperature: PropTypes.string.isRequired
};

export default Header;
