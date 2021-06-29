import React, { FunctionComponent, memo, useContext } from 'react'
import { FormContext, InputContext } from 'organisms/Form/base'
import { Select } from 'molecules/Select'
import { selectedOption } from 'organisms/Form/mock'

const FormSelect: FunctionComponent = ({ children }) => {
  const {
    inputValue,
    name,
    label,
    options,
    disabled,
    outlined,
    required
  } = useContext(InputContext)
  const { onBlur, updateInput, darkMode, inputs } = useContext(FormContext)

  const handleChange = (newValue: any) => {
    updateInput(name, newValue)
  }

  const selectOptions =
    options && options.selectOptions ? options.selectOptions : []

  const selected = options ? selectedOption(selectOptions, inputValue) : null

  return (
    <Select
      label={label}
      onChange={handleChange}
      initialValue={selected}
      required={required}
      outlined={outlined}
      darkMode={darkMode}
      disabled={disabled}
    >
      {selectOptions}
    </Select>
  )
}
export default memo(FormSelect)
