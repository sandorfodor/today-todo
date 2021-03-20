import { render, screen } from '@testing-library/react';
import { TodoContext, TodoContextProvider } from '../contexts/TodoContext';
import AppDescription from './AppDescription';

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <TodoContext.Provider {...providerProps}>{ui}</TodoContext.Provider>,
    renderOptions
  )
}

describe('<AppDescription />', () => {
  it('renders description when zero todo defined', () => {
    const providerProps = {
      value: { todos: [] }
    };
    customRender(<AppDescription />, { providerProps });
    
    const descriptionText = screen.getByText(/Hey Achiever, here you can set your daily goals! You already have 0!/i);
    expect(descriptionText).toBeInTheDocument();
  });

  it('renders description when 1 todo defined', () => {
    const providerProps = {
      value: { todos: [{ name: 'dummy todo' }] }
    };
    customRender(<AppDescription />, { providerProps });
    
    const descriptionText = screen.getByText(/Hey Achiever, here you can set your daily goals! You already have 1!/i);
    expect(descriptionText).toBeInTheDocument();
  });
});