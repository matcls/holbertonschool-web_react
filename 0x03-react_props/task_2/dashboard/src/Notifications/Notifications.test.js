import React from "react";
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem'
describe('Test <Notifications /> Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('<Notifications /> renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it('<Notifications /> renders three list items', () => {
    wrapper.update();
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });
  it("<Notifications /> renders the first <NotificationItem /> element with the right HTML", () => {
    expect(wrapper.find('NotificationItem').first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });
  it('<Notifications /> renders the text Here is the list of notifications', () => {
    const text = 'Here is the list of notifications';
    wrapper.update();
    expect(wrapper.find('.Notifications p').text()).toEqual(text);
  });
});
