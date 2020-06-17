import React, { FunctionComponent, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { resetPopUp, getPopUp } from './reducer'
import Dialog from '@material-ui/core/Dialog'
import {
  HeaderWrapperStyled,
  PopUpContentWrapperStyled,
  popUpStyles,
  PopUpWrapperStyled,
  Overlay
} from './styles'
import PopUpClose from './PopUpClose'

type Props = {
  classes?: any
}
const PopUp: FunctionComponent<Props> = ({ children, classes }) => {
  const dispatch = useDispatch()
  const { type } = useSelector(getPopUp)

  const handleClose = () => {
    dispatch(resetPopUp())
  }

  return !!type ? <Fragment>
    <Overlay onClick={handleClose}/>
    <Dialog
      data-testid="PopUp"
      open={true}
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
  </Fragment> : null
}

export default withStyles(popUpStyles)(PopUp)
