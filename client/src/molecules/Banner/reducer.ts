import { Reducer } from 'redux'
import { resetAction, setAction, withItem } from 'utils/baseReducer'
import { BannerActionTypes, BannerConst, BannerType, Schema } from 'molecules/Banner/types'

// SCHEMA
export const bannerSchema: BannerType = {
  bannerType: ''
}

// ACTION CREATORS
export const setBanner = (
  bannerType: string,
  isCloseable = false,
  pageData = {}
): BannerActionTypes =>
  setAction({ bannerType, isCloseable, pageData }, BannerConst)

export const resetBanner = (): BannerActionTypes => resetAction(BannerConst)

// REDUCER
const banner: Reducer<BannerType> = (state = bannerSchema) => state

// BASE SELECTORS
export const getBanner = (state: Schema) => state.banner

export default withItem(BannerConst, banner, bannerSchema)
