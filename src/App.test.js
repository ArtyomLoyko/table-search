import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Коды ОКВЭД/i);
  expect(headerElement).toBeInTheDocument();
});
