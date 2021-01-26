import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Form, FormInput } from 'index'

afterEach(cleanup)

const handleUpdate = jest.fn()

const { getByTestId } = render(
  <Form handleUpdate={handleUpdate}>
    <FormInput
      label={'Text Area Input '}
      name={'Text Area Input'}
      value={'Input'}
      type={'text'}
    />
  </Form>
)

test('renders TextField', () => {
  expect(getByTestId('FormText')).toBeDefined
})
