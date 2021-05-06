import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Banner from 'molecules/Banner/Banner'
import BannerMessage from 'molecules/Banner/BannerMessage'
import BannerContent from 'molecules/Banner/BannerContent'
import { successContextMock } from 'molecules/Banner/mocks'
import { BannerContext } from 'molecules/Banner/base'

afterEach(cleanup)

test('renders Banner', () => {
  const { getByTestId } = render(
    <BannerContext.Provider value={successContextMock}>
      <Banner />
    </BannerContext.Provider>
  )
  expect(getByTestId('Banner')).toBeDefined
})

test('renders BannerContent', () => {
  const { getByTestId } = render(
    <BannerContext.Provider value={successContextMock}>
      <BannerContent />
    </BannerContext.Provider>
  )
  expect(getByTestId('BannerContent')).toBeDefined
})

test('renders BannerMessage', () => {
  const { getByTestId } = render(
    <BannerContext.Provider value={successContextMock}>
      <BannerMessage />
    </BannerContext.Provider>
  )
  expect(getByTestId('BannerMessage')).toBeDefined
})
