import { createContext } from 'react'

export interface OptionType { label: string, value: string }

export interface SelectContextType {
  initialValue: any
  children: any
  onChange: Function
  required: boolean
  selected: OptionType
  handleSelect: Function
  showOptions: boolean
  selectedMulti: Array<OptionType>
}

export const SelectContext = createContext<SelectContextType>({} as SelectContextType)
