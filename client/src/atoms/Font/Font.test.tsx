import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Font from 'atoms/Font/Font'

afterEach(cleanup)

const { getByTestId } = render(<Font variant={'h1'} />)

test('renders Font', () => {
  expect(getByTestId('Font')).toBeDefined
})
