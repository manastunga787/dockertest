import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hurray !!!/i);
  expect(linkElement).toBeInTheDocument();
});

test("1+1 must be 2", () => {
  expect(1 + 1).toBe(2);
});