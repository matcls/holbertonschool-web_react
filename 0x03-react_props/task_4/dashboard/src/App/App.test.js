import React from "react";
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

describe('Test the <App /> Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('<App /> renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it("<App /> contains the <Notifications /> Component", () => {
    expect(wrapper.contains(<Notifications />)).toEqual(true);
  });

  it("<App /> contains the <Header /> Component", () => {
    expect(wrapper.contains(<Header />)).toEqual(true);
  });

  it("<Login />is diplayed only when isLoggedIn true", () => {
    const props = { isLoggedIn: false, };
    const wrapper = shallow(<App {...props} />);
    wrapper.update();
    expect(wrapper.contains(<Login />)).toEqual(true);
  });

  it("<App /> contains the <Footer /> Component", () => {
    expect(wrapper.contains(<Footer />)).toEqual(true);
  });
  it("CourseList is not displayed with isLoggedIn false", () => {
    const props = { isLoggedIn: false, };
    const wrapper = shallow(<App {...props} />);
    wrapper.update();
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
  it("isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn />);
    wrapper.update();
    expect(wrapper.find("Login")).toHaveLength(0);
    expect(wrapper.find("CourseList")).toHaveLength(1);
  });
});
