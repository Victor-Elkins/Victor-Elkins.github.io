import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the name and contact details', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: 'Victor Elkins' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'victor.r.elkins@gmail.com' })).toHaveAttribute(
    'href',
    'mailto:victor.r.elkins@gmail.com'
  );
  expect(screen.getByRole('link', { name: '(281) 323-5559' })).toHaveAttribute('href', 'tel:+12813235559');
});
