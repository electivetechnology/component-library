import { createContext } from 'react'

export type AlignTypes = 'left' | 'right'
export type PageContextType = {
  currentStep: number
  finalStep: number
  handleClose?: () => void
  next?: () => void | null
  setNext: Function
  back?: () => void | null
  setBack: Function
  progress: number
  helperText?: string
}
export const PageContext = createContext<PageContextType>({} as PageContextType)
