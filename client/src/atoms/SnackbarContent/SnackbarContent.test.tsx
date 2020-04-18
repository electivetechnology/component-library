import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import SnackbarContent from './SnackbarContent'
import { AlertTypeConst } from 'atoms/Alert/alertType'

afterEach(cleanup)

const onClose = jest.fn()

const { getAllByTestId } = render(<SnackbarContent variant={AlertTypeConst.SUCCESS} message={''} onClose={onClose}/>)

test('renders SnackbarContent', () => {
  expect(getAllByTestId('SnackbarContent')).toBeDefined
})
