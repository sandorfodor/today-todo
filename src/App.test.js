import { shallow } from 'enzyme';
import App from './App';
import TodoList from './components/TodoList';
import AppDescription from './components/AppDescription';
import TodoForm from './components/TodoForm';
import Footer from './components/Footer';
import TodoContextProvider from './contexts/TodoContext';

describe('<App />', () => {
  it('renders the <TodoList /> and <AppDescription /> components', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(TodoContextProvider).length).toBe(1);
    expect(wrapper.find(AppDescription).length).toBe(1);
    expect(wrapper.find(TodoList).length).toBe(1);
    expect(wrapper.find(TodoForm).length).toBe(1);
    expect(wrapper.find(Footer).length).toBe(1);
  });
});