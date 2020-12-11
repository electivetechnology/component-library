import { createContext } from 'react'

export type InputType = 'text'

interface FormOptionType {
  label: string
  value: string
}

export interface OptionType {
  readOnly?: boolean
  multiline?: boolean
  affix?: string
  helperText?: string
  width?: number
  selected?: FormOptionType
  options?: Array<FormOptionType>
  noOptionsMessage?: string
  isMulti?: boolean
  isDynamic?: boolean
  copy?: boolean
}

export type FormProps = {
  handleUpdate?: Function
  errors: object
}

export type FormContextType = {
  onBlur: Function
  addInput: Function
  inputs: any
  errors: any
}

export const FormContext = createContext<FormContextType>({} as FormContextType)

export type InputContextType = {
  label: string
  name: string
  type: InputType
  options?: OptionType
}

export const InputContext = createContext<InputContextType>(
  {} as InputContextType
)
