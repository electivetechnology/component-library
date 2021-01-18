import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { FormDelete, FormText } from 'components/common/Form'
import { FormContext } from 'components/common/Form/Form'

const { getByTestId, getAllByTestId } = screen

const handleDelete = jest.fn()

const renderComponent = () => {
  return render(
    <FormContext.Provider
      value={{
        handleDelete,
      }}>
      <FormDelete id={'id'} />
    </FormContext.Provider>
  )
}

test('displays label', () => {
  renderComponent()
  expect(getAllByTestId('FormDelete')).toBeDefined
})

test('handles handleDelete', () => {
  renderComponent()
  fireEvent.click(getByTestId(`FormDelete`))
  expect(handleDelete).toBeCalled()
})
