import React from "react";
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Test the <Footer /> Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });
  it('<Footer /> renders without crashing', () => {
    wrapper.update();
    expect(wrapper.exists()).toEqual(true);
  });
  it('Verify that <Footer /> renders a div whit te text "Copyright"', () => {
    wrapper.update();
    expect(wrapper.find('div.footer p')).toHaveLength(1);
    expect(wrapper.find('div.footer p').text()).toContain('Copyright');
  });
});
