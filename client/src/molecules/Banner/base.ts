import { createContext } from 'react'

export type BannerTypeType = 'success' | 'warning' | 'info' | 'error' | ''

export interface BannerType {
  bannerType: BannerTypeType
  message: string
}

export interface BannerContextType {
  banner: BannerType
  setBanner: Function
  handleClose: any
}

export const BannerContext = createContext<BannerContextType>({} as BannerContextType)
