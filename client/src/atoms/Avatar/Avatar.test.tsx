import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Avatar from './Avatar'

afterEach(cleanup)

const { getAllByTestId } = render(<Avatar />)

test('renders Avatar', () => {
  expect(getAllByTestId('Avatar')).toBeDefined
})
