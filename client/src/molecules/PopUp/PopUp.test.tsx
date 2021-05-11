import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import PopUp from 'molecules/PopUp/PopUp'

afterEach(cleanup)

const setOpen = () =>

test('renders PopUp no close', () => {
  const { getByTestId } = render(<PopUp open={true} setOpen={setOpen}/>)
  expect(getByTestId('PopUp')).toBeDefined
})

test('renders PopUp close', () => {
  const { getByTestId } = render(<PopUp open={true} setOpen={setOpen}/>)
  expect(getByTestId('PopUp')).toBeDefined
})
