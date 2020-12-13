import { createContext } from 'react'

export type InputType =
  | 'text'
  | 'colorPicker'
  | 'colour'
  | 'select'
  | 'number'
  | 'checkbox'
  | 'date'
  | 'phone'
  | 'textEditor'
  | 'toggle'

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
}

export type FormContextType = {
  onBlur: Function
  updateInput: Function
  inputs: any
  errors: any
}

export const FormContext = createContext<FormContextType>({} as FormContextType)

export type InputContextType = {
  label: string
  name: string
  type: InputType
  readOnly: boolean
  options?: OptionType
}

export const InputContext = createContext<InputContextType>(
  {} as InputContextType
)
