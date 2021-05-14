import React, { useContext } from 'react'
import { BannerContext } from 'molecules/Banner/base'
import {
  BannerContainerStyled
} from './style'

const Banner = () => {
  const { banner } = useContext(BannerContext)

  return (
    <BannerContainerStyled data-testid='Banner'>
      {banner && banner}
    </BannerContainerStyled>)
}

export default Banner
