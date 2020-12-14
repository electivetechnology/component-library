import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import CloseButton from 'atoms/CloseButton/CloseButton'

afterEach(cleanup)

const onClose = jest.fn()

const { getByTestId } = render(<CloseButton onClose={onClose} />)

test('renders CloseButton', () => {
  expect(getByTestId('CloseButton')).toBeDefined
})
