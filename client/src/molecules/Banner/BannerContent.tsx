import React, { FC, ReactElement, Fragment } from 'react'
import { Font } from 'atoms'
import { ButtonStyled } from './style'

type Props = {
  message: string
  buttons: Array<ReactElement>
}

const BannerContent: FC<Props> = ({ message, buttons }) => {
  return (
    <Fragment>
      <Font variant="body1">
        {message}
      </Font>
      <ButtonStyled>
        {buttons.map(button => button)}
      </ButtonStyled>
    </Fragment>
  )
}

export default BannerContent
