import { BannerTypeType } from 'molecules/Banner/base'
import { action } from '@storybook/addon-actions'

const handleClose = () => {
  action('close')
}

const setBanner = () => {
  action('set')
}

export const successContextMock = {
  banner: {
    bannerType: 'success' as BannerTypeType,
    message: 'Success Banner',
  },
  setBanner,
  handleClose
}

export const warningContextMock = {
  banner: {
    bannerType: 'warning' as BannerTypeType,
    message: 'Warning Banner',
  },
  setBanner,
  handleClose
}

export const infoContextMock = {
  banner: {
    bannerType: 'info' as BannerTypeType,
    message: 'Info Banner',
  },
  setBanner,
  handleClose
}

export const errorContextMock = {
  banner: {
    bannerType: 'error' as BannerTypeType,
    message: 'Error Banner',
  },
  setBanner,
  handleClose
}

export const emptyContextMock = {
  banner: {
    bannerType: '' as BannerTypeType,
    message: '',
  },
  setBanner,
  handleClose
}
