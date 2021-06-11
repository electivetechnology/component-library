import { createContext } from 'react'

export interface SelectContextType {
  selected: { label: string, value: string }
  setSelected: Function
}

export const SelectContext = createContext<SelectContextType>({} as SelectContextType)
