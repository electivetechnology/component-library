import React, { FunctionComponent, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { getPopUp } from './reducer'
import {
  popUpStyles,
  PopUpWrapperStyled,
  Overlay,
  PopupClosedStyled,
  PopupContainer
} from './styles'
import PopUpClose from './PopUpClose'

const PopUp: FunctionComponent = ({ children }) => {
  const { popUpType, isCloseable } = useSelector(getPopUp)

  const handleClose = () => {}

  return !!popUpType ? (
    <Fragment>
      <Overlay />
      <PopUpWrapperStyled>
        <PopupContainer>
          {children}
          {isCloseable && (
            <PopupClosedStyled>
              <PopUpClose handleClose={handleClose} />
            </PopupClosedStyled>
          )}
        </PopupContainer>
      </PopUpWrapperStyled>
    </Fragment>
  ) : null
}

export default withStyles(popUpStyles)(PopUp)
