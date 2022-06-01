import React, { FC, Fragment, useEffect, useState } from 'react'
import Portal from 'atoms/Portal/Portal'
import PopUpClose from './PopUpClose'
import {
  PopUpWrapperStyled,
  Overlay,
  PopupClosedStyled,
  PopupContainer
} from './styles'

type Props = {
  children?: any
  open: boolean
  setOpen: Function
  isCloseable?: boolean
}

const PopUp: FC<Props> = ({ children, open, setOpen, isCloseable = false }) => {
  const [root, setRoot] = useState<any>(document.getElementById('pop-up'))

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    setRoot(document.getElementById('pop-up'))
  }, [])

  if (!root) {
    return null
  }

  return (
    <Portal root={root}>
      <Fragment>
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
      </Fragment>
    </Portal>
  )
}

export default PopUp
