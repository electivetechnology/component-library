import React, { FunctionComponent } from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

type Props = {
  id: string
  label?: string
  onChange?: any
  margin?: any
  variant: any
  type?: string
  hasError?: boolean
  maxWidth?: number
  value?: string
  disabled?: boolean
  multiline?: boolean
  defaultValue?: string
  readOnly?: boolean
  handleBlur?: any
  handleEnter?: any
  helperText?: string
  isInline?: boolean
  fontSize?: string
  paddingBttm?: boolean
}

const useStyles = makeStyles({
  component: (props: any) => ({
    width: '100%',
    maxWidth: props.maxWidth ? `${props.maxWidth}px` : '100%',
    zIndex: 0,
    '@media screen and (min-width: 750px)': {
      top: props.isInline ? '21px' : 0
    }
  }),
  input: (props: any) => ({
    paddingBottom: props.paddingBttm ? '4px' : '18px'
  })
})

const TextInput: FunctionComponent<Props> = ({
  id,
  label,
  onChange = null,
  margin = 'normal',
  variant = 'outlined',
  type,
  hasError = false,
  maxWidth,
  disabled = false,
  multiline = false,
  readOnly = false,
  value,
  defaultValue,
  handleBlur = null,
  handleEnter = null,
  helperText,
  isInline,
  fontSize = '14px',
  paddingBttm = false
}) => {
  const classes = useStyles({ maxWidth, isInline, paddingBttm })
  const handleKeyPress = (e: any) => {
    if (handleEnter && e.key === 'Enter') {
      return handleEnter()
    }
  }

  const rowValue = () => {
    if (multiline && value) {
      return 0
    } else if (multiline && !value) {
      return 5
    }
  }

  return (
    <TextField
      data-testid='TextField'
      id={id}
      label={label}
      onChange={onChange}
      margin={margin}
      variant={variant}
      type={type}
      error={hasError}
      className={classes.component}
      disabled={disabled}
      multiline={multiline}
      defaultValue={defaultValue}
      value={value}
      InputProps={{
        readOnly,
        onBlur: handleBlur,
        rows: rowValue(),
        style: {
          fontSize: fontSize
        },
        classes: {
          input: classes.input
        }
      }}
      rowsMax='10'
      onKeyPress={handleKeyPress}
      helperText={helperText}
    />
  )
}

export default TextInput
