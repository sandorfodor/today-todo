import { shallow } from 'enzyme';
import App from './App';
import TodoList from './components/TodoList';
import AppDescription from './components/AppDescription';

describe('<App />', () => {
  it('renders the <TodoList /> and <AppDescription /> components', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(TodoList).length).toBe(1);
    expect(wrapper.find(AppDescription).length).toBe(1);
  });
});