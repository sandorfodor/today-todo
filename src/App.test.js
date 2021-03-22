import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


describe('<App />', () => {
  it('does not render todo list when zero todo found', () => {
    const container = render(<App />);
    const notificationText = screen.getByText(/nothing to do/i);
    expect(notificationText).toBeInTheDocument();
  });

  it('renders two todo items', () => {
    const storageValue = JSON.stringify([
      { name: 'test item 1' },
      { name: 'test item 2' }
    ]);
    const getItemOriginalImplementation = Storage.prototype.getItem;
    Storage.prototype.getItem = jest.fn(() => storageValue);

    const container = render(<App />);

    const firstItem = screen.queryByText(/test item 1/i);
    expect(firstItem).toBeInTheDocument();

    const secondItem = screen.queryByText(/test item 2/i);
    expect(secondItem).toBeInTheDocument();

    Storage.prototype.getItem = getItemOriginalImplementation;
  });

  it('add todo item to the empty list', () => {
    const container = render(<App />);
    const emptyStateText = screen.getByText(/nothing to do/i);
    expect(emptyStateText).toBeInTheDocument();

    const input = container.getByLabelText('Name of the todo');
    fireEvent.change(input, { target: { value: 'test item 1' } })

    const submitButton = container.getByText('Add todo');
    fireEvent(submitButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    const todoItem = screen.queryByText(/test item 1/i);
    expect(todoItem).toBeInTheDocument();
  });
});
