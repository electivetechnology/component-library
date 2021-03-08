import React, {
  FunctionComponent,
  useState,
  useEffect,
  ChangeEvent
} from 'react'
import { Checkbox as MaterialCheckbox, CheckboxProps } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import {
  CheckboxContainerStyled,
  CheckboxLabelStyled,
  CheckboxWithStyled
} from 'atoms/Checkbox/styles'

type Props = {
  label?: string
  fontSize?: string
  onChange: any
  onBlur?: any
  value?: any
  disabled?: boolean
}

const CheckboxStyled = withStyles(
  CheckboxWithStyled
)((props: CheckboxProps) => <MaterialCheckbox color='default' {...props} />)

const Checkbox: FunctionComponent<Props> = ({
  label,
  onChange,
  onBlur,
  value,
  disabled,
  fontSize
}) => {
  const [isChecked, setCheckbox] = useState(value)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckbox(event.target.checked)
    onChange(event.target.checked)
  }

  useEffect(() => {
    setCheckbox(value)
  }, [value])

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
      />
      <CheckboxLabelStyled>
        <label htmlFor={`label-${label}`} style={{ fontSize }}>
          {label}
        </label>
      </CheckboxLabelStyled>
    </CheckboxContainerStyled>
  )
}

export default Checkbox
