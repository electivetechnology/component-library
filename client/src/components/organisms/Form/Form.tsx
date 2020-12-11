import React, { FunctionComponent } from 'react'
import { useInputsReducer } from './hooks'
import { FormProps, FormContext } from 'components/organisms/Form/base'

const Form: FunctionComponent<FormProps> = ({ children, handleUpdate }) => {
  const { inputs, dispatch } = useInputsReducer()

  const onBlur = (name: string) => {
    const updateValue = inputs[name]
    handleUpdate && handleUpdate(updateValue)
  }

  return (
    <FormContext.Provider
      value={{
        onBlur,
        dispatch,
        inputs
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default Form
