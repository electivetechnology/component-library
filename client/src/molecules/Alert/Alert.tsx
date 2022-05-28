import React, { useContext } from 'react'
import Snackbar from '@mui/material/Snackbar'
import { CloseWrapper, useStyles } from 'molecules/Alert/styles'
import { AlertContext } from './base'
import MuiAlert, { AlertColor } from '@mui/material/Alert'

const Alert = () => {
  const {
    alert: { alertType, message },
    handleClose
  } = useContext(AlertContext)

  const classes = useStyles()

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
      {!!alertType ? (
        <MuiAlert
          onClose={handleClose}
          severity={alertType}
          sx={{ width: '100%' }}
        >
          {message}
        </MuiAlert>
      ) : (
        <CloseWrapper />
      )}
    </Snackbar>
  )
}

export default Alert
