import React, { FunctionComponent, useContext } from 'react'
import { useStyles } from 'molecules/Alert/styles'
import SnackbarContent from '@mui/material/SnackbarContent'
import { CloseButton } from 'atoms'
import AlertMessage from 'molecules/Alert/AlertMessage'
import { AlertContext } from 'molecules/Alert/base'

const AlertContent: FunctionComponent = () => {
  const {
    alert: { alertType },
    handleClose
  } = useContext(AlertContext)

  const classes = useStyles()

  return (
    <SnackbarContent
      data-testid='AlertContent'
      className={!!alertType ? classes[alertType] : ''}
      aria-describedby='client-snackbar'
      message={<AlertMessage />}
      action={<CloseButton handleClose={handleClose} />}
    />
  )
}

export default AlertContent
