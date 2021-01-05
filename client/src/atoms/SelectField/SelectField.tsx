import React, { FunctionComponent } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { theme } from 'styles/theme'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { AutoCompleteContainerStyled } from './style'

type Props = {
  label?: string
  disabled?: boolean
  value?: { value: string; label: string } | Array<any>
  options: Array<{ value: string; label: string }>
  noOptionsMessage?: string
  theme?: string
}

const useStyles = makeStyles({
  input: (props: any) => ({
    fontSize: '14px !important',
    '&:focused': {
      color: 'yellow'
    }
  }),
  label: (props: any) => ({
    color: props.theme === 'light' ? theme.white : theme.grey,
    fontSize: '14px !important',
    '&:focused': {
      color: 'red'
    }
  }),
  inputRoot: (props: any) => ({
    color: props.theme === 'light' ? theme.white : theme.grey,
    '&::after': {
      borderBottom: `2px solid ${theme.dividerGrey}`
    },
    '&::before': {
      borderBottom: `2px solid ${theme.dividerGrey}`
    },
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: `2px solid ${theme.grey}`
    }
  }),
  popupIndicator: {
    color: theme.dividerGrey
  },
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
  noOptionsMessage = 'No options',
  theme = 'dark'
}) => {
  const classes = useStyles({ theme })

  return (
    <AutoCompleteContainerStyled theme={theme}>
      <Autocomplete
        options={options}
        classes={classes}
        disabled={disabled}
        noOptionsText={noOptionsMessage}
        getOptionLabel={(option: any) => option.label}
        // open={true} // constantly show dropdown menu
        renderInput={(params: any) => (
          <TextField
            {...params}
            variant='standard'
            label={label}
            fullWidth
            InputLabelProps={{
              classes: {
                root: classes.label,
                popupIndicator: classes.popupIndicator
              }
            }}
          />
        )}
        value={value}
      />
    </AutoCompleteContainerStyled>
  )
}

export default SelectField
