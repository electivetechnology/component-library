import React, { FunctionComponent } from 'react'
import { useFormError, useInputs } from 'organisms/Form/hooks'
import { FormProps, FormContext } from 'organisms/Form/base'

const Form: FunctionComponent<FormProps> = ({ children, handleUpdate }) => {
  const { inputs, addInput } = useInputs()
  const { errors, addError, removeError } = useFormError()

  const onBlur = (name: string) => {
    const value = inputs[name]

    handleUpdate && handleUpdate(name, value, addError, removeError)
  }

  return (
    <FormContext.Provider
      value={{
        onBlur,
        addInput,
        inputs,
        errors
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default Form
