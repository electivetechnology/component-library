export interface FormOptionType {
  label: string
  value: string
}

export interface FormToggleType {
  value: boolean
}

export interface FormTitleType {
  type: string
  label: string
  width?: number
}

export interface FormTextType {
  type: string
  label: string
  value: string
  readOnly?: boolean
  multiline?: boolean
  affix?: string
  helperText?: string
  width?: number
}

export interface FormSelectType {
  type: string
  label: string
  selected: FormOptionType
  options: Array<FormOptionType>
  width?: number
  noOptionsMessage?: string
  isMulti?: boolean
  isDynamic?: boolean
}

export interface FormDateType {
  type: string
  label: string
  value: {
    date: string
  } | null
  width?: number
}

export interface FormCheckboxType {
  type: string
  label: string
  value: boolean
  width?: number
}

export interface FormColorPickerType {
  type: string
  label: string
  value: string
  helperText?: string
}

export interface FormCustomType {
  type: string
  width?: number
}

export interface FormPhoneType {
  type: string
  label: string
  value: string
  readOnly?: boolean
  helperText?: string
  width?: number
}

export interface FormInfoType {
  type: string
  label: string
  value: string
  width?: number
}

export type SingleFormTypes =
  | FormTitleType
  | FormTextType
  | FormSelectType
  | FormDateType
  | FormCheckboxType
  | FormCustomType
  | FormPhoneType
  | FormInfoType

export type AllFormTypes = { [name: string]: SingleFormTypes }
