export const BANNER = 'banner'

export interface BannerType {
  bannerType: string
  isCloseable?: boolean
  pageData?: object
}

export enum BannerConst {
  SET = '@@banner/SET',
  RESET = '@@banner/RESET'
}

interface SetBannerAction {
  type: typeof BannerConst.SET
  bannerType: string
  isCloseable?: boolean
}

interface ResetBannerAction {
  type: typeof BannerConst.RESET
}

export interface Schema {
  [BANNER]: BannerType
}

export type BannerActionTypes = SetBannerAction | ResetBannerAction
