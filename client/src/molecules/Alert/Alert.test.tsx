import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Alert from 'molecules/Alert/Alert'
import AlertMessage from 'molecules/Alert/AlertMessage'
import AlertContent from 'molecules/Alert/AlertContent'
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

test('renders AlertContent', () => {
  const { getByTestId } = render(
    <AlertContext.Provider value={successContextMock}>
      <AlertContent />
    </AlertContext.Provider>
  )
  expect(getByTestId('AlertContent')).toBeDefined
})

test('renders AlertMessage', () => {
  const { getByTestId } = render(
    <AlertContext.Provider value={successContextMock}>
      <AlertMessage />
    </AlertContext.Provider>
  )
  expect(getByTestId('AlertMessage')).toBeDefined
})
