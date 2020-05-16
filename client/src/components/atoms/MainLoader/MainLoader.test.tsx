import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import MainLoader from './MainLoader'

afterEach(cleanup)

const { getByTestId } = render(<MainLoader />)

test('renders MainLoader', () => {
  expect(getByTestId('MainLoader')).toBeDefined
})
