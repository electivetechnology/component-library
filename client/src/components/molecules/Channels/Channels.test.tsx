import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Channels from './Channels'

afterEach(cleanup)

const { getAllByTestId } = render(<Channels />)

test('renders Channels', () => {
  expect(getAllByTestId('Channels')).toBeDefined
})
