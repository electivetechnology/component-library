import React, { FunctionComponent, memo, useContext, useState } from 'react'
import { useFormInput } from 'organisms/Form/hooks'
import {
  FormTextContainerStyled,
  TextInputStyled,
  LabelStyled,
  RequiredStyled,
  TextAreaStyled
} from 'organisms/Form/styles'
import { FormContext, InputContext, handleFormColor } from 'organisms/Form/base'
import FormTextArea from 'organisms/Form/components/FormTextArea'
import FormCopy from 'organisms/Form/components/FormCopy'
import WarningIcon from '@material-ui/icons/Warning'
import { theme } from 'styles/theme'
import FormDelete from './FormDelete'

const FormText: FunctionComponent = () => {
  const { onBlur, darkMode = false, inputs } = useContext(FormContext)
  const {
    inputValue,
    name,
    type,
    label,
    options,
    outlined,
    disabled = false,
    required,
    status,
    requiredError
  } = useContext(InputContext)
  const { multiline, suffix, prefix, icon, copy, commaSeperated } = options || {}
  const { statusType } = status || {}
  const error = statusType === 'error' || requiredError
  const fieldPlaceholder = required ? `${label}*` : label

  const [isHovered, setIsHovered] = useState(false)
  const { value, onChange } = useFormInput(name, inputValue, commaSeperated)

  const handleBlur = () => {
    onBlur(name)
  }

  const handleMouseHover = () => {
    !disabled && setIsHovered(true)
  }

  const handleMouseLeave = () => {
    !disabled && setIsHovered(false)
  }

  return (
    <FormTextContainerStyled
      data-testid='FormText'
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}
      fixedHeight={!multiline && !!value}
    >
      <div style={{ width: '100%' }}>
        {value && (
          <div>
            <LabelStyled
              color={handleFormColor(theme.grey, darkMode, disabled)}
              htmlFor={name}
            >
              {label}
            </LabelStyled>
            {required && <RequiredStyled disabled={disabled}>*</RequiredStyled>}
          </div>
        )}

        <TextAreaStyled
          disabled={disabled}
          darkMode={darkMode}
          error={error}
          icon={suffix || prefix}
        >
          {prefix && icon}

          {multiline ? (
            <FormTextArea
              icon={suffix || prefix}
              darkMode={darkMode}
              name={name}
              onChange={onChange}
              handleBlur={handleBlur}
              value={value}
              placeholder={value ? '' : fieldPlaceholder}
              disabled={disabled}
              error={error}
            />
          ) : (
            <TextInputStyled
              darkMode={darkMode}
              id={name}
              onChange={onChange}
              onBlur={handleBlur}
              type={type}
              value={value}
              placeholder={value ? '' : fieldPlaceholder}
              disabled={disabled}
              error={error}
              icon={suffix || prefix}
            />
          )}

          {error && (
            <WarningIcon
              style={{
                width: '18px',
                margin: 'auto',
                height: '18px',
                fill: theme.primaryColorValencia
              }}
            />
          )}
          {suffix && icon}
        </TextAreaStyled>
      </div>
      {copy && (
        <FormCopy isHovered={isHovered} value={value} darkMode={darkMode} />
      )}
      <FormDelete isHovered={isHovered} />
    </FormTextContainerStyled>
  )
}

export default memo(FormText)
