import React, { FunctionComponent } from 'react'
import { useStyles } from './styles'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import SnackbarAction from 'atoms/CloseButton/CloseButton'
import AlertMessage from 'atoms/Alert/AlertMessage'
import { AlertTypeConst } from 'atoms/Alert/alertType'

type Props = {
  variant: string
  message: string
  onClose: Function
}

const AlertContent: FunctionComponent<Props> = ({
  variant = AlertTypeConst.SUCCESS,
  message = '',
  onClose,
}) => {
  const classes: any = useStyles()

  return (
    <SnackbarContent
      data-testid="AlertContent"
      className={classes[variant]}
      aria-describedby="client-snackbar"
      message={<AlertMessage variant={variant} message={message}/>}
      action={<SnackbarAction onClose={onClose}/>}
    />
  )
}

export default AlertContent
