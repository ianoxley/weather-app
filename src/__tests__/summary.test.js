import React from 'react';
import { shallow } from 'enzyme';
import Summary from '../summary';

describe('Summary', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Summary
        description='Rain'
        temperature={ 12 }
        icon='01n'
        date='2018-05-24'
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
