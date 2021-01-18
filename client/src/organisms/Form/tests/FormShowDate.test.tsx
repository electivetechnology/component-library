import React from 'react'
import { render, screen } from '@testing-library/react'
import { FormShowDate } from 'components/common/Form'

const { queryByText } = screen

render(
  <FormShowDate
    input={{ type: 'showDate', label: 'showDate', value: 'value' }}
  />
)

test('renders FormShowDate', () => {
  expect(queryByText('showDate')).toBeDefined
})
