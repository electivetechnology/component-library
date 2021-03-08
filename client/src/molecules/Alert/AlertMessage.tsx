import React, { FunctionComponent } from 'react'
import { CheckCircle as CheckCircleIcon, Error as ErrorIcon,  Info as InfoIcon,  Warning as WarningIcon } from '@material-ui/icons'
import { useStyles } from 'molecules/Alert/styles'

const variantIcon: any = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
}

type Props = {
  variant: string
  message: string
}

const AlertMessage: FunctionComponent<Props> = ({
  variant = 'success',
  message = ''
}) => {
  const classes = useStyles()
  const Icon: any = variantIcon[variant]

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
