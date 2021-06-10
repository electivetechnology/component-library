import { createContext } from 'react'

export interface OptionType { label: string, value: string }

export interface SelectContextType {
  initialValue: any
  children: any
  onChange: Function
  required: boolean
  selected: OptionType
  setSelected: Function
  showOptions: boolean
}

export const SelectContext = createContext<SelectContextType>({} as SelectContextType)

export interface SelectMultiContextType {
  multiSelected: Array<OptionType>
  setSelectedMulti: Function
}

export const SelectMultiContext = createContext<SelectMultiContextType>({} as SelectMultiContextType)
