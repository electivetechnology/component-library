import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'

afterEach(cleanup)

const onClick = jest.fn()

const { getAllByTestId } = render(<Button text={'text'} onClick={onClick} theme={'primary'} />)

test('renders Button', () => {
  expect(getAllByTestId('Button')).toBeDefined
})
