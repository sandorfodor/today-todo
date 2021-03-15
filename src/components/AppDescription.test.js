import { shallow } from 'enzyme';
import AppDescription from './AppDescription';

describe('<AppDescription />', () => {
  it('renders the component with hardcoded description', () => {
    const wrapper = shallow(<AppDescription />);
    expect(wrapper.contains('Hey Achiever, here you can set your daily goals!')).toBe(true);
  });
});