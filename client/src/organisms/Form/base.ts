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

export interface InputProps {
  label: string
  name: string
  value: any
  type: InputType
  affix?: string
  helperText?: string
  download?: boolean
  options?: OptionType
  outlined?: boolean
  disabled?: boolean
  required?: boolean
}

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
  isDelete?: boolean
  icon?: any
  prefix?: boolean
  suffix?: boolean
}

export type StatusType = {
  name: string
  statusType: StatusTypeType
  message?: string
}

export type HandleStatusType = (
  name: string,
  statusType: StatusTypeType,
  message?: string
) => void

export type FormProps = {
  handleUpdate?: (key: string, value: string) => void
  statuses?: any
  disableForm?: boolean
  darkMode?: boolean
  outlineInputs?: boolean
  setSubmit?: any
}

export type FormContextType = {
  onBlur: Function
  updateInput: Function
  inputs: any
  statuses: any
  requiredErrors: { [key: string]: boolean }
  updateRequired: Function
  disableForm: boolean
  darkMode: boolean
  outlineInputs?: boolean
  handleDelete?: any
}

export const FormContext = createContext<FormContextType>({} as FormContextType)

export type InputContextType = {
  inputValue: any
  label: string
  name: string
  type: InputType
  disabled?: boolean
  required?: boolean
  options?: OptionType
  outlined?: boolean
  status?: StatusType
  requiredError: boolean
}

export const InputContext = createContext<InputContextType>(
  {} as InputContextType
)
