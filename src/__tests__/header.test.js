import React from 'react';
import { shallow } from 'enzyme';
import Header from '../header';

describe('Header', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Header
        location='Newcastle-upon-Tyne'
        currentTemperature={ 17 }
        description='Clear'
        icon='01n'
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
