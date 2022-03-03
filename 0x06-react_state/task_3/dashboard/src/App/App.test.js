import { shallow, mount } from 'enzyme';
import React from 'react';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, user, logOut } from "./AppContext";
import { listNotificationsInitialState } from "./App";

describe('<App />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });

  it('contain Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('contain Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('contain Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('contain Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('CourseList', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });
  it("CourseList is not displayed with isLoggedIn false by default", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
  it('logOut', () => {
    const logOut = jest.fn(() => undefined);
    const wrapper = shallow(<App logOut={logOut} />);
    expect(wrapper.exists());
    const alert = jest.spyOn(global, 'alert');
    expect(alert);
    expect(logOut);
    jest.restoreAllMocks();
  });
  it("isLoggedIn is true", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      user: {
        ...user,
        isLoggedIn: true,
      },
    });
    expect(wrapper.find("Login")).toHaveLength(0);
    expect(wrapper.find("CourseList")).toHaveLength(1);
  });
  it("test to verify that the logIn function updates the state correctly", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const loggedUser = {
      email: "email@google.com",
      password: "abcdefg",
      isLoggedIn: true,
    };
    const instance = wrapper.instance();

    expect(wrapper.state().user).toEqual(user);

    instance.logIn(loggedUser.email, loggedUser.password);

    expect(wrapper.state().user).toEqual(loggedUser);
  });
  it("test to verify that the logOut function updates the state correctly", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const loggedUser = {
      email: "email@google.com",
      password: "abcdefg",
      isLoggedIn: true,
    };

    const instance = wrapper.instance();

    expect(wrapper.state().user).toEqual(user);

    instance.logIn(loggedUser.email, loggedUser.password);

    expect(wrapper.state().user).toEqual(loggedUser);

    instance.logOut();

    expect(wrapper.state().user).toEqual(user);
  });
  it('default state for displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it('displayDrawer toggle handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it('displayDrawer toggle handleDisplayDrawer and handleHideDrawer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });
  it('<AppContext.Provider />', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );
    expect(wrapper.exists());
  });
  it("verify that markNotificationAsRead works as intended", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const instance = wrapper.instance();

    expect(wrapper.state().listNotifications).toEqual(
      listNotificationsInitialState
    );

    instance.markNotificationAsRead(4);

    expect(wrapper.state().listNotifications).toEqual(
      listNotificationsInitialState
    );

    instance.markNotificationAsRead(3);

    expect(wrapper.state().listNotifications).toEqual(
      listNotificationsInitialState.slice(0, 2)
    );

    instance.markNotificationAsRead(1);

    expect(wrapper.state().listNotifications).toEqual(
      listNotificationsInitialState.slice(1, 2)
    );
  });
});
