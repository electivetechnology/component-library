import React, { FunctionComponent } from 'react'
import { useInputs } from 'organisms/Form/hooks'
import { FormProps, FormContext } from 'organisms/Form/base'

const Form: FunctionComponent<FormProps> = ({
  children,
  handleUpdate,
  statuses,
  disableForm = false,
  darkMode = false,
  outlineInputs = true
}) => {
  const { inputs, updateInput } = useInputs()

  const onBlur = (name: string) => {
    const value = inputs[name]

    handleUpdate && handleUpdate(name, value)
  }

  return (
    <FormContext.Provider
      value={{
        onBlur,
        updateInput,
        inputs,
        statuses,
        disableForm,
        darkMode,
        outlineInputs
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default Form
