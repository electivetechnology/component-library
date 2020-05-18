import React, { FunctionComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { resetPopUp, getPopUp } from './popUpReducer'
import Dialog from '@material-ui/core/Dialog'
import {
  HeaderWrapperStyled,
  PopUpContentWrapperStyled,
  popUpStyles,
  PopUpWrapperStyled,
} from './styles'
import PopUpClose from 'components/molecules/PopUp/PopUpClose'

type Props = {
  classes?: any
}
const PopUp: FunctionComponent<Props> = ({ children, classes }) => {
  const dispatch = useDispatch()
  const { popUpType } = useSelector(getPopUp)

  const handleClose = () => {
    dispatch(resetPopUp())
  }

  return (
    <Dialog
      open={!!popUpType}
      classes={{ paper: classes.dialogPaper }}
      onClose={handleClose}
      disableBackdropClick={true}
      disableEscapeKeyDown={true}>
      <PopUpWrapperStyled>
        <HeaderWrapperStyled>
          <PopUpClose handleClose={handleClose} />
        </HeaderWrapperStyled>
        <PopUpContentWrapperStyled popUpHeight={'100vH'}>
          {children}
        </PopUpContentWrapperStyled>
      </PopUpWrapperStyled>
    </Dialog>
  )
}

export default withStyles(popUpStyles)(PopUp)
