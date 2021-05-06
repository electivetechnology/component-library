import React, { FunctionComponent, useContext } from 'react'
import { useStyles } from 'molecules/Banner/styles'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import { CloseButton } from 'atoms'
import BannerMessage from 'molecules/Banner/BannerMessage'
import { BannerContext } from 'molecules/Banner/base'

const BannerContent: FunctionComponent = () => {
  const {
    banner: { bannerType },
    handleClose
  } = useContext(BannerContext)

  const classes = useStyles()

  return (
    <SnackbarContent
      data-testid='BannerContent'
      className={!!bannerType ? classes[bannerType] : ''}
      aria-describedby='client-snackbar'
      message={<BannerMessage />}
      action={<CloseButton handleClose={handleClose} />}
    />
  )
}

export default BannerContent
