import React, { FC } from 'react'
import { CloseIconStyled } from 'molecules/PopUp/styles'
import Close from '@material-ui/icons/Close'

type Props = {
  handleClose?: any
}

const PopUpClose: FC<Props> = ({ handleClose }) => {
  return (
    <CloseIconStyled>
      <Close onClick={handleClose} />
    </CloseIconStyled>
  )
}

export default PopUpClose
