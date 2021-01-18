import React from 'react'
import { render, screen } from '@testing-library/react'
import { Form } from 'components/common/Form'
import { basicFormMock } from 'components/common/Form/mock'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'setupTests'

const {
  getAllByTestId,
  getByLabelText,
  getByText,
  getByPlaceholderText,
} = screen

const renderForm = (formMock: any) => {
  return render(
    <Router>
      <Provider store={store}>
        <Form inputs={formMock} />
      </Provider>
    </Router>
  )
}

test('renders basic form', () => {
  renderForm(basicFormMock)
  expect(getAllByTestId('FormTitle')).toBeDefined
  expect(getByLabelText('Form Text')).toBeDefined
  expect(getByLabelText('Form Select')).toBeDefined
  expect(getByLabelText('Form Text Number')).toBeDefined
  expect(getByText('Form Date')).toBeDefined
  expect(getAllByTestId('FormCheckbox')).toBeDefined
  expect(getByPlaceholderText('Form Phone')).toBeDefined
  expect(getByLabelText('Form Colour')).toBeDefined
  expect(getByText('Form Info')).toBeDefined
  expect(getByText('25/03/2019 14:39')).toBeDefined
  expect(getAllByTestId('FormDelete')).toBeDefined
})
