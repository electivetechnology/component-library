import React, { FunctionComponent } from 'react'
import { useStyles } from './styles'
import MaterialSnackbarContent from '@material-ui/core/SnackbarContent'
import SnackbarAction from 'atoms/CloseButton/CloseButton'
import SnackbarMessage from 'atoms/SnackbarMessage/SnackbarMessage'
import { AlertTypeConst } from 'atoms/Alert/alertType'
import MaterialButton from '@material-ui/core/Button'

type Props = {
  variant: string
  message: string
  onClose: Function
}

const SnackbarContent: FunctionComponent<Props> = ({
  variant = AlertTypeConst.SUCCESS,
  message = '',
  onClose,
}) => {
  const classes: any = useStyles()

  return (
    <MaterialSnackbarContent
      data-testid="SnackbarContent"
      className={classes[variant]}
      aria-describedby="client-snackbar"
      message={<SnackbarMessage variant={variant} message={message}/>}
      action={<SnackbarAction onClose={onClose}/>}
    />
  )
}

export default SnackbarContent
