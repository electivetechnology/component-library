import React, { FunctionComponent, Fragment } from 'react'
import Portal from 'atoms/Portal/Portal'
import PopUpClose from './PopUpClose'
import {
  PopUpWrapperStyled,
  Overlay,
  PopupClosedStyled,
  PopupContainer
} from './styles'

type Props = {
  open: boolean
  setOpen: Function
  isCloseable?: boolean
}

const PopUp: FunctionComponent<Props> = ({
  children,
  open,
  setOpen,
  isCloseable = false
}) => {
  const handleClose = () => {
    setOpen(false)
  }

  const root: any = document.getElementById('pop-up')

  return (
    <Portal root={root}>
      {open && (
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
      )}
    </Portal>
  )
}

export default PopUp
