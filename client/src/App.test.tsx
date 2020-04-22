import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

const { getByTestId } = render(<App />)

test('renders App', () => {
  expect(getByTestId('App')).toBeDefined
})

