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
  CheckboxWithStyled,
  ToggleStyled
} from 'atoms/Checkbox/styles'
import Switch from '@material-ui/core/Switch'

type Props = {
  toggle: boolean
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

const Toggle = withStyles(ToggleStyled)(Switch)

const Checkbox: FunctionComponent<Props> = ({
  toggle = false,
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
      {toggle ? (
        <Toggle checked={isChecked} onChange={handleChange} name='FormToggle' />
      ) : (
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
      )}
      <CheckboxLabelStyled>
        <label htmlFor={`label-${label}`} style={{ fontSize }}>
          {label}
        </label>
      </CheckboxLabelStyled>
    </CheckboxContainerStyled>
  )
}

export default Checkbox
