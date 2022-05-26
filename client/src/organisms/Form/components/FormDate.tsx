import React, {
  FunctionComponent,
  memo,
  useContext,
  useEffect,
  useState
} from 'react'
import {
  DateLabelStyled,
  DateWrapperStyled,
  DateStyles,
  RequiredStyled
} from 'organisms/Form/styles'
import TextField from '@mui/material/TextField'
import {
  FormContext,
  InputContext,
  handleFormComponentColor
} from 'organisms/Form/base'
import DatePicker from '@mui/lab/DatePicker'
import DateAdapter from '@mui/lab/AdapterDayjs'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { useFormInput } from 'organisms/Form/hooks'
import { theme } from 'styles/theme'
import InsertInvitation from '@mui/icons-material/InsertInvitationOutlined'
import FormStatus from 'organisms/Form/components/FormStatus'

const FormDate: FunctionComponent = () => {
  const {
    name,
    label,
    disabled = false,
    required = false
  } = useContext(InputContext)

  const { onBlur, darkMode } = useContext(FormContext)

  const { value, onChange } = useFormInput()

  const [isNewDate, setIsNewDate] = useState(0)

  const classes = DateStyles({ darkMode, disabled })

  useEffect(() => {
    isNewDate && onBlur(name)
  }, [isNewDate])

  const handleChange = (date: any) => {
    onChange(date ? date.format() : null)
    setIsNewDate(isNewDate + 1)
  }

  return (
    <DateWrapperStyled>
      <DateLabelStyled darkMode={darkMode} disabled={disabled}>
        {label}
        {required && <RequiredStyled disabled={disabled}>*</RequiredStyled>}
      </DateLabelStyled>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          label='Basic example'
          value={value ? value : null}
          onChange={handleChange}
          renderInput={(params: any) => <TextField {...params} />}
        />
        <FormStatus />
      </LocalizationProvider>
    </DateWrapperStyled>
  )
}

export default memo(FormDate)
