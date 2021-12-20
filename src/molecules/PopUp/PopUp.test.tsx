import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import PopUp from 'molecules/PopUp/PopUp'

afterEach(cleanup)

test('renders PopUp no close', () => {
  const { getByTestId } = render(
    <div id='pop-up'>
      <PopUp open={true} setOpen={() => {}} />
    </div>
  )
  expect(getByTestId('PopUp')).toBeDefined
})
