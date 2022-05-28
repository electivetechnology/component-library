import { createContext } from 'react'
import { AlertColor } from '@mui/material/Alert'

export interface AlertType {
  alertType: AlertColor
  message: string
}

export interface AlertContextType {
  alert: AlertType
  setAlert: Function
  handleClose: any
}

export const AlertContext = createContext<AlertContextType>(
  {} as AlertContextType
)
