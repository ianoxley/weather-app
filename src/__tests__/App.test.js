import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

describe('App', () => {
  describe('componentDidMount', () => {
    let spy;

    afterEach(() => {
      spy.mockClear();
    });

    it('triggers #day-1 on first load', () => {
      spy = jest.spyOn(window.history, 'replaceState');
      const wrapper = mount(<App />);
      expect(spy).toHaveBeenCalledWith(undefined, 'Today', '#day-1');
    });
  });
});
