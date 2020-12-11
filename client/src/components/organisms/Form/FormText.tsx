import React, { FunctionComponent, memo, useContext } from 'react'
import { Font, TextField } from 'components/atoms'
import { useFormInput } from './hooks'
import {
  FlexibilityWrapperStyled,
  AffixStyled,
  FormTextContainerStyled
} from './styles'
import { FormContext, InputContext } from 'components/organisms/Form/base'

const FormText: FunctionComponent = () => {
  const { name, type, label, options } = useContext(InputContext)

  const { onBlur, dispatch, inputs } = useContext(FormContext)

  const value = inputs[name] ? inputs[name] : null

  const inputHook = useFormInput(name, dispatch, value)

  const handleBlur = () => {
    onBlur(name)
  }

  return (
    <FormTextContainerStyled>
      <TextField
        id={label}
        label={label}
        handleBlur={handleBlur}
        {...inputHook}
        type={type}
        multiline={options?.multiline}
        variant='standard'
      />
    </FormTextContainerStyled>
  )
}

export default memo(FormText)
