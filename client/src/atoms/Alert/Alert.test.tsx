import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Alert from './Alert'
import ProviderWrapper from 'utils/ProviderWrapper'
import { SchemaConst } from 'utils/baseSchema'
import { AlertTypeConst } from './alertType'

afterEach(cleanup)

const store = [
  { key: SchemaConst.ALERT, value: {alertType: AlertTypeConst.SUCCESS, message: 'Success Message'} },
]

const { getAllByTestId } = render(<ProviderWrapper store={store}><Alert/></ProviderWrapper>)

test('renders Alert', () => {
  expect(getAllByTestId('Alert')).toBeDefined
})
