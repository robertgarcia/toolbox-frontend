import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/React APP - Test Toolbox/i);
  expect(linkElement).toBeInTheDocument();
});
