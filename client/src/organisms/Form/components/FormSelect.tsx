import React, {
  FunctionComponent,
  memo,
  useContext,
  useEffect,
  useRef
} from 'react'
import { FormContext, InputContext } from 'organisms/Form/base'
import { selectedOption } from 'organisms/Form/mock'
import { SelectField } from 'atoms'

const FormText: FunctionComponent = () => {
  const { name, label, options, disabled } = useContext(InputContext)
  const { onBlur, inputs, updateInput, darkMode, border = true } = useContext(
    FormContext
  )
  const valueRef = useRef()

  const inputValue = inputs[name] ? inputs[name] : null

  const handleBlur = () => {
    onBlur(name)
  }

  const selectOptions =
    options && options.selectOptions ? options.selectOptions : []

  const selected = options ? selectedOption(selectOptions, inputValue) : null

  const handleChange = (event: any, newValue: any) => {
    valueRef.current = newValue
    updateInput(name, newValue ? newValue.value : null)
  }

  useEffect(() => {
    valueRef.current && handleBlur()
  }, [valueRef.current])

  return (
    <SelectField
      label={label}
      value={selected}
      options={selectOptions}
      disabled={disabled}
      onChange={handleChange}
      darkMode={darkMode}
      border={border}
    />
  )
}
export default memo(FormText)
