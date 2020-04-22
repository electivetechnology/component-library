import React, { FunctionComponent } from 'react'
import { CloseWrapper, useStyles } from './styles'
import CloseIcon from '@material-ui/icons/Close'

type Props = {
  onClose: any
}

const CloseButton: FunctionComponent<Props> = ({ onClose }) => {
  const classes: any = useStyles()

  return (
    <CloseWrapper data-testid="CloseButton">
      <CloseIcon className={classes.icon} onClick={onClose} />
    </CloseWrapper>
  )
}

export default CloseButton
