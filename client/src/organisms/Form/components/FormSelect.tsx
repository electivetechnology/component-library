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
import isNull from 'lodash/isNull'

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
  const valueRef = useRef(null)

  const handleChange = (newValue: any) => {
    if (inputValue !== newValue) {
      valueRef.current = newValue
      updateInput(name, newValue)
    }
  }

  useEffect(() => {
    !isNull(valueRef.current) && onBlur(name)
  }, [valueRef.current])

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
        {options?.selectOptions?.map((option) => option)}
      </Select>
      <FormDelete isHovered={isHovered} />
    </SelectStyled>
  )
}
export default memo(FormSelect)
