import React, { FunctionComponent } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { theme } from 'styles/theme'
import Autocomplete from '@material-ui/lab/Autocomplete'

type Props = {
  label?: string
  disabled?: boolean
  value?: { value: string; label: string } | Array<any>
  options: Array<{ value: string; label: string }>
  onChange?: (event: React.ChangeEvent<{}>, value: string) => void
  noOptionsMessage?: string
  darkMode?: boolean
}

const useInputStyles = makeStyles({
  label: (props: any) => ({
    color: props.darkMode ? theme.white : theme.grey,
    fontSize: '14px !important',
    '&.Mui-focused': {
      color: props.darkMode ? theme.white : theme.grey
    }
  })
})

const useStyles = makeStyles({
  input: () => ({
    fontSize: '14px !important',
    color: theme.black
  }),
  inputRoot: (props: any) => ({
    color: props.darkMode ? theme.white : theme.grey,
    '&::after': {
      borderBottom: props.darkMode
        ? `2px solid ${theme.grey}`
        : `2px solid ${theme.dividerGrey}`
    },
    '&::before': {
      borderBottom: props.darkMode
        ? `2px solid ${theme.grey}`
        : `2px solid ${theme.dividerGrey}`
    },
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: props.darkMode
        ? `2px solid ${theme.white}`
        : `2px solid ${theme.grey}`
    }
  }),
  popupIndicator: (props: any) => ({
    color: props.darkMode ? `${theme.white}` : `${theme.grey}`
  }),
  paper: {
    boxShadow: `0px 9px 13px ${theme.borderGrey}`,
    borderRadius: '2px'
  }
})

const SelectField: FunctionComponent<Props> = ({
  label,
  disabled,
  value,
  options,
  onChange,
  noOptionsMessage = 'No options',
  darkMode = false
}) => {
  const classes = useStyles({ darkMode })
  const inputClasses = useInputStyles({ darkMode })

  return (
    <Autocomplete
      value={value}
      options={options}
      onChange={onChange}
      classes={classes}
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
              root: inputClasses.label
            }
          }}
        />
      )}
      disableClearable={true}
    />
  )
}

export default SelectField
