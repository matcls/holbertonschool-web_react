import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Testing the <Notifications /> Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('<Notifications /> renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it('<Notifications /> renders three list items', () => {
    wrapper.update();
    expect(wrapper.find('li')).toHaveLength(3);
  });
  it('<Notifications /> renders the text Here is the list of notifications', () => {
    const text = 'Here is the list of notifications';
    wrapper.update();
    expect(wrapper.find('.Notifications p').text()).toEqual(text);
  });
});
