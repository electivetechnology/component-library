import React from 'react'
import Banner from 'molecules/Banner/Banner'
import BannerContent from 'molecules/Banner/BannerContent'
import BannerMessage from 'molecules/Banner/BannerMessage'
import {
  successContextMock,
  warningContextMock,
  infoContextMock,
  errorContextMock,
  emptyContextMock
} from 'molecules/Banner/mocks'
import { BannerContext } from './base'

export default {
  title: 'molecules/Banner',
  component: Banner
}

export const SuccessBanner = () => (
  <BannerContext.Provider value={successContextMock}>
    <Banner />
  </BannerContext.Provider>
)

export const WarningBanner = () => (
  <BannerContext.Provider value={warningContextMock}>
    <Banner />
  </BannerContext.Provider>
)
export const InfoBanner = () => (
  <BannerContext.Provider value={infoContextMock}>
    <Banner />
  </BannerContext.Provider>
)
export const ErrorBanner = () => (
  <BannerContext.Provider value={errorContextMock}>
    <Banner />
  </BannerContext.Provider>
)
export const EmptyBanner = () => (
  <BannerContext.Provider value={emptyContextMock}>
    <Banner />
  </BannerContext.Provider>
)

export const SuccessContent = () => (
  <BannerContext.Provider value={successContextMock}>
    <BannerContent />
  </BannerContext.Provider>
)

export const WarningContent = () => (
  <BannerContext.Provider value={warningContextMock}>
    <BannerContent />
  </BannerContext.Provider>
)

export const InfoContent = () => (
  <BannerContext.Provider value={infoContextMock}>
    <BannerContent />
  </BannerContext.Provider>
)

export const ErrorContent = () => (
  <BannerContext.Provider value={errorContextMock}>
    <BannerContent />
  </BannerContext.Provider>
)

export const SuccessMessage = () => (
  <BannerContext.Provider value={successContextMock}>
    <BannerMessage />
  </BannerContext.Provider>
)

export const InfoMessage = () => (
  <BannerContext.Provider value={infoContextMock}>
    <BannerMessage />
  </BannerContext.Provider>
)
export const ErrorMessage = () => (
  <BannerContext.Provider value={errorContextMock}>
    <BannerMessage />
  </BannerContext.Provider>
)
