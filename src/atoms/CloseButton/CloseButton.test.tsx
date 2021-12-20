import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import CloseButton from 'atoms/CloseButton/CloseButton'

afterEach(cleanup)

const handleClose = jest.fn()

const { getByTestId } = render(<CloseButton handleClose={handleClose} />)

test('renders CloseButton', () => {
  expect(getByTestId('CloseButton')).toBeDefined
})
