import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import { resetAlert, getAlert } from './reducer'
import AlertContent from './AlertContent'
import { CloseWrapper } from './styles'

const Alert = () => {
  const { type, message } = useSelector(getAlert)
  const dispatch = useDispatch()
  const onCloseAlert = () => {
    dispatch(resetAlert())
  }

  return (
    <Snackbar
      data-testid="Alert"
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={!!type}
      onClose={onCloseAlert}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}>
      {!!type ? (
        <AlertContent variant={type} message={message} onClose={onCloseAlert}/>
      ) : (
        <CloseWrapper />
      )}
    </Snackbar>
  )
}

export default Alert
