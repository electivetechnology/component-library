import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Loader from './Loader'

afterEach(cleanup)

const { getByTestId } = render(<Loader />)

test('renders Loader', () => {
  expect(getByTestId('Loader')).toBeDefined
})
