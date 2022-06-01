import React, { FunctionComponent } from 'react'
import { CloseIconStyled } from './styles'
import Close from '@mui/icons-material/Close'

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
