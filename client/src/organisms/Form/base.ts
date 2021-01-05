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

export type StatusType = 'pending' | 'error' | 'success'

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

export type HandleStatusType = (
  statusType: StatusType,
  message?: string
) => void

export type AddStatusType = (
  statusType: StatusType,
  name: string,
  message?: string
) => void

export type FormProps = {
  handleUpdate?: (object: {[key: string]: string}, handleStatus: HandleStatusType) => void
}

export type FormContextType = {
  onBlur: Function
  updateInput: Function
  inputs: any
  statuses: any
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
