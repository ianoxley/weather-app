import React from 'react';
import PropTypes from 'prop-types';
import './css/tabs.css';

const ms = 1000;
const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
];

const Summary = (props) => {
  const date = new Date(props.date * ms);
  const dayOfMonth = date.getDate();
  const month = monthNames[date.getMonth()];
  return (
    <React.Fragment>
      <h2>
        <span className='day'>{ dayOfMonth }</span>
        <span class="month">{ month }</span>
      </h2>
      <b className='temp'>{ Math.round(props.temperature) }º<abbr title="Celcius">C</abbr></b>
      <img
        className='weather-icon'
        src={ `http://openweathermap.org/img/w/${props.icon}.png` }
        alt={ props.description }
      />

    </React.Fragment>
  );
};

Summary.propTypes = {
  temperature: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Summary;
