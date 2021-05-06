import React, { useContext } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import BannerContent from 'molecules/Banner/BannerContent'
import { CloseWrapper } from 'molecules/Banner/styles'
import { BannerContext } from './base'

const Banner = () => {
  const {
    banner: { bannerType },
    handleClose
  } = useContext(BannerContext)

  return (
    <Snackbar
      data-testid='Banner'
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={!!bannerType}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id'
      }}
    >
      {!!bannerType ? <BannerContent /> : <CloseWrapper />}
    </Snackbar>
  )
}

export default Banner
