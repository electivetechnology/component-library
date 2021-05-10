import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import PopUp from 'molecules/PopUp/PopUp'

afterEach(cleanup)

test('renders PopUp no close', () => {
  const { getByTestId } = render(<PopUp />)
  expect(getByTestId('PopUp')).toBeDefined
})

test('renders PopUp close', () => {
  const { getByTestId } = render(<PopUp />)
  expect(getByTestId('PopUp')).toBeDefined
})
