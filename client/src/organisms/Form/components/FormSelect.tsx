import React, {
  FunctionComponent,
  memo,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { FormContext, InputContext } from 'organisms/Form/base'
import { selectedOption } from 'organisms/Form/mock'
import { SelectField } from 'atoms'
import { SelectStyled } from '../styles'
import FormDelete from './FormDelete'

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
  const [isHovered, setIsHovered] = useState(false)

  const { onBlur, updateInput, darkMode, inputs } = useContext(FormContext)
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

  const handleMouseHover = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  useEffect(() => {
    valueRef.current && handleBlur()
  }, [valueRef.current])

  const fieldPlaceholder = required ? `${label}*` : label

  return (
    <SelectStyled
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}>
      <SelectField
        label={fieldPlaceholder}
        value={selected}
        options={selectOptions}
        disabled={disabled}
        onChange={handleChange}
        darkMode={darkMode}
        outlined={outlined}
      />
      {options && options.isDelete && <FormDelete id={inputs.id} isHovered={isHovered} />}
    </SelectStyled>
  )
}
export default memo(FormSelect)
