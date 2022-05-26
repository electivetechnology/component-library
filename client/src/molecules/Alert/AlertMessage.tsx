import React, { FunctionComponent, useContext } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import InfoIcon from '@mui/icons-material/Info'
import WarningIcon from '@mui/icons-material/Warning'
import { useStyles } from 'molecules/Alert/styles'
import { AlertContext } from 'molecules/Alert/base'

const variantIcon: any = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
}

const AlertMessage: FunctionComponent = () => {
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
