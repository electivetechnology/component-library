import { createContext } from 'react'

export interface OptionType { label: string, value: string }

export interface SelectContextType {
  selected: OptionType
  setSelected: Function
}

export const SelectContext = createContext<SelectContextType>({} as SelectContextType)
