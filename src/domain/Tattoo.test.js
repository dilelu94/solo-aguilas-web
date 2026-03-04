import { describe, it, expect } from 'vitest';
import Tattoo from '../domain/Tattoo';

describe('Tattoo Domain Model', () => {
  it('should create a tattoo instance correctly', () => {
    const tattoo = new Tattoo('Eagle', 'traditional', 'eagle-tattoo.jpg');
    expect(tattoo.name).toBe('Eagle');
    expect(tattoo.style).toBe('traditional');
    expect(tattoo.imageUrl).toBe('eagle-tattoo.jpg');
  });

  it('should return a formatted display name', () => {
    const tattoo = new Tattoo('Eagle', 'traditional', 'eagle-tattoo.jpg');
    expect(tattoo.getDisplayName()).toBe('Eagle (Traditional)');
  });
});
