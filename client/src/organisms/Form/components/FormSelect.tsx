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
import { RequiredStyled, SelectStyled } from '../styles'

const FormSelect: FunctionComponent = () => {
  const {
    inputValue,
    name,
    label,
    options,
    disabled,
    outlined,
    required
  } = useContext(InputContext)
  const { onBlur, updateInput, darkMode } = useContext(FormContext)
  const valueRef = useRef()

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
    <SelectStyled>
      <SelectField
        label={label}
        value={selected}
        options={selectOptions}
        disabled={disabled}
        onChange={handleChange}
        darkMode={darkMode}
        outlined={outlined}
      />
      {required && <RequiredStyled>*</RequiredStyled>}
    </SelectStyled>
  )
}
export default memo(FormSelect)
