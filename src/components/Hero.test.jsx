import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { describe, it, expect } from 'vitest';

describe('Hero Component', () => {
  it('should render the Solo Águilas logo', () => {
    render(<Hero />);
    const logoImg = screen.getByAltText(/Solo Águilas Logo/i);
    expect(logoImg).toBeInTheDocument();
  });

  it('should render the main title', () => {
    render(<Hero />);
    const title = screen.getByText(/Solo Águilas/i);
    expect(title).toBeInTheDocument();
  });
});
