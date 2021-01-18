import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { FormSelect } from 'components/common/Form'
import { FormContext } from 'components/common/Form/Form'

const { getByLabelText } = screen

const onBlur = jest.fn()
const dispatch = jest.fn()

const option = {
  label: 'option label',
  value: 'someValue',
}

const input = {
  type: 'select',
  label: 'Some select',
  value: 'someValue',
  selected: option,
  options: [option],
}

const renderComponent = () => {
  return render(
    <FormContext.Provider
      value={{
        onBlur,
        dispatch,
      }}>
      <FormSelect input={input} name={'select'} readOnly={false} />
    </FormContext.Provider>
  )
}

test('displays label', () => {
  renderComponent()
  expect(getByLabelText('Some select')).toBeDefined
})
