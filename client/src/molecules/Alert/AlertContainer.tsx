import React, { FC, useState } from 'react'
import { AlertContext, AlertTypeType } from './base'

type Props = {
  children: any
}
const AlertContainer: FC<Props> = ({ children }) => {
  const [alert, setAlert] = useState({
    alertType: '' as AlertTypeType,
    message: ''
  })

  const handleClose = () => {
    setAlert({
      alertType: undefined,
      message: ''
    })
  }

  const handleAlert = (alertType: AlertTypeType, message: string) => {
    setAlert({
      alertType,
      message
    })
  }

  return (
    <AlertContext.Provider
      value={{
        alert,
        setAlert: handleAlert,
        handleClose
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContainer
