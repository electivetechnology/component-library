import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Avatar from 'atoms/Avatar/Avatar'

afterEach(cleanup)

const { getByTestId } = render(<Avatar />)

test('renders Avatar', () => {
  expect(getByTestId('Avatar')).toBeDefined
})
