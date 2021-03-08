import React, { FunctionComponent } from 'react'
import { useStyles } from 'molecules/Alert/styles'
import { SnackbarContent } from '@material-ui/core'
import { CloseButton } from 'atoms'
import AlertMessage from 'molecules/Alert/AlertMessage'
import { AlertTypeType } from 'molecules/Alert/types'

type Props = {
  variant: AlertTypeType
  message: string
  onClose: any
}

const AlertContent: FunctionComponent<Props> = ({
  variant = 'success',
  message = '',
  onClose
}) => {
  const classes = useStyles()

  return (
    <SnackbarContent
      data-testid='AlertContent'
      className={!!variant ? classes[variant] : ''}
      aria-describedby='client-snackbar'
      message={<AlertMessage variant={variant} message={message} />}
      action={<CloseButton onClose={onClose} />}
    />
  )
}

export default AlertContent
