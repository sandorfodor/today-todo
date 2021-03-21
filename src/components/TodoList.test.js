import { render, screen } from '@testing-library/react';
import { TodoContext } from '../contexts/TodoContext';
import TodoList from './TodoList';

const customRender = (ui, { providerProps, ...renderOptions }) => {
  const { container } = render(
    <TodoContext.Provider {...providerProps}>{ui}</TodoContext.Provider>,
    renderOptions
  );

  return container;
}

describe('<TodoList />', () => {
  it('does not render todo list when zero todo defined', () => {
    const providerProps = {
      value: { todos: [] }
    };
    const container = customRender(<TodoList />, { providerProps });
    const notificationText = screen.getByText(/nothing to do/i);
    expect(notificationText).toBeInTheDocument();
  });

  it('renders todo list when 1 todo defined', () => {
    const providerProps = {
      value: { todos: [ { name: 'as' } ] }
    };
    const container = customRender(<TodoList />, { providerProps });
    const element = screen.getByTestId('todo-list')
    expect(element).toBeInTheDocument;
  });
});
