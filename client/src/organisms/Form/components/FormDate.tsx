import React, {
  FunctionComponent,
  memo,
  useContext,
  useEffect,
  useState
} from 'react'
import { DateLabelStyled, DateWrapperStyled } from 'organisms/Form/styles'
import { FormContext, InputContext } from 'organisms/Form/base'
import DateUtils from '@date-io/dayjs'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import { useFormInput } from 'organisms/Form/hooks'
import { theme } from 'styles/theme'

const FormDate: FunctionComponent = () => {
  const { inputValue, name, label, disabled } = useContext(InputContext)

  const { onBlur, darkMode } = useContext(FormContext)

  const { value, onChange } = useFormInput(name, inputValue)

  const [isNewDate, setIsNewDate] = useState(0)

  useEffect(() => {
    isNewDate && onBlur(name)
  }, [isNewDate])

  const handleChange = (date: any) => {
    onChange(date ? date.format() : null)
    setIsNewDate(isNewDate + 1)
  }

  return (
    <DateWrapperStyled>
      <DateLabelStyled darkMode={darkMode}>{label}</DateLabelStyled>
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
            style: { fontSize: 14, color: darkMode ? theme.white : theme.black }
          }}
          style={{ margin: '8px 0 0' }}
          readOnly={disabled}
          fullWidth
        />
      </MuiPickersUtilsProvider>
    </DateWrapperStyled>
  )
}

export default memo(FormDate)
