import { createContext, ReactElement } from 'react'

export interface BannerContextType {
  banner: ReactElement | null
  setBanner: any
}

export const BannerContext = createContext<BannerContextType>(
  {} as BannerContextType
)
