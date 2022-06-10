import React, { FC, memo, Fragment } from 'react'
import { AdapterDayjs as DateAdapter } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateType } from '@date-io/type'
import TextField from '@mui/material/TextField'
import { Dayjs } from 'dayjs'
import { theme } from 'styles/theme'
import { DateLabelStyled } from './styles'

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
  return (
    <div style={{ minWidth: '100%' }}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DesktopDatePicker
          readOnly={disabled}
          inputFormat='DD/MM/YYYY'
          label={
            <DateLabelStyled darkMode={darkMode} disabled={disabled}>
              {label}
            </DateLabelStyled>
          }
          renderInput={(params: any) => (
            <TextField {...params} variant={'standard'} fullWidth={fullWidth} />
          )}
          value={value}
          onChange={handleChange}
          onAccept={handleAccept}
          InputProps={{
            disableUnderline,
            style: {
              fontSize: 14,
              color: darkMode ? theme.white : `${theme.grey}`
            },
            'aria-label': label
          }}
        />
      </LocalizationProvider>
    </div>
  )
}

export default memo(DatePicker)
