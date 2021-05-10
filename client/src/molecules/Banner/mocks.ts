import { BANNER, BannerType } from 'molecules/Banner/types'

const bannerStore = (value: BannerType) => [
  {
    key: BANNER,
    value
  }
]

export const noCloseStore = bannerStore({
  bannerType: 'refresh',
  isCloseable: false
})
export const closeStore = bannerStore({
  bannerType: 'privacy',
  isCloseable: true
})
