import { render, screen } from '@testing-library/react';
import Gallery from './Gallery';
import Tattoo from '../domain/Tattoo';
import { describe, it, expect } from 'vitest';

describe('Gallery Component', () => {
  const mockTattoos = [
    new Tattoo('Aguila Real', 'blackwork', 'aguila.jpg'),
    new Tattoo('Rosa Tradicional', 'traditional', 'rosa.jpg')
  ];

  it('should render the gallery title', () => {
    render(<Gallery tattoos={[]} />);
    expect(screen.getByText(/Nuestros Tatuajes/i)).toBeInTheDocument();
  });

  it('should render a list of tattoos', () => {
    render(<Gallery tattoos={mockTattoos} />);
    expect(screen.getByText(/Aguila Real \(Blackwork\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Rosa Tradicional \(Traditional\)/i)).toBeInTheDocument();
  });
});
