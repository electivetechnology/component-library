import React, { FunctionComponent } from 'react'
import { useStyles } from './styles'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import { CloseButton } from 'components/atoms'
import AlertMessage from './AlertMessage'

type Props = {
  variant: string
  message: string
  onClose: any
}

const AlertContent: FunctionComponent<Props> = ({
  variant = 'success',
  message = '',
  onClose,
}) => {
  const classes = useStyles()

  return (
    <SnackbarContent
      data-testid="AlertContent"
      // className={classes[variant]}
      aria-describedby="client-snackbar"
      message={<AlertMessage variant={variant} message={message} />}
      action={<CloseButton onClose={onClose} />}
    />
  )
}

export default AlertContent
