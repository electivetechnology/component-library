import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Checkbox from './Checkbox'

const { getByTestId } = render(<Checkbox onChange={undefined} />)

test('displays Checkbox', () => {
  expect(getByTestId('Checkbox')).toBeDefined
})
