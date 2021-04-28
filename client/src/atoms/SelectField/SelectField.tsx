import React, { FC } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import {
  useInputStyles,
  useLabelStyles,
  SelectFieldStyled
} from 'atoms/SelectField/style'

type Props = {
  label?: string
  disabled?: boolean
  value?: { value: string; label: string } | Array<any>
  options: Array<{ value: string; label: string }>
  onChange?: (event: React.ChangeEvent<{}>, value: string) => void
  noOptionsMessage?: string
  darkMode?: boolean
  outlined?: boolean
}

const SelectField: FC<Props> = ({
  label,
  disabled,
  value,
  options,
  onChange,
  noOptionsMessage = 'No options',
  darkMode = false,
  outlined = true
}) => {
  const labelClasses = useLabelStyles({ darkMode, outlined })
  const inputClasses = useInputStyles({ darkMode, outlined })

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
      />
    </SelectFieldStyled>
  )
}

export default SelectField
