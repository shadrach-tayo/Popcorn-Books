import { render, screen } from '@testing-library/react';
import App from './App';

test('renders popcorn books link', () => {
  render(<App />);
  const linkElement = screen.getByText(/popcorn books/i);
  expect(linkElement).toBeInTheDocument();
});
