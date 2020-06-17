import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Alert from './Alert'
import ProviderWrapper from 'utils/ProviderWrapper'
import AlertMessage from './AlertMessage'
import AlertContent from './AlertContent'
import { ALERT } from './alertType'

afterEach(cleanup)

const store = [
  { key: ALERT, value: {alertType: 'success', message: 'Success Message'} },
]
const onClose = jest.fn()

test('renders Alert', () => {
  const { getByTestId } = render(<ProviderWrapper store={store}><Alert/></ProviderWrapper>)
  expect(getByTestId('Alert')).toBeDefined
})

test('renders AlertContent', () => {
  const { getByTestId } = render(<AlertContent variant={'success'} message={''} onClose={onClose}/>)
  expect(getByTestId('AlertContent')).toBeDefined
})

test('renders AlertMessage', () => {
  const { getByTestId } = render(<AlertMessage variant={'success'} message={''}/>)
  expect(getByTestId('AlertMessage')).toBeDefined
})

