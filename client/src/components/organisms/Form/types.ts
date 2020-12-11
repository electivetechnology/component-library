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
