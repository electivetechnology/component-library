import React from 'react'
import Alert from 'molecules/Alert/Alert'
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
