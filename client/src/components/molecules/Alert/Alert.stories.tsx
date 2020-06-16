import React from 'react'
import Alert from './Alert'
import ProviderWrapper from 'utils/ProviderWrapper'
import { SchemaConst } from 'utils/baseSchema'
import AlertContent from './AlertContent'
import { action } from '@storybook/addon-actions'
import AlertMessage from './AlertMessage'

export default {
  title: 'molecules/Alert',
  component: Alert,
}

const successStore = [
  {
    key: SchemaConst.ALERT,
    value: { alertType: 'success', message: 'Success Alert' },
  },
]

const warningStore = [
  {
    key: SchemaConst.ALERT,
    value: { alertType: 'warning', message: 'Warning Alert' },
  },
]

const infoStore = [
  {
    key: SchemaConst.ALERT,
    value: { alertType: 'info', message: 'Info Alert' },
  },
]

const errorStore = [
  {
    key: SchemaConst.ALERT,
    value: { alertType: 'error', message: 'Error Alert' },
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
    variant={'success'}
    message={'Success Content'}
    onClose={action('close')}
  />
)
export const WarningContent = () => (
  <AlertContent
    variant={'warning'}
    message={'Warning Content'}
    onClose={action('close')}
  />
)
export const InfoContent = () => (
  <AlertContent
    variant={'info'}
    message={'Info Content'}
    onClose={action('close')}
  />
)
export const ErrorContent = () => (
  <AlertContent
    variant={'error'}
    message={'Error Content'}
    onClose={action('close')}
  />
)

export const SuccessMessage = () => (
  <AlertMessage variant={'success'} message={'Success Message'} />
)
export const WarningMessage = () => (
  <AlertMessage variant={'warning'} message={'Warning Message'} />
)
export const InfoMessage = () => (
  <AlertMessage variant={'info'} message={'Info Message'} />
)
export const ErrorMessage = () => (
  <AlertMessage variant={'error'} message={'Error Message'} />
)
