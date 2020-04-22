import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Alert from './Alert'
import ProviderWrapper from 'utils/ProviderWrapper'
import { SchemaConst } from 'utils/baseSchema'
import { AlertTypeConst } from './alertType'
import AlertMessage from './AlertMessage'
import AlertContent from './AlertContent'

afterEach(cleanup)

const store = [
  { key: SchemaConst.ALERT, value: {alertType: AlertTypeConst.SUCCESS, message: 'Success Message'} },
]
const onClose = jest.fn()

test('renders Alert', () => {
  const { getAllByTestId } = render(<ProviderWrapper store={store}><Alert/></ProviderWrapper>)
  expect(getAllByTestId('Alert')).toBeDefined
})

test('renders AlertContent', () => {
  const { getAllByTestId } = render(<AlertContent variant={AlertTypeConst.SUCCESS} message={''} onClose={onClose}/>)
  expect(getAllByTestId('AlertContent')).toBeDefined
})

test('renders AlertMessage', () => {
  const { getAllByTestId } = render(<AlertMessage variant={AlertTypeConst.SUCCESS} message={''}/>)
  expect(getAllByTestId('AlertMessage')).toBeDefined
})

