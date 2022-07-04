/* eslint-disable testing-library/no-debugging-utils */
import App from '../App';
import { render, screen } from '../test/app-test-utils';

test('renders app properly', () => {
  render(<App />, { route: "/discover" });
  const el = screen.getByText(/Welcome to the Library, type in your search to continue.../i);
  expect(el).toBeInTheDocument();
});
