import React, {
  FunctionComponent,
  memo,
  useContext,
  useEffect,
  useRef
} from 'react'
import { FormContext, InputContext } from 'organisms/Form/base'
import { selectedOption } from 'organisms/Form/mock'
import { SelectField } from 'atoms'
import { SelectStyled } from 'organisms/Form/styles'
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
    requiredError
  } = useContext(InputContext)

  const { onBlur, updateInput, darkMode, inputs } = useContext(FormContext)
  const valueRef = useRef()

  const handleBlur = () => {
    onBlur(name)
  }

  const selectOptions =
    options && options.selectOptions ? options.selectOptions : []

  const selected = options ? selectedOption(selectOptions, inputValue) : null

  const handleChange = (event: any, newValue: any) => {
    valueRef.current = newValue
    updateInput(name, newValue ? newValue.value : null)
  }

  useEffect(() => {
    valueRef.current && handleBlur()
  }, [valueRef.current])

  const fieldPlaceholder = required ? `${label}*` : label

  const { statusType } = status || {}
  const error = statusType === 'error' || requiredError

  return (
    <SelectStyled error={error} data-testid='FormSelect'>
      <SelectField
        label={fieldPlaceholder}
        value={selected}
        options={selectOptions}
        disabled={disabled}
        onChange={handleChange}
        darkMode={darkMode}
        outlined={outlined}
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
