import { shallow } from 'enzyme';
import TodoList from './TodoList';

describe('<TodoList />', () => {
  it('renders hardcoded todo list', () => {
    const wrapper = shallow(<TodoList />);

    expect(wrapper.find('.todo-item').length).toBe(3);
  });
});