import React from 'react';
import PropTypes from 'prop-types';
import Summary from './summary';
import './css/tabs.css';

const SummaryTabs = props => {
  const { data } = props;
  const fiveDays = [];
  for (let i = 4; i < data.length; i+= 8) {
    fiveDays.push(data[i]);
  }

  const tabs = fiveDays.map((day, i) => {
    const dayIndex = i + 1;
    return (
      <li className='tab'>
        <a href={ `#day-${dayIndex}` }>
          <Summary
            temperature={ day.main.temp }
            description={ day.weather[0].main }
            date={ day.dt }
            icon={ day.weather[0].icon }
          />
        </a>
      </li>
    );
  });

  return (
    <ol id="tabs">
      { tabs }
    </ol>
  );
};

SummaryTabs.propTypes = {
  data: PropTypes.array.isRequired
};

export default SummaryTabs;
