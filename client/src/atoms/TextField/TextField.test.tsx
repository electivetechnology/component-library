import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import TextField from 'atoms/TextField/TextField'

afterEach(cleanup)

const { getByTestId } = render(
  <TextField
    onChange={null}
    label={'label'}
    variant={'standard'}
    id={'1'}
    margin={'none'}
  />
)

test('renders TextField', () => {
  expect(getByTestId('TextField')).toBeDefined
})
