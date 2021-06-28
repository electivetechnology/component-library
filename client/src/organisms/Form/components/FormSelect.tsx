import { Font } from 'atoms'
import React, {
    FunctionComponent,
    memo,
    useContext,
    useEffect,
    useRef,
    useState
} from 'react'
import { SelectStyled } from '../styles'
import { FormSelectStyled, InputStyled, LabelStyled, OptionsStyled, SearchIconStyled, SelectDeleteStyled, SelectDropdownStyled, SelectInputStyled, SelectLabelStyled } from './styles'
import Search from '@material-ui/icons/Search'
import { FormContext, InputContext } from '../base'
import FormDelete from './FormDelete'

const FormSelect: FunctionComponent = () => {
  const {
    inputValue,
    name,
    label,
    options,
    disabled = false,
    outlined,
    required
  } = useContext(InputContext)
  const [isHovered, setIsHovered] = useState(false)

  const { onBlur, updateInput, darkMode, inputs } = useContext(FormContext)

  const [showDropDown, setShowDropDown] = useState(false)

  const [value, setValue] = useState('')

  const handleBlur = () => {
    onBlur(name)
  }

  const handleClick = () => {
    setShowDropDown(!showDropDown)
  }

  const handleSelectOption = (selectedValue: string) => {
    setValue(selectedValue)
    setShowDropDown(!showDropDown)
  }

  const handleChange = (event: any) => {
    console.log('change', event.target.value);
    setValue(event.target.value)
    // updateInput(name, newValue ? newValue.value : null)
  }

  const arr = [{'value': 'a1'}, {'value': 'a2'}, {'value': 'a3'}, {'value':'a4'}, {'value':'a4'}, {'value':'a4'}, {'value':'a4'}]

  const renderOptions = (
    arr.map((option: any) => {
      return (
        <OptionsStyled onClick={() => handleSelectOption(option.value)}>
          <Font variant="body1">
            {option.value}
          </Font>
        </OptionsStyled>
      )
    })
  )

  const handleMouseHover = () => {
    disabled ? '' : setIsHovered(true)
  }

  const handleMouseLeave = () => {
    disabled ? '' : setIsHovered(false)
  }

  const fieldPlaceholder = required ? `${label}*` : label

  return (
    <FormSelectStyled
      onBlur={handleBlur}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}>
      <InputStyled darkMode={darkMode} disabled={disabled}>
        <SelectLabelStyled>
          <LabelStyled>{value ? fieldPlaceholder : ''}</LabelStyled>
          <SelectInputStyled
            placeholder={fieldPlaceholder}
            list="brow"
            disabled={disabled}
            onClick={handleClick}
            onChange={handleChange}
            darkMode={darkMode}
            value={value} />
        </SelectLabelStyled>
        <SearchIconStyled centerAlign={value ? true : false}>
          <Search />
        </SearchIconStyled>
      </InputStyled>
      <SelectDeleteStyled>
        <FormDelete isHovered={isHovered} />
      </SelectDeleteStyled>
      <SelectDropdownStyled active={showDropDown}>
        {renderOptions}
      </SelectDropdownStyled>  
    </FormSelectStyled>
  )
}
export default memo(FormSelect)
  