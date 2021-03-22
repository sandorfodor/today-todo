import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('<Footer />', () => {
  it('renders footer with hardcoded text', () => {
    render(<Footer />);
    
    const footerText = screen.getByText(/this is a free app/i);
    expect(footerText).toBeInTheDocument();
  });
});