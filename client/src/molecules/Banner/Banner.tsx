import React, { Fragment, useContext } from 'react'
import { BannerContext } from 'molecules/Banner/base'
import { BannerContainerStyled } from './styles'

const Banner = () => {
  const { banner } = useContext(BannerContext)

  return (
    <Fragment>
      {banner && (
        <BannerContainerStyled data-testid='Banner'>
          {banner}
        </BannerContainerStyled>
      )}
    </Fragment>
  )
}

export default Banner
