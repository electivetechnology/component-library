import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { FormPhone } from 'components/common/Form'
import { FormContext } from 'components/common/Form/Form'

const { getByPlaceholderText } = screen

const onBlur = jest.fn()
const dispatch = jest.fn()
const input = {
  type: 'phone',
  label: 'Some text',
  value: 'someValue',
}

const renderComponent = () => {
  return render(
    <FormContext.Provider
      value={{
        onBlur,
        dispatch,
      }}>
      <FormPhone input={input} name={'input'} readOnly={false} />
    </FormContext.Provider>
  )
}

test('displays label', () => {
  renderComponent()
  expect(getByPlaceholderText('Some text')).toBeDefined
})
