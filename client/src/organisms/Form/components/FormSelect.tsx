import React, {
  FunctionComponent,
  memo,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { FormContext, InputContext } from 'organisms/Form/base'
import { Select } from 'molecules/Select'
import FormDelete from 'organisms/Form/components/FormDelete'
import { SelectStyled } from 'organisms/Form/styles'

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

  const [isHovered, setIsHovered] = useState(false)
  const valueRef = useRef()

  const handleChange = (newValue: any) => {
    valueRef.current = newValue
    updateInput(name, newValue)
  }

  useEffect(() => {
    valueRef.current && onBlur(name)
  }, [valueRef.current])

  const selectOptions =
    options && options.selectOptions ? options.selectOptions : []

  const handleMouseHover = () => !disabled && setIsHovered(true)
  const handleMouseLeave = () => !disabled && setIsHovered(false)

  return (
    <SelectStyled
      data-testid='FormSelect'
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}
    >
      <Select
        label={label}
        onChange={handleChange}
        initialValue={inputValue}
        required={required}
        outlined={outlined}
        darkMode={darkMode}
        disabled={disabled}
      >
        {selectOptions}
      </Select>
      <FormDelete isHovered={isHovered} />
    </SelectStyled>
  )
}
export default memo(FormSelect)
