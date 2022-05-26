import React, { FunctionComponent } from 'react'
import { CloseWrapper, useStyles } from 'atoms/CloseButton/styles'
import CloseIcon from '@mui/icons-material/Close'

type Props = {
  handleClose: any
}

const CloseButton: FunctionComponent<Props> = ({ handleClose }) => {
  const classes = useStyles()

  return (
    <CloseWrapper data-testid='CloseButton'>
      <CloseIcon className={classes.icon} onClick={handleClose} />
    </CloseWrapper>
  )
}

export default CloseButton
