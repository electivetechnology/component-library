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
  border?: boolean
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

export const inputBorder = (border: boolean, darkMode: boolean) => {
  if (border) {
    if (darkMode) {
      return `2px solid ${theme.grey}`
    } else {
      return `2px solid ${theme.dividerGrey}`
    }
  } else {
    return 'none'
  }
}

export const inputBorderHover = (border: boolean, darkMode: boolean) => {
  if (border) {
    if (darkMode) {
      return `2px solid ${theme.white}`
    } else {
      return `2px solid ${theme.grey}`
    }
  } else {
    return 'none'
  }
}

const useStyles = makeStyles({
  input: (props: any) => ({
    fontSize: '14px !important',
    color: props.darkMode ? theme.white : theme.black
  }),
  inputRoot: (props: any) => ({
    color: props.darkMode ? theme.white : theme.grey,
    '&::after': {
      borderBottom: inputBorder(props.border, props.darkMode)
    },
    '&::before': {
      borderBottom: inputBorder(props.border, props.darkMode)
    },
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: inputBorderHover(props.border, props.darkMode)
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
  darkMode = false,
  border = true
}) => {
  const classes = useStyles({ darkMode, border })
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
