// jest.setup.js
import '@testing-library/jest-dom';
// Mock untuk window.matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Untuk kompatibilitas dengan addListener
      removeListener: jest.fn(), // Untuk kompatibilitas dengan removeListener
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
