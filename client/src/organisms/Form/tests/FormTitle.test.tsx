import React from 'react'
import { render, screen } from '@testing-library/react'
import { FormTitle } from 'components/common/Form'

const { queryByText } = screen

render(<FormTitle label={'title'} />)

test('renders FormTitle', () => {
  expect(queryByText('title')).toBeDefined
})
