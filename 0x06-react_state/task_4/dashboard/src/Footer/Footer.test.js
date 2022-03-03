import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { user, logOut, AppContext } from '../App/AppContext';

describe('<Footer />', () => {
  it('render without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });
  it("verify that the link is not displayed when the user is logged out within the context", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("div.footer a")).toHaveLength(0);
  });
  it("verify that the link is displayed when the user is logged in within the context", () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{ user: { ...user, isLoggedIn: true }, logOut }}
      >
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("footer a")).toHaveLength(1);
    expect(wrapper.find("footer a").text()).toEqual("Contact us");
  });
});
