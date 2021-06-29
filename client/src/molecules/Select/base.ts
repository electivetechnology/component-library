import { createContext } from 'react'

export interface OptionType {
  label: string
  value: string
}

export interface SelectContextType {
  label: string
  initialValue: any
  children: any
  onChange: Function
  required: boolean
  showOptions: boolean
  setShowOptions: Function
  darkMode: boolean
  disabled: boolean
}

export const SelectContext = createContext<SelectContextType>(
  {} as SelectContextType
)

export interface OptionContextType {
  selected: string | Array<OptionType>
  handleSelect: Function
}

export const OptionContext = createContext<OptionContextType>(
  {} as OptionContextType
)
