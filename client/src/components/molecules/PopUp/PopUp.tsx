import React, { FunctionComponent, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPopUp, resetPopUp } from './reducer'
import {
  PopUpWrapperStyled,
  Overlay,
  PopupClosedStyled,
  PopupContainer
} from './styles'
import PopUpClose from './PopUpClose'

const PopUp: FunctionComponent = ({ children }) => {
  const dispatch = useDispatch()
  const { popUpType, isCloseable } = useSelector(getPopUp)

  const handleClose = () => {
    dispatch(resetPopUp())
  }

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
