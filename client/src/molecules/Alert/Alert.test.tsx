import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Alert from 'molecules/Alert/Alert'
import { successContextMock } from 'molecules/Alert/mocks'
import { AlertContext } from 'molecules/Alert/base'

afterEach(cleanup)

test('renders Alert', () => {
  const { getByTestId } = render(
    <AlertContext.Provider value={successContextMock}>
      <Alert />
    </AlertContext.Provider>
  )
  expect(getByTestId('Alert')).toBeDefined
})
