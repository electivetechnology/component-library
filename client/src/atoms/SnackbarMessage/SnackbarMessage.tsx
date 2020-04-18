import React, { FunctionComponent } from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import WarningIcon from '@material-ui/icons/Warning'
import { useStyles } from './styles'

const variantIcon: any = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
}

type Props = {
  variant: any
  message: string
}

const SnackbarMessage: FunctionComponent<Props> = ({
  variant = 'success',
  message = '',
}) => {
  const classes: any = useStyles()
  const Icon: any = variantIcon[variant]

  return (
    <span data-testid="SnackbarMessage" id="client-snackbar" className={classes.message}>
      <Icon className={`${classes.icon} ${classes.iconVariant}`} />
      {message}
    </span>
  )
}

export default SnackbarMessage
