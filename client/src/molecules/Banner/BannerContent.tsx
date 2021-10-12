import React, { FC, ReactElement, Fragment } from 'react'
import { Font } from 'atoms'
import { ButtonStyled } from './styles'

type Props = {
  message: string
  buttons: Array<ReactElement>
}

const BannerContent: FC<Props> = ({ message, buttons }) => {
  return (
    <Fragment>
      <Font variant='body1'>{message}</Font>
      <ButtonStyled>
        {buttons.map((button, index) => (
          <Fragment key={index}>{button}</Fragment>
        ))}
      </ButtonStyled>
    </Fragment>
  )
}

export default BannerContent
