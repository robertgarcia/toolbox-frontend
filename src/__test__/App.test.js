import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';

describe('App', () => {

  test('renders learn react link', async () => {
    render(<App />);
    const linkElement = screen.getByText(/React APP - Test Toolbox/i);
    expect(linkElement).toBeInTheDocument();
  });
})
