import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import PopUp from './PopUp'
import ProviderWrapper from 'utils/ProviderWrapper'
import { refreshStore } from './mocks'

afterEach(cleanup)

test('renders PopUp', () => {
  const { getByTestId } = render(<ProviderWrapper store={refreshStore}><PopUp/></ProviderWrapper>)
  expect(getByTestId('PopUp')).toBeDefined
})

