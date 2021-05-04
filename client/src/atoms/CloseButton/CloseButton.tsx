import React, { FC } from 'react'
import { CloseWrapper, useStyles } from 'atoms/CloseButton/styles'
import CloseIcon from '@material-ui/icons/Close'

type Props = {
  handleClose: any
}

const CloseButton: FC<Props> = ({ handleClose }) => {
  const classes = useStyles()

  return (
    <CloseWrapper data-testid='CloseButton'>
      <CloseIcon className={classes.icon} onClick={handleClose} />
    </CloseWrapper>
  )
}

export default CloseButton
