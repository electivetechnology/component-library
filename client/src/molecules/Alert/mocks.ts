import { AlertTypeType } from 'molecules/Alert/base'
import { action } from '@storybook/addon-actions'

const handleClose = () => {
  action('close')
}

const setAlert = () => {
  action('set')
}

export const successContextMock = {
  alert: {
    alertType: 'success' as AlertTypeType,
    message: 'Success Alert'
  },
  setAlert,
  handleClose
}

export const warningContextMock = {
  alert: {
    alertType: 'warning' as AlertTypeType,
    message: 'Warning Alert'
  },
  setAlert,
  handleClose
}

export const infoContextMock = {
  alert: {
    alertType: 'info' as AlertTypeType,
    message: 'Info Alert'
  },
  setAlert,
  handleClose
}

export const errorContextMock = {
  alert: {
    alertType: 'error' as AlertTypeType,
    message: 'Error Alert'
  },
  setAlert,
  handleClose
}

export const emptyContextMock = {
  alert: {
    alertType: '' as AlertTypeType,
    message: ''
  },
  setAlert,
  handleClose
}
