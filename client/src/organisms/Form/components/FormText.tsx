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
    requiredError,
  } = useContext(InputContext)
  
  const [isHovered, setIsHovered] = useState(false)

  const { statusType } = status || {}

  const error = statusType === 'error' || requiredError

  const { onBlur, darkMode = false, inputs } = useContext(FormContext)

  const { value, onChange } = useFormInput(name, inputValue)

  const handleBlur = () => {
    onBlur(name)
  }

  const handleMouseHover = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const fieldPlaceholder = required ? `${label}*` : label

  return (
    <FormTextContainerStyled 
      data-testid='FormText'
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}>
      <div style={{width: '100%'}}>
        {value && (
          <div>
            <LabelStyled color={handleFormColor(theme.grey, darkMode, disabled)} htmlFor={name}>
              {label}
            </LabelStyled>
            {required && <RequiredStyled disabled={disabled}>*</RequiredStyled>}
          </div>
        )}
        {options && options.multiline ? (
          <TextAreaStyled
            disabled={disabled}
            darkMode={darkMode}
            error={error}
            icon={options?.suffix || options?.prefix}>
            {options && options.prefix && options.icon}
            <FormTextArea
              icon={options?.suffix || options?.prefix}
              darkMode={darkMode}
              name={name}
              onChange={onChange}
              handleBlur={handleBlur}
              value={value}
              placeholder={value ? '' : fieldPlaceholder}
              disabled={disabled}
              error={error}
            />
            {options && options.suffix && options.icon}
          </TextAreaStyled>
        ) : (
          <TextAreaStyled
            disabled={disabled}
            darkMode={darkMode}
            error={error}
            icon={options?.suffix || options?.prefix}>
            {options && options.prefix && options.icon}
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
              icon={options?.suffix || options?.prefix}
            />
            {error && <WarningIcon style={{
              width: '18px',
              margin: 'auto',
              height: '18px',
              fill: darkMode ? theme.white : theme.primaryColorValencia
            }} />}
            {options && options.suffix && options.icon}
          </TextAreaStyled>
        )}
      </div>
      {options && 
        options.copy && 
        <FormCopy isHovered={isHovered} value={value} darkMode={darkMode} />}
      {options && options.isDelete && <FormDelete id={inputs.id} isHovered={isHovered} />}
    </FormTextContainerStyled>
  )
}

export default memo(FormText)
