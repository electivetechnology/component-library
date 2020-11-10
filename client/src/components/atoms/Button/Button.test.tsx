import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'

afterEach(cleanup)

const onClick = jest.fn()

const { getByTestId } = render(
  <Button label={'text'} onClick={onClick} theme={'primary'} />
)

test('renders Button', () => {
  expect(getByTestId('Button')).toBeDefined
})
