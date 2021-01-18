import React from 'react'
import { render, screen } from '@testing-library/react'
import { FormInfo } from 'components/common/Form'

const { queryByText } = screen

render(<FormInfo input={{ type: 'info', label: 'info', value: 'value' }} />)

test('renders FormInfo', () => {
  expect(queryByText('info')).toBeDefined
})
