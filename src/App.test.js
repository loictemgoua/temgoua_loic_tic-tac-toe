import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tic-Tac-Toe title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Tic-Tac-Toe/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders next player', () => {
  render(<App />);
  const linkElement = screen.getByText(/Next player/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders go to game start', () => {
  render(<App />);
  const linkElement = screen.getByText(/Go to game start/i);
  expect(linkElement).toBeInTheDocument();
});
