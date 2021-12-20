import React, { useContext } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import AlertContent from 'molecules/Alert/AlertContent'
import { CloseWrapper } from 'molecules/Alert/styles'
import { AlertContext } from 'molecules/Alert/base'

const Alert = () => {
  const {
    alert: { alertType },
    handleClose
  } = useContext(AlertContext)

  return (
    <Snackbar
      data-testid='Alert'
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={!!alertType}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id'
      }}
    >
      {!!alertType ? <AlertContent /> : <CloseWrapper />}
    </Snackbar>
  )
}

export default Alert
