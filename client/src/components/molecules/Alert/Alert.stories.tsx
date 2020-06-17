import React  from 'react'
import Alert from './Alert'
import ProviderWrapper from 'utils/ProviderWrapper'
import AlertContent from './AlertContent'
import { action } from '@storybook/addon-actions'
import AlertMessage from './AlertMessage'
import { AlertType, ALERT } from './alertType'

export default {
  title: 'molecules/Alert',
  component: Alert
}

const alertStore = (value: AlertType) => [
  {
    key: ALERT,
    value
  }
]

const successStore = alertStore({ type: 'success', message: 'Success Alert' })
const warningStore = alertStore({ type: 'warning', message: 'Warning Alert' })
const infoStore = alertStore({ type: 'info', message: 'Info Alert' })
const errorStore = alertStore({ type: 'error', message: 'Error Alert' })
const emptyStore = alertStore({ type: '', message: '' })

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
export const EmptyAlert = () => (
  <ProviderWrapper store={emptyStore}>
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
