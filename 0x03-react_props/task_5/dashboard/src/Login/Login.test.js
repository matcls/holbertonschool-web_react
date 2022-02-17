import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';

describe('Testing the <Login /> Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('<Login /> renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it('<Login /> renders a div with the class login', () => {
    wrapper.update();
    expect(wrapper.find('div.login')).toHaveLength(1);
  });
  it('<Login /> renders 2 input', () => {
    wrapper.update();
    expect(wrapper.find('div.login input')).toHaveLength(2);
  });
  it('<Login /> renders 2 label', () => {
    wrapper.update();
    expect(wrapper.find('div.login label')).toHaveLength(2);
  });
});
