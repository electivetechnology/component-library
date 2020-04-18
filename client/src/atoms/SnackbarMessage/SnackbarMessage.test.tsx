import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import SnackbarMessage from './SnackbarMessage'
import { AlertTypeConst } from 'atoms/Alert/alertType'

afterEach(cleanup)

const onClose = jest.fn()

const { getAllByTestId } = render(<SnackbarMessage variant={AlertTypeConst.SUCCESS} message={''}/>)

test('renders SnackbarMessage', () => {
  expect(getAllByTestId('SnackbarMessage')).toBeDefined
})
