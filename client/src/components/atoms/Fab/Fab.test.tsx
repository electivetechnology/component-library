import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Fab from 'components/atoms/Fab/Fab'

afterEach(cleanup)

const { getByTestId } = render(<Fab icon={'text'}/>)

test('renders Fab', () => {
  expect(getByTestId('Fab')).toBeDefined
})
