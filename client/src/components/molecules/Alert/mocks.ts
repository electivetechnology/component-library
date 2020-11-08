import { ALERT, AlertType } from './types'

const alertStore = (value: AlertType) => [
  {
    key: ALERT,
    value
  }
]

export const successStore = alertStore({ alertType: 'success', message: 'Success Alert' })
export const warningStore = alertStore({ alertType: 'warning', message: 'Warning Alert' })
export const infoStore = alertStore({ alertType: 'info', message: 'Info Alert' })
export const errorStore = alertStore({ alertType: 'error', message: 'Error Alert' })
export const emptyStore = alertStore({ alertType: '', message: '' })
