import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Channels from './Channels'

afterEach(cleanup)

const { getByTestId } = render(<Channels sms={true} webChat={true} phone={true} />)

test('renders Channels', () => {
  expect(getByTestId('Channels')).toBeDefined
})
