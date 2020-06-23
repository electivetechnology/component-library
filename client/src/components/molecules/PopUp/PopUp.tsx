import React, { FunctionComponent, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { getPopUp } from './reducer'
import {
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
      <PopUpWrapperStyled data-testid='PopUp'>
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

export default PopUp
