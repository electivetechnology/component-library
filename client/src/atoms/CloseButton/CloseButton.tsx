import React, { FunctionComponent } from 'react'
import { CloseWrapper, useStyles } from 'atoms/CloseButton/styles'
import { Close } from '@material-ui/icons'

type Props = {
  onClose: any
}

const CloseButton: FunctionComponent<Props> = ({ onClose }) => {
  const classes = useStyles()

  return (
    <CloseWrapper data-testid='CloseButton'>
      <Close className={classes.icon} onClick={onClose} />
    </CloseWrapper>
  )
}

export default CloseButton
