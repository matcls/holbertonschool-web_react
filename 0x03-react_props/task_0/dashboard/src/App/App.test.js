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

  it("<App /> contains the <Login /> Component", () => {
    expect(wrapper.contains(<Login />)).toEqual(true);
  });

  it("<App /> contains the <Footer /> Component", () => {
    expect(wrapper.contains(<Footer />)).toEqual(true);
  });
});
