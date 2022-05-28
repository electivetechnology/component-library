import React, { FC, memo, Fragment } from 'react'
import { AdapterDayjs as DateAdapter } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateType } from '@date-io/type'
import TextField from '@mui/material/TextField'
import { Dayjs } from 'dayjs'
import { theme } from 'styles/theme'
import { DateLabelStyled, useStyles } from './styles'

type Props = {
  value: DateType | null
  handleChange: (
    date: Dayjs | null,
    keyboardInputValue?: string | undefined
  ) => void
  handleAccept?: any
  label?: any
  disabled?: boolean
  darkMode?: boolean
  disableUnderline?: boolean
  fullWidth?: boolean
}

const DatePicker: FC<Props> = ({
  value,
  handleChange,
  handleAccept,
  label,
  disabled = false,
  darkMode = false,
  disableUnderline = false,
  fullWidth = false
}) => {
  const classes = useStyles({
    fullWidth
  })
  return (
    <div style={{ minWidth: '100%' }}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DesktopDatePicker
          className={classes.datepicker}
          readOnly={disabled}
          inputFormat='DD/MM/YYYY'
          label={
            <DateLabelStyled darkMode={darkMode} disabled={disabled}>
              {label}
            </DateLabelStyled>
          }
          renderInput={(params: any) => (
            <TextField {...params} variant={'standard'} />
          )}
          value={value}
          onChange={handleChange}
          onAccept={handleAccept}
          InputProps={{
            disableUnderline,
            style: {
              minWidth: '100%',
              fontSize: 14,
              color: darkMode ? theme.white : `${theme.shadow}`
            },
            'aria-label': label
          }}
        />
      </LocalizationProvider>
    </div>
  )
}

export default memo(DatePicker)
