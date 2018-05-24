import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from '../App';

describe('App', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: true,
          json() {
            return {
              city: {
                name: 'Newcastle'
              },
              list: [
                {
                  main: {
                    temp: 17
                  },
                  weather: [
                    {
                      main: 'Clear',
                      icon: '01n'
                    }
                  ]
                }
              ]
            }
          }
        });
      });
    });
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('constructor', () => {
    it('sets up the default state', () => {
      const wrapper = shallow(<App />);
      const state = wrapper.state();
      expect(state.isLoaded).toBe(false);
      expect(state.error).toBeNull();
      expect(state.data).toBeNull();
    });
  });

  describe('componentDidMount', () => {
    let spy;

    afterEach(() => {
      spy.mockClear();
    });

    // TODO: fix this test
    xit('triggers #day-1 on first load', () => {
      spy = jest.spyOn(window.history, 'replaceState');
      const wrapper = mount(<App />);
      expect(spy).toHaveBeenCalledWith(undefined, 'Today', '#day-1');
    });
  });

  describe('render', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    describe('when error is not null', () => {
      it('renders the error message', () => {
        wrapper.setState({
          error: {
            message: 'An error occurred'
          }
        });
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('when isLoaded is false', () => {
      it('renders the loading message', () => {
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('when isLoaded is true', () => {
      it('renders the data', () => {
        wrapper.setState({
          isLoaded: true,
          data: {
            city: {
              name: 'Newcastle'
            },
            list: [
              {
                main: {
                  temp: 17
                },
                weather: [
                  {
                    main: 'Clear',
                    icon: '01n'
                  }
                ]
              }
            ]
          }
        });

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
