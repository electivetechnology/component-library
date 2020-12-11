import React, { FunctionComponent, useEffect } from 'react'
import { useInputs } from './hooks'
import { FormProps, FormContext } from 'components/organisms/Form/base'

const Form: FunctionComponent<FormProps> = ({ children, handleUpdate, errors }) => {
  const { inputs, addInput } = useInputs()

  const onBlur = (name: string) => {
    const value = inputs[name]
    handleUpdate && handleUpdate(name, value)
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
