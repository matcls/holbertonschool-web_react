import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('<BodySection />', () => {
  it("BodySection renders without crashing", () => {
    const wrapper = shallow(<BodySection />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('with children and heading', () => {
    const wrapper = shallow(
      <BodySection title='test title'>
        <p>test children node</p>
      </BodySection>
    );
    const div = wrapper.find('.bodySection').first();
    
    expect(div.exists()).toEqual(true);
    
    const h2 = wrapper.find('h2');
    const p = wrapper.find('p');
    
    
    expect(h2).toHaveLength(1);
    expect(h2.text()).toEqual('test title');
    
    expect(p).toHaveLength(1);
    expect(p.text()).toEqual('test children node');
  });
});
