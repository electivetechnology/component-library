import React, { FunctionComponent, useContext } from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import WarningIcon from '@material-ui/icons/Warning'
import { useStyles } from 'molecules/Banner/styles'
import { BannerContext } from 'molecules/Banner/base'

const variantIcon: any = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
}

const BannerMessage: FunctionComponent = () => {
  const {
    banner: { bannerType, message }
  } = useContext(BannerContext)

  const classes = useStyles()
  const Icon: any = variantIcon[bannerType]

  return (
    <span
      data-testid='BannerMessage'
      id='client-snackbar'
      className={classes.message}
    >
      <Icon className={`${classes.icon} ${classes.iconVariant}`} />
      {message}
    </span>
  )
}

export default BannerMessage
