import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { FormCheckbox } from 'components/common/Form'
import { FormContext } from 'components/common/Form/Form'

const { getByLabelText, getByText } = screen

const onBlur = jest.fn()
const dispatch = jest.fn()
const input = {
  type: 'checkbox',
  label: 'Some text',
  value: false,
}

const renderComponent = () => {
  return render(
    <FormContext.Provider
      value={{
        onBlur,
        dispatch,
      }}>
      <FormCheckbox input={input} name={'checkbox'} readOnly={false} />
    </FormContext.Provider>
  )
}

test('displays label', () => {
  renderComponent()
  expect(getByText('Some text')).toBeDefined
})

test('handles onBlur', () => {
  renderComponent()
  fireEvent.click(getByLabelText(`Some text`))
  expect(dispatch).toBeCalled()
})
