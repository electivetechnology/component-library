import React, { FunctionComponent } from 'react'
import { CloseIconStyled } from './styles'
import Close from '@material-ui/icons/Close'

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
