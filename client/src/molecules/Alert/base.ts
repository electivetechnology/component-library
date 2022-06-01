import { createContext } from 'react'
import { AlertColor } from '@mui/material/Alert'

export type AlertTypeType = AlertColor | undefined

export interface AlertType {
  alertType: AlertTypeType
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
