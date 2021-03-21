import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('<Footer />', () => {
  it('renders footer with hardcoded text', () => {
    render(<Footer />);
    
    const footerText = screen.getByText(/This is a free app, feel free to fork and extend!/i);
    expect(footerText).toBeInTheDocument();
  });
});