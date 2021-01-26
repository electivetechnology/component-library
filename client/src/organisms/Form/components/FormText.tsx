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
    disabled
  } = useContext(InputContext)

  const { onBlur } = useContext(FormContext)

  const { value, onChange } = useFormInput(name, inputValue)

  const handleBlur = () => {
    onBlur(name)
  }

  return (
    <Fragment>
      <FormTextContainerStyled>
        {value ? <LabelStyled htmlFor={name}>{label}</LabelStyled> : null}
        {options?.multiline ? (
          <FormTextArea
            name={name}
            onChange={onChange}
            handleBlur={handleBlur}
            value={value}
            placeholder={value ? '' : label}
            disabled={disabled}
          />
        ) : (
          <TextInputStyled
            id={name}
            onChange={onChange}
            onBlur={handleBlur}
            type={type}
            value={value}
            placeholder={value ? '' : label}
            disabled={disabled}
          />
        )}
        {options?.copy && <FormCopy value={value} />}
      </FormTextContainerStyled>
    </Fragment>
  )
}

export default memo(FormText)
