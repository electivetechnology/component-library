import React, {
  FunctionComponent,
  useState,
  useEffect,
  ChangeEvent
} from 'react'
import MaterialCheckbox, { CheckboxProps } from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles'
import {
  CheckboxContainerStyled,
  CheckboxLabelStyled,
  CheckboxWithStyled
} from 'atoms/Checkbox/styles'
import { theme } from 'styles/theme'
import { RequiredStyled } from 'organisms/Form/styles'

type Props = {
  label?: string
  fontSize?: string
  onChange: any
  onBlur?: any
  value?: any
  disabled?: boolean
  darkMode?: boolean
  required?: boolean
}

const CheckboxStyled = withStyles(
  CheckboxWithStyled
)((props: CheckboxProps) => <MaterialCheckbox color='default' {...props} />)

const Checkbox: FunctionComponent<Props> = ({
  label,
  onChange,
  onBlur,
  value,
  disabled = false,
  fontSize,
  darkMode,
  required
}) => {
  const [isChecked, setCheckbox] = useState(value)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckbox(event.target.checked)
    onChange(event.target.checked)
  }

  useEffect(() => {
    setCheckbox(value)
  }, [value])

  const handleCheckboxTheme = () => {
    if (darkMode && disabled) {
      return theme.disabledTextGrey
    } else if (darkMode && !disabled) {
      return theme.white
    } else if (!darkMode && !disabled) {
      return theme.primaryColorValencia
    } else {
      return theme.secondaryHover
    } 
  }

  return (
    <CheckboxContainerStyled data-testid='Checkbox'>
      <CheckboxStyled
        id={`label-${label}`}
        checked={isChecked}
        onChange={handleChange}
        inputProps={{
          'aria-label': 'primary checkbox'
        }}
        onBlur={onBlur}
        disabled={disabled}
        style={{color: handleCheckboxTheme()}}
      />
      <CheckboxLabelStyled disabled={disabled} darkMode={darkMode}>
        <label htmlFor={`label-${label}`} style={{ fontSize: fontSize }}>
          {label}
        </label>
        {required && <RequiredStyled disabled={disabled}>*</RequiredStyled>}
      </CheckboxLabelStyled>
    </CheckboxContainerStyled>
  )
}

export default Checkbox
