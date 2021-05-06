import React, { FC, useState } from 'react'
import { BannerContext, BannerTypeType } from './base'

const BannerContainer: FC = ({ children }) => {
  const [banner, setBanner] = useState({
    bannerType: '' as BannerTypeType,
    message: ''
  })

  const handleClose = () => {
    setBanner({
      bannerType: '',
      message: ''
    })
  }

  return (
    <BannerContext.Provider
      value={{
        banner,
        setBanner,
        handleClose
      }}
    >
      {children}
    </BannerContext.Provider>
  )
}

export default BannerContainer
