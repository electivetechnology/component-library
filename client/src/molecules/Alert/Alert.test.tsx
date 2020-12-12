import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Alert from 'molecules/Alert/Alert'
import ProviderWrapper from 'utils/ProviderWrapper'
import AlertMessage from 'molecules/Alert/AlertMessage'
import AlertContent from 'molecules/Alert/AlertContent'
import { successStore } from 'molecules/Alert/mocks'

afterEach(cleanup)

const onClose = jest.fn()

test('renders Alert', () => {
  const { getByTestId } = render(
    <ProviderWrapper store={successStore}>
      <Alert />
    </ProviderWrapper>
  )
  expect(getByTestId('Alert')).toBeDefined
})

test('renders AlertContent', () => {
  const { getByTestId } = render(
    <AlertContent variant={'success'} message={''} onClose={onClose} />
  )
  expect(getByTestId('AlertContent')).toBeDefined
})

test('renders AlertMessage', () => {
  const { getByTestId } = render(
    <AlertMessage variant={'success'} message={''} />
  )
  expect(getByTestId('AlertMessage')).toBeDefined
})
