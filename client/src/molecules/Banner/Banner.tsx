import React, { useContext, Fragment, createContext } from 'react'
import { BannerContext } from 'molecules/Banner/base'

const Banner = () => {
  const { banner } = useContext(BannerContext)

  return <Fragment>{banner && banner}</Fragment>
}

export default Banner
