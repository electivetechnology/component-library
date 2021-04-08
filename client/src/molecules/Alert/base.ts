import { createContext } from 'react'

export type AlertTypeType = 'success' | 'warning' | 'info' | 'error' | ''

export interface AlertType {
  alertType: AlertTypeType
  message: string
}

export interface AlertContextType {
  alert: AlertType
  setAlert: Function
  handleClose: any
}

export const AlertContext = createContext<AlertContextType>({} as AlertContextType)
