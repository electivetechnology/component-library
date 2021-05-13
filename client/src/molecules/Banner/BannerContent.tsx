import React, { FC, ReactElement, Fragment } from 'react'

type Props = {
  message: string
  buttons: Array<ReactElement>
}

const BannerContent: FC<Props> = ({ message, buttons }) => {
  return (
    <Fragment>
      {message}
      {buttons.map(button => button)}
    </Fragment>
  )
}

export default BannerContent
