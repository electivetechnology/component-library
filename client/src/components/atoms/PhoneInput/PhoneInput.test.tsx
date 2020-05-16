import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import PhoneInput from './PhoneInput'

afterEach(cleanup)

const onClick = jest.fn()

const { getByTestId } = render(<PhoneInput />)

test('renders PhoneInput', () => {
  expect(getByTestId('PhoneInput')).toBeDefined
})
