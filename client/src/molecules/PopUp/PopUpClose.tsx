import React, { FunctionComponent } from 'react'
import { CloseIconStyled } from 'molecules/PopUp/styles'
import { Close } from '@material-ui/icons'

type Props = {
  handleClose?: any
}

const PopUpClose: FunctionComponent<Props> = ({ handleClose }) => {
  return (
    <CloseIconStyled>
      <Close onClick={handleClose} />
    </CloseIconStyled>
  )
}

export default PopUpClose
