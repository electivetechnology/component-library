import React, { FunctionComponent } from 'react'
import { useFormError, useInputs } from 'organisms/Form/hooks'
import { FormProps, FormContext } from 'organisms/Form/base'
import { FormWrapperStyled } from 'organisms/Form/styles'

const Form: FunctionComponent<FormProps> = ({
  children,
  handleUpdate,
}) => {
  const { inputs, updateInput } = useInputs()
  const { errors, addError, removeError } = useFormError()

  const onBlur = (name: string) => {
    const value = inputs[name]
    handleUpdate && handleUpdate(name, value, addError, removeError)
  }

  return (
    <FormContext.Provider
      value={{
        onBlur,
        updateInput,
        inputs,
        errors
      }}
    >
      <FormWrapperStyled isEmbeddedForm={false}>
        {children}
      </FormWrapperStyled>
    </FormContext.Provider>
  )
}

export default Form
