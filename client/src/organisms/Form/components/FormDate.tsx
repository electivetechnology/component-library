import React, {
  FunctionComponent,
  memo,
  useContext,
  useEffect,
  useState,
  Fragment
} from 'react'
import { DateWrapperStyled, RequiredStyled } from 'organisms/Form/styles'
import { FormContext, InputContext } from 'organisms/Form/base'
import { useFormInput } from 'organisms/Form/hooks'
import FormStatus from 'organisms/Form/components/FormStatus'
import { DatePicker } from 'atoms'

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

  useEffect(() => {
    isNewDate && onBlur(name)
  }, [isNewDate])

  const handleChange = (date: any) => {
    onChange(date ? date.format() : null)
    setIsNewDate(isNewDate + 1)
  }

  return (
    <DateWrapperStyled>
      <DatePicker
        label={
          <Fragment>
            {label}
            {required && <RequiredStyled disabled={disabled}>*</RequiredStyled>}
          </Fragment>
        }
        value={value ? value : null}
        handleChange={handleChange}
        darkMode={darkMode}
        disabled={disabled}
        fullWidth={true}
      />
      <FormStatus />
    </DateWrapperStyled>
  )
}

export default memo(FormDate)
