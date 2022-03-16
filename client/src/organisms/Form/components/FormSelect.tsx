import React, {
  FunctionComponent,
  memo,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { FormContext, InputContext } from 'organisms/Form/base'
import { Select } from 'molecules/Select'
import FormDelete from 'organisms/Form/components/FormDelete'
import { SelectStyled } from 'organisms/Form/styles'
import isNull from 'lodash/isNull'
import WarningIcon from '@mui/icons-material/Warning'
import { theme } from 'styles/theme'

const FormSelect: FunctionComponent = () => {
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
  } = useContext(InputContext)
  const { onBlur, updateInput, darkMode } = useContext(FormContext)

  const valueRef = useRef(null)

  const handleChange = (newValue: any) => {
    if (inputValue !== newValue) {
      valueRef.current = newValue
      updateInput(name, newValue)
    }
  }

  useEffect(() => {
    !isNull(valueRef.current) && onBlur(name)
  }, [valueRef.current])

  const { statusType } = status || {}
  const error = statusType === 'error' || requiredError

  return (
    <SelectStyled data-testid='FormSelect' error={error}>
      <Select
        label={label}
        onChange={handleChange}
        initialValue={inputValue}
        required={required}
        outlined={outlined}
        darkMode={darkMode}
        disabled={disabled}
      >
        {options?.selectOptions?.map((option) => option)}
      </Select>
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
export default memo(FormSelect)
