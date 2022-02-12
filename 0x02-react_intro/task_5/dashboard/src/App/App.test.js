import React from "react";
import { shallow } from 'enzyme';
import App from './App';

describe('Testing the <App /> Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('<App /> renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it('<App /> renders a div with the class App-header', () => {
    wrapper.update();
    expect(wrapper.find('div.App-header')).toHaveLength(1);
  });
  it('<App /> renders a div with the class App-body', () => {
    wrapper.update();
    expect(wrapper.find('div.App-body')).toHaveLength(1);
  });
  it('<App /> renders a div with the class App-footer', () => {
    wrapper.update();
    expect(wrapper.find('div.App-footer')).toHaveLength(1);
  });
});
