import React, { FC } from 'react'
import TextField from '@material-ui/core/TextField'
import MaterialAutocomplete from '@material-ui/lab/Autocomplete'
import { useStyles } from 'atoms/AutoComplete/styles'

type Props = {
  defaultValue?: { value: string; label: string }
  options: Array<{ value: string; label: string }>
  onChange?: any
  placeholder: string
  onBlur?: any
  value?: { value: string; label: string }
  label?: string
  disabled?: boolean
  noOptionsMessage?: string
  isMulti?: boolean
  disableClearable?: boolean
  onInputChange?: any
}

const AutoComplete: FC<Props> = ({
  value,
  defaultValue,
  options,
  placeholder,
  onChange = undefined,
  onBlur = undefined,
  label,
  disabled = false,
  noOptionsMessage = 'No more options',
  isMulti = false,
  disableClearable = true,
  onInputChange = undefined
}) => {
  const classes = useStyles()

  return (
    <div style={{ width: '100%' }} data-testid='AutoComplete'>
      <MaterialAutocomplete
        options={options}
        noOptionsText={noOptionsMessage}
        placeholder={placeholder}
        defaultValue={defaultValue}
        getOptionLabel={(option: any) => option.label}
        renderInput={(params) => (
          <TextField {...params} label={label} variant='standard' fullWidth />
        )}
        value={value}
        onChange={(event: any, newValue: any) => {
          onChange(event, newValue)
        }}
        onBlur={() => (onBlur ? onBlur() : '')}
        disabled={disabled}
        multiple={isMulti}
        disableClearable={disableClearable}
        classes={{ inputRoot: classes.inputRoot }}
        onInputChange={onInputChange}
      />
    </div>
  )
}

export default AutoComplete
