import React from 'react'
import Alert from './Alert'
import ProviderWrapper from 'utils/ProviderWrapper'
import { SchemaConst } from 'utils/baseSchema'
import { AlertTypeConst } from './alertType'
import AlertContent from './AlertContent'
import { action } from '@storybook/addon-actions'
import AlertMessage from './AlertMessage'

export default {
  title: 'Alert',
  component: Alert,
}

const successStore = [
  {
    key: SchemaConst.ALERT,
    value: { alertType: AlertTypeConst.SUCCESS, message: 'Success Alert' },
  },
]

const warningStore = [
  {
    key: SchemaConst.ALERT,
    value: { alertType: AlertTypeConst.WARNING, message: 'Warning Alert' },
  },
]

const infoStore = [
  {
    key: SchemaConst.ALERT,
    value: { alertType: AlertTypeConst.INFO, message: 'Info Alert' },
  },
]

const errorStore = [
  {
    key: SchemaConst.ALERT,
    value: { alertType: AlertTypeConst.ERROR, message: 'Error Alert' },
  },
]

export const SuccessAlert = () => (
  <ProviderWrapper store={successStore}>
    <Alert />
  </ProviderWrapper>
)
export const WarningAlert = () => (
  <ProviderWrapper store={warningStore}>
    <Alert />
  </ProviderWrapper>
)
export const InfoAlert = () => (
  <ProviderWrapper store={infoStore}>
    <Alert />
  </ProviderWrapper>
)
export const ErrorAlert = () => (
  <ProviderWrapper store={errorStore}>
    <Alert />
  </ProviderWrapper>
)

export const SuccessContent = () => (
  <AlertContent
    variant={AlertTypeConst.SUCCESS}
    message={'Success Content'}
    onClose={action('close')}
  />
)
export const WarningContent = () => (
  <AlertContent
    variant={AlertTypeConst.WARNING}
    message={'Warning Content'}
    onClose={action('close')}
  />
)
export const InfoContent = () => (
  <AlertContent
    variant={AlertTypeConst.INFO}
    message={'Info Content'}
    onClose={action('close')}
  />
)
export const ErrorContent = () => (
  <AlertContent
    variant={AlertTypeConst.ERROR}
    message={'Error Content'}
    onClose={action('close')}
  />
)

export const SuccessMessage = () => (
  <AlertMessage variant={AlertTypeConst.SUCCESS} message={'Success Message'} />
)
export const WarningMessage = () => (
  <AlertMessage variant={AlertTypeConst.WARNING} message={'Warning Message'} />
)
export const InfoMessage = () => (
  <AlertMessage variant={AlertTypeConst.INFO} message={'Info Message'} />
)
export const ErrorMessage = () => (
  <AlertMessage variant={AlertTypeConst.ERROR} message={'Error Message'} />
)
