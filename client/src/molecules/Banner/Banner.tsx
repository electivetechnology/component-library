import React, { FunctionComponent, Fragment } from 'react'
import Portal from 'atoms/Portal/Portal'
import BannerClose from './BannerClose'
import {
  BannerWrapperStyled,
  Overlay,
  BannerClosedStyled,
  BannerContainer
} from './styles'

type Props = {
  open: boolean
  setOpen: Function
  isCloseable?: boolean
}

const Banner: FunctionComponent<Props> = ({
  children,
  open,
  setOpen,
  isCloseable = false
}) => {
  const handleClose = () => {
    setOpen(false)
  }

  const root: any = document.getElementById('banner')

  return (
    <Portal root={root}>
      {open && (
        <Fragment>
          <Overlay />
          <BannerWrapperStyled data-testid='Banner'>
            <BannerContainer>
              {children}
              {isCloseable && (
                <BannerClosedStyled>
                  <BannerClose handleClose={handleClose} />
                </BannerClosedStyled>
              )}
            </BannerContainer>
          </BannerWrapperStyled>
        </Fragment>
      )}
    </Portal>
  )
}

export default Banner
