import React, { FC, useContext } from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import WarningIcon from '@material-ui/icons/Warning'
import { useStyles } from 'molecules/Alert/styles'
import { AlertContext } from 'molecules/Alert/base'

const variantIcon: any = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
}

const AlertMessage: FC = () => {
  const {
    alert: { alertType, message }
  } = useContext(AlertContext)

  const classes = useStyles()
  const Icon: any = variantIcon[alertType]

  return (
    <span
      data-testid='AlertMessage'
      id='client-snackbar'
      className={classes.message}
    >
      <Icon className={`${classes.icon} ${classes.iconVariant}`} />
      {message}
    </span>
  )
}

export default AlertMessage
