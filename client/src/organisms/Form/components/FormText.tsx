import React, { FunctionComponent, memo, useContext, Fragment } from 'react'
import { useFormInput } from 'organisms/Form/hooks'
import {
  FormTextContainerStyled,
  TextInputStyled,
  LabelStyled
} from 'organisms/Form/styles'
import { FormContext, InputContext } from 'organisms/Form/base'
import FormTextArea from 'organisms/Form/components/FormTextArea'
import FormCopy from 'organisms/Form/components/FormCopy'

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
    requiredError
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
      {value && (
        <LabelStyled darkMode={darkMode} htmlFor={name}>
          {label}
        </LabelStyled>
      )}
      {options?.multiline ? (
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
      )}
      {options?.copy && <FormCopy value={value} />}
    </FormTextContainerStyled>
  )
}

export default memo(FormText)
