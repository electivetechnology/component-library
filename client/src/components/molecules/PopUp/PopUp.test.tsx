import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import PopUp from 'components/molecules/PopUp/PopUp'
import ProviderWrapper from 'utils/ProviderWrapper'

afterEach(cleanup)

const store = [
  { key: 'popUp', value: {popUpType: 'refresh'} },
]

test('renders PopUp', () => {
  const { getByTestId } = render(<ProviderWrapper store={store}><PopUp/></ProviderWrapper>)
  expect(getByTestId('PopUp')).toBeDefined
})

