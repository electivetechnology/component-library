import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import PopUp from 'molecules/PopUp/PopUp'
import { action } from '@storybook/addon-actions'

afterEach(cleanup)

test('renders PopUp no close', () => {
  const { getByTestId } = render(
    <PopUp open={true} setOpen={action('open')}>Do not allow close</PopUp>
  )
  expect(getByTestId('PopUp')).toBeDefined
})

test('renders PopUp close', () => {
  const { getByTestId } = render(
    <PopUp open={true} setOpen={action('open')} isCloseable>Allow close</PopUp>
  )
  expect(getByTestId('PopUp')).toBeDefined
})
