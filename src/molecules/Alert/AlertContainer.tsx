import React, { FC, useState } from 'react'
import { AlertContext, AlertTypeType } from 'molecules/Alert/base'

const AlertContainer: FC = ({ children }) => {
  const [alert, setAlert] = useState({
    alertType: '' as AlertTypeType,
    message: ''
  })

  const handleClose = () => {
    setAlert({
      alertType: '',
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
