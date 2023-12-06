import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-libnrary/jest-dom';
import App from './App';

test('renders Display', () => {
  render(<App />);
  const displayElement = screen.queryByTestId("display_nav");
  expect(displayElement).toBeInTheDocument();
});

test('renders text', async () => {
  const displayText =await screen.findByText("Navigation");
  expect(displayText).toBeInTheDocument();
});

