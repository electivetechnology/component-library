import { createContext } from 'react'

export interface OptionType { label: string, value: string }

export interface SelectContextType {
  label: string
  initialValue: any
  children: any
  onChange: Function
  required: boolean
  selected: OptionType
  handleSelect: Function
  showOptions: boolean
  selectedMulti: Array<OptionType>
  darkMode: boolean
  disabled: boolean
}

export const SelectContext = createContext<SelectContextType>({} as SelectContextType)



export interface OptionContextType {
  search: string
}

export const OptionContext = createContext<OptionContextType>({} as OptionContextType)
