import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { describe, it, expect } from 'vitest';

describe('Footer Component', () => {
  it('should render the Instagram link', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /Instagram/i });
    expect(link).toHaveAttribute('href', 'https://www.instagram.com/solo.aguilas/');
  });

  it('should render the copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/Solo Águilas/i)).toBeInTheDocument();
  });
});
