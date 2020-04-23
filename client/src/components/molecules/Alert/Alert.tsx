import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import { resetAlert, getAlert } from './alertReducer'
import AlertContent from './AlertContent'
import { CloseWrapper } from './styles'

const Alert = () => {
  const { alertType, message } = useSelector(getAlert)
  const dispatch = useDispatch()
  const onCloseAlert = () => {
    dispatch(resetAlert())
  }

  return (
    <Snackbar
      data-testid="Alert"
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={!!alertType}
      onClose={onCloseAlert}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}>
      {!!alertType ? (
        <AlertContent variant={alertType} message={message} onClose={onCloseAlert}/>
      ) : (
        <CloseWrapper />
      )}
    </Snackbar>
  )
}

export default Alert
