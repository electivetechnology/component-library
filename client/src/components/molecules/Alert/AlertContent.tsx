import React, { FunctionComponent } from 'react'
import { useStyles } from 'components/molecules/Alert/styles'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import SnackbarAction from 'components/atoms/CloseButton/CloseButton'
import AlertMessage from 'components/molecules/Alert/AlertMessage'
import { AlertTypeConst } from 'components/molecules/Alert/alertType'

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
