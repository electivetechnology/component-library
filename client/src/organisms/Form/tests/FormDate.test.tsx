import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { FormDate } from 'components/common/Form'

const { queryByText } = screen

const input = {
  type: 'date',
  label: 'Some date',
  value: {
    date: 'some date',
  },
}

render(<FormDate input={input} name={'date'} readOnly={false} />)

test('renders FormDate', () => {
  expect(queryByText('date')).toBeDefined
})
