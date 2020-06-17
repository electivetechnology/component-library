import { ALERT, AlertType } from './types'

const alertStore = (value: AlertType) => [
  {
    key: ALERT,
    value
  }
]

export const successStore = alertStore({ type: 'success', message: 'Success Alert' })
export const warningStore = alertStore({ type: 'warning', message: 'Warning Alert' })
export const infoStore = alertStore({ type: 'info', message: 'Info Alert' })
export const errorStore = alertStore({ type: 'error', message: 'Error Alert' })
export const emptyStore = alertStore({ type: '', message: '' })
