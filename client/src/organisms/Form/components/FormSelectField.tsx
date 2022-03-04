import React, {
  FunctionComponent,
  memo,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { FormContext, InputContext } from 'organisms/Form/base'
import { selectedOption } from 'organisms/Form/mock'
import { SelectField } from 'atoms'
import { SelectStyled } from '../styles'
import WarningIcon from '@material-ui/icons/Warning'
import { theme } from 'styles/theme'
import FormStatus from 'organisms/Form/components/FormStatus'

const FormSelectField: FunctionComponent = () => {
  const {
    inputValue,
    name,
    label,
    options,
    disabled,
    outlined,
    required,
    status,
    requiredError,
    handleInputChange
  } = useContext(InputContext)

  const [autoOptions, setAutoOptions] = useState(options)

  const { onBlur, updateInput, darkMode } = useContext(FormContext)
  const valueRef = useRef()

  const handleBlur = () => {
    onBlur(name)
  }

  const selectOptions = autoOptions?.selectOptions ? autoOptions.selectOptions : []

  const selected = autoOptions ? selectedOption(selectOptions, inputValue) : null

  const handleChange = (event: any, newValue: any) => {
    valueRef.current = newValue
    updateInput(name, newValue ? newValue.value : null)
  }

  const onInputChange = (
    event: object,
    newValue: string,
    reason: string
  ) => {
    handleInputChange && reason !== 'reset' && handleInputChange(newValue)
  }

  useEffect(() => {
    valueRef.current && handleBlur()
  }, [valueRef.current])

  useEffect(() => {
    setAutoOptions(options)
  }, [options])

  const fieldPlaceholder = required ? `${label}*` : label

  const { statusType } = status || {}
  const error = statusType === 'error' || requiredError

  return (
    <SelectStyled error={error} data-testid='FormSelect'>
      <SelectField
        label={fieldPlaceholder}
        value={!handleInputChange ? selected : undefined}
        options={selectOptions}
        disabled={disabled}
        onChange={handleChange}
        darkMode={darkMode}
        outlined={outlined}
        onInputChange={onInputChange}
      />
      <FormStatus />
      {error && (
        <WarningIcon
          style={{
            width: '18px',
            margin: 'auto',
            height: '18px',
            fill: theme.primaryColor
          }}
        />
      )}
    </SelectStyled>
  )
}
export default memo(FormSelectField)
