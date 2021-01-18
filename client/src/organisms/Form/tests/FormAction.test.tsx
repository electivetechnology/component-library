import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import {
  Form,
  FormAction,
  FormInfo,
  FormInput,
  FormRow,
  FormTitle
} from 'organisms/Form'

const { getAllByTestId, getByTestId } = screen

const handleAction = jest.fn()

const renderComponent = () => {
  render(
    <Form
      value={{
        handleAction
      }}
    >
      <FormAction input={{ label: 'some label' }} />
    </Form>
  )
}

test('displays label', () => {
  renderComponent()
  expect(getAllByTestId('FormAction')).toBeDefined
})

test('handles handleAction', () => {
  renderComponent()
  fireEvent.click(getByTestId(`FormAction`))
  expect(handleAction).toBeCalled()
})
