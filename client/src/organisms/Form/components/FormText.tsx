import React, { FunctionComponent, memo, useContext } from 'react'
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

const FormText: FunctionComponent = () => {
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

  const placeholder = required ? `${label}* ` : label

  return (
    <FormTextContainerStyled data-testid='FormText'>
      <div style={{width: '100%'}}>
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
            placeholder={value ? '' : placeholder}
            disabled={disabled}
            error={error}
          />
        ) : (
          <div style={{display: 'inline-flex'}}>
            <TextInputStyled
              darkMode={darkMode}
              id={name}
              onChange={onChange}
              onBlur={handleBlur}
              type={type}
              value={value}
              placeholder={value ? '' : placeholder}
              disabled={disabled}
              error={error}
            />
            {error && <WarningIcon style={{
              width: '18px',
              margin: 'auto',
              height: '18px',
              fill: darkMode ? theme.white : theme.primaryColorValencia
            }} />}
          </div>
        )}
      </div>
      {options && options.copy && <FormCopy value={value} darkMode={darkMode} />}
    </FormTextContainerStyled>
  )
}

export default memo(FormText)
