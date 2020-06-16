import React, { FunctionComponent } from 'react'
import { useStyles } from './styles'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import { CloseButton } from 'components/atoms'
import AlertMessage from './AlertMessage'
import { AlertTypeConst } from './alertType'

type Props = {
  variant: string
  message: string
  onClose: Event
}

const AlertContent: FunctionComponent<Props> = ({
  variant = AlertTypeConst.SUCCESS,
  message = '',
  onClose,
}) => {
  const classes = useStyles()

  return (
    <SnackbarContent
      data-testid="AlertContent"
      className={classes[variant]}
      aria-describedby="client-snackbar"
      message={<AlertMessage variant={variant} message={message} />}
      action={<CloseButton onClose={onClose} />}
    />
  )
}

export default AlertContent
