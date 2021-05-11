import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Banner from 'molecules/Banner/Banner'

afterEach(cleanup)

const setOpen = () =>

test('renders Banner no close', () => {
  const { getByTestId } = render(<Banner open={true} setOpen={setOpen} />)
  expect(getByTestId('Banner')).toBeDefined
})

test('renders Banner close', () => {
  const { getByTestId } = render(<Banner open={true} setOpen={setOpen} />)
  expect(getByTestId('Banner')).toBeDefined
})
