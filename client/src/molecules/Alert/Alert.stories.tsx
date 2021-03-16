import React from 'react'
import Alert from 'molecules/Alert/Alert'
import AlertContent from 'molecules/Alert/AlertContent'

import AlertMessage from 'molecules/Alert/AlertMessage'
import {
  successContextMock,
  warningContextMock,
  infoContextMock,
  errorContextMock,
  emptyContextMock
} from 'molecules/Alert/mocks'
import { AlertContext } from './base'

export default {
  title: 'molecules/Alert',
  component: Alert
}

export const SuccessAlert = () => (
  <AlertContext.Provider value={successContextMock}>
    <Alert />
  </AlertContext.Provider>
)

export const WarningAlert = () => (
  <AlertContext.Provider value={warningContextMock}>
    <Alert />
  </AlertContext.Provider>
)
export const InfoAlert = () => (
  <AlertContext.Provider value={infoContextMock}>
    <Alert />
  </AlertContext.Provider>
)
export const ErrorAlert = () => (
  <AlertContext.Provider value={errorContextMock}>
    <Alert />
  </AlertContext.Provider>
)
export const EmptyAlert = () => (
  <AlertContext.Provider value={emptyContextMock}>
    <Alert />
  </AlertContext.Provider>
)

export const SuccessContent = () => (
  <AlertContext.Provider value={successContextMock}>
    <AlertContent />
  </AlertContext.Provider>
)

export const WarningContent = () => (
  <AlertContext.Provider value={warningContextMock}>
    <AlertContent />
  </AlertContext.Provider>
)

export const InfoContent = () => (
  <AlertContext.Provider value={infoContextMock}>
    <AlertContent />
  </AlertContext.Provider>
)

export const ErrorContent = () => (
  <AlertContext.Provider value={errorContextMock}>
    <AlertContent />
  </AlertContext.Provider>
)

export const SuccessMessage = () => (
  <AlertContext.Provider value={successContextMock}>
    <AlertMessage />
  </AlertContext.Provider>
)

export const InfoMessage = () => (
  <AlertContext.Provider value={infoContextMock}>
    <AlertMessage />
  </AlertContext.Provider>
)
export const ErrorMessage = () => (
  <AlertContext.Provider value={errorContextMock}>
    <AlertMessage />
  </AlertContext.Provider>
)
