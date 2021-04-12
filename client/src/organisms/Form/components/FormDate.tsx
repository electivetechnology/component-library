import React, {
  FunctionComponent,
  memo,
  useContext,
  useEffect,
  useState
} from 'react'
import { DateLabelStyled, DateWrapperStyled, DateStyles, RequiredStyled } from 'organisms/Form/styles'
import { FormContext, InputContext } from 'organisms/Form/base'
import DateUtils from '@date-io/dayjs'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import { useFormInput } from 'organisms/Form/hooks'
import { theme } from 'styles/theme'
import InsertInvitation from '@material-ui/icons/InsertInvitationOutlined'

const FormDate: FunctionComponent = () => {
  const { inputValue, name, label, disabled, required = false } = useContext(InputContext)

  const { onBlur, darkMode } = useContext(FormContext)

  const { value, onChange } = useFormInput(name, inputValue)

  const [isNewDate, setIsNewDate] = useState(0)

  const classes = DateStyles({darkMode})

  useEffect(() => {
    isNewDate && onBlur(name)
  }, [isNewDate])

  const handleChange = (date: any) => {
    onChange(date ? date.format() : null)
    setIsNewDate(isNewDate + 1)
  }

  return (
    <DateWrapperStyled>
      <DateLabelStyled darkMode={darkMode}>
        {label}
        {required && <RequiredStyled>*</RequiredStyled>}
      </DateLabelStyled>
      <MuiPickersUtilsProvider utils={DateUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant='inline'
          format='DD/MM/YYYY'
          margin='normal'
          placeholder='dd/mm/yyyy'
          value={value ? value : null}
          onChange={handleChange}
          autoOk
          InputProps={{
            className: classes.input,
            style: {
              fontSize: 14, 
              color: darkMode ? theme.white : theme.grey,
            }
          }}
          style={{ margin: '8px 0 0' }}
          readOnly={disabled}
          fullWidth
          keyboardIcon={<InsertInvitation style={{color: darkMode ? theme.white : theme.primaryGrey}} />}
        />
      </MuiPickersUtilsProvider>
    </DateWrapperStyled>
  )
}

export default memo(FormDate)
