import React, { FunctionComponent, memo, useContext } from 'react'
import { FormContext, InputContext } from 'organisms/Form/base'
import { Select } from 'molecules/Select'
import { selectedOption } from 'organisms/Form/mock'
import { SelectStyled } from 'organisms/Form/styles'

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
  const handleChange = (event: any, newValue: any) => {
    updateInput(name, newValue ? newValue.value : null)
  }

  const selectOptions =
    options && options.selectOptions ? options.selectOptions : []

  const selected = options ? selectedOption(selectOptions, inputValue) : null

  return (
    <SelectStyled data-testid='FormSelect'>
      <Select onChange={handleChange} initialValue={selected} >
        {selectOptions}
      </Select>
    </SelectStyled>
  )
}
export default memo(FormSelect)
