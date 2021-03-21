import { render, screen } from '@testing-library/react';
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
    Storage.prototype.getItem = jest.fn(() => storageValue);

    const container = render(<App />);

    const firstItem = screen.queryByText(/test item 1/i);
    expect(firstItem).toBeInTheDocument();

    const secondItem = screen.queryByText(/test item 2/i);
    expect(secondItem).toBeInTheDocument();
  });
});
