import React, { FC, memo, useContext } from 'react'
import { useFormInput } from 'organisms/Form/hooks'
import {
  FormTextContainerStyled,
  TextInputStyled,
  LabelStyled,
  RequiredStyled
} from 'organisms/Form/styles'
import { FormContext, InputContext } from 'organisms/Form/base'
import FormTextArea from 'organisms/Form/components/FormTextArea'
import FormCopy from 'organisms/Form/components/FormCopy'
import WarningIcon from '@material-ui/icons/Warning'
import { theme } from 'styles/theme'

const FormText: FC = () => {
  const {
    inputValue,
    name,
    type,
    label,
    options,
    outlined,
    disabled,
    required,
    status,
    requiredError,
  } = useContext(InputContext)

  const { statusType } = status || {}

  const error = statusType === 'error' || requiredError

  const { onBlur, darkMode } = useContext(FormContext)

  const { value, onChange } = useFormInput(name, inputValue)

  const handleBlur = () => {
    onBlur(name)
  }

  return (
    <FormTextContainerStyled data-testid='FormText'>
      <div>
        {value && (
          <div>
            <LabelStyled darkMode={darkMode} htmlFor={name}>
              {label}
            </LabelStyled>
            {required && <RequiredStyled>*</RequiredStyled>}
          </div>
        )}
        {options && options.multiline ? (
          <FormTextArea
            darkMode={darkMode}
            name={name}
            onChange={onChange}
            handleBlur={handleBlur}
            value={value}
            placeholder={value ? '' : label}
            disabled={disabled}
            error={error}
          />
        ) : (
          <div>
            <TextInputStyled
              darkMode={darkMode}
              id={name}
              onChange={onChange}
              onBlur={handleBlur}
              type={type}
              value={value}
              placeholder={value ? '' : label}
              disabled={disabled}
              error={error}
            />
            {error && <WarningIcon style={{
              width: '18px',
              margin: 'auto',
              height: '18px',
              fill: darkMode ? theme.white : theme.grey
            }} />}
          </div>
        )}
      </div>
      {options && options.copy && <FormCopy value={value} darkMode={darkMode} />}
    </FormTextContainerStyled>
  )
}

export default memo(FormText)
