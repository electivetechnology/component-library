import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import AutoComplete from './AutoComplete'

afterEach(cleanup)

const { getByTestId } = render(
  <AutoComplete
    options={[{ label: 'Label', value: 'Value' }]}
    placeholder={'PlaceHolder Text'}
  />
)

test('renders AutoComplete', () => {
  expect(getByTestId('AutoComplete')).toBeDefined
})
