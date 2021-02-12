import { createContext } from 'react'

export type InputType =
  | 'text'
  | 'colourPicker'
  | 'colour'
  | 'select'
  | 'number'
  | 'checkbox'
  | 'date'
  | 'phone'
  | 'textEditor'
  | 'toggle'

export type StatusTypeType = 'pending' | 'error' | 'success'

export interface FormOptionType {
  label: string
  value: string
}

export interface OptionType {
  multiline?: boolean
  width?: number
  selected?: FormOptionType
  selectOptions?: Array<FormOptionType>
  noOptionsMessage?: string
  isMulti?: boolean
  isDynamic?: boolean
  copy?: boolean
  activeLabel?: string
  inactiveLabel?: string
}

export type StatusType = {
  name: string,
  statusType: StatusTypeType,
  message?: string
}

export type HandleStatusType = (
  name: string,
  statusType: StatusTypeType,
  message?: string
) => void

export type FormProps = {
  handleUpdate?: (key: string, value: string) => void
  statuses: any
  disableForm?: boolean
  darkMode?: boolean
  outlineInputs?: boolean
}

export type FormContextType = {
  onBlur: Function
  updateInput: Function
  inputs: any
  statuses: any
  disableForm: boolean
  darkMode: boolean
  outlineInputs?: boolean
}

export const FormContext = createContext<FormContextType>({} as FormContextType)

export type InputContextType = {
  inputValue: any
  label: string
  name: string
  type: InputType
  disabled?: boolean
  options?: OptionType
  outlined?: boolean
  status?: StatusType
}

export const InputContext = createContext<InputContextType>(
  {} as InputContextType
)
