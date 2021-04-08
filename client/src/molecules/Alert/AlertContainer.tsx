import React, { FC, useState } from 'react'
import { AlertContext, AlertTypeType } from './base'

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

  return (
    <AlertContext.Provider
      value={{
        alert,
        setAlert,
        handleClose
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContainer
