import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import MainLoader from 'atoms/MainLoader/MainLoader'

afterEach(cleanup)

const { getByTestId } = render(<MainLoader />)

test('renders MainLoader', () => {
  expect(getByTestId('MainLoader')).toBeDefined
})
