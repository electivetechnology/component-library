import React, { FunctionComponent, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { resetPopUp, getPopUp } from './reducer'
import Dialog from '@material-ui/core/Dialog'
import {
  PopUpContentWrapperStyled,
  popUpStyles,
  PopUpWrapperStyled,
  Overlay,
  ContentContainer,
  PopupClosedStyled
} from './styles'
import PopUpClose from './PopUpClose'

type Props = {
  classes?: any
}
const PopUp: FunctionComponent<Props> = ({ children, classes }) => {
  const dispatch = useDispatch()
  const { popUpType, isCloseable } = useSelector(getPopUp)

  const handleClose = () => {
    dispatch(resetPopUp())
  }

  return !!popUpType ? (
    <Fragment>
      <Overlay onClick={handleClose} />
      <Dialog
        data-testid='PopUp'
        open={true}
        classes={{ paper: classes.dialogPaper }}
        onClose={handleClose}
        disableBackdropClick={true}
        disableEscapeKeyDown={true}
      >
        <PopUpWrapperStyled>
          <PopUpContentWrapperStyled popUpHeight={'100vH'}>
            <ContentContainer>{children}</ContentContainer>
            {isCloseable && (
              <PopupClosedStyled>
                <PopUpClose handleClose={handleClose} />
              </PopupClosedStyled>
            )}
          </PopUpContentWrapperStyled>
        </PopUpWrapperStyled>
      </Dialog>
    </Fragment>
  ) : null
}

export default withStyles(popUpStyles)(PopUp)
