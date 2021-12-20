import React, { FunctionComponent, Fragment, useEffect, useState } from 'react'
import { Portal } from 'electivegroup-component-library-v2'
import PopUpClose from 'molecules/PopUp/PopUpClose'
import {
  PopUpWrapperStyled,
  Overlay,
  PopupClosedStyled,
  PopupContainer
} from 'molecules/PopUp/styles'

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
  const [root, setRoot] = useState<any>(document.getElementById('pop-up'))

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    setRoot(document.getElementById('pop-up'))
  }, [])

  if(!root){
    return null
  }

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
