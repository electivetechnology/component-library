import React, { FunctionComponent } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import {
  useInputStyles,
  useLabelStyles,
  SelectFieldStyled
} from 'atoms/SelectField/style'
import { AnimatedStatusBorder } from 'organisms/Form/styles'

type Props = {
  label?: string
  disabled?: boolean
  value?: { value: string; label: string } | Array<any>
  options: Array<{ value: string; label: string }>
  onChange?: (event: React.ChangeEvent<{}>, value: string) => void
  onInputChange?: (event: object, newValue: string, reason: string) => void
  noOptionsMessage?: string
  darkMode?: boolean
  outlined?: boolean
  status?: string
}

const SelectField: FunctionComponent<Props> = ({
  label,
  disabled,
  value,
  options,
  onChange,
  onInputChange = undefined,
  noOptionsMessage = 'No options',
  darkMode = false,
  outlined = true,
  status
}) => {
  const labelClasses = useLabelStyles({ darkMode, outlined })
  const inputClasses = useInputStyles({ darkMode, outlined, disabled })

  return (
    <SelectFieldStyled>
      <Autocomplete
        value={value}
        options={options}
        onChange={onChange}
        classes={inputClasses}
        disabled={disabled}
        noOptionsText={noOptionsMessage}
        getOptionLabel={(option: any) => option.label}
        renderInput={(params: any) => (
          <TextField
            {...params}
            variant='standard'
            label={label}
            fullWidth
            InputLabelProps={{
              classes: {
                root: labelClasses.label
              }
            }}
          />
        )}
        disableClearable={true}
        onInputChange={onInputChange}
      />
      <AnimatedStatusBorder status={status} />
    </SelectFieldStyled>
  )
}

export default SelectField
