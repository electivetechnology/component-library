import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import CloseButton from 'components/atoms/CloseButton/CloseButton'

afterEach(cleanup)

const onClose = jest.fn()

const { getAllByTestId } = render(<CloseButton onClose={onClose} />)

test('renders CloseButton', () => {
  expect(getAllByTestId('CloseButton')).toBeDefined
})
