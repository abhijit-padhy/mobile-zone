import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders page title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Aeigon/i);
  expect(linkElement).toBeInTheDocument();
});
