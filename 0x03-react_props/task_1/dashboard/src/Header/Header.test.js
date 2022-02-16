import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Test the <Header /> Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  it('<Header /> renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it('<Header />  renders img', () => {
    wrapper.update();
    expect(wrapper.find('div.header img')).toHaveLength(1);
  });
  it('<Header /> renders h1', () => {
    wrapper.update();
    expect(wrapper.find('div.header h1')).toHaveLength(1);
  });
});
