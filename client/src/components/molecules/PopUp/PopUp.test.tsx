import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import PopUp from './PopUp'
import ProviderWrapper from 'utils/ProviderWrapper'
import { noCloseStore, closeStore } from './mocks'

afterEach(cleanup)

test('renders PopUp no close', () => {
  const { getByTestId } = render(
    <ProviderWrapper store={noCloseStore}>
      <PopUp />
    </ProviderWrapper>
  )
  expect(getByTestId('PopUp')).toBeDefined
})

test('renders PopUp close', () => {
  const { getByTestId } = render(
    <ProviderWrapper store={closeStore}>
      <PopUp />
    </ProviderWrapper>
  )
  expect(getByTestId('PopUp')).toBeDefined
})
