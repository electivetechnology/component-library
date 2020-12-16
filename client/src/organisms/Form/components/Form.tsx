import React, { FunctionComponent } from 'react'
import { useInputStatus, useInputs } from 'organisms/Form/hooks'
import { FormProps, FormContext } from 'organisms/Form/base'
import { FormWrapperStyled } from 'organisms/Form/styles'

const Form: FunctionComponent<FormProps> = ({
  children,
  handleUpdate,
}) => {
  const { inputs, updateInput } = useInputs()
  const { statuses, addStatus } = useInputStatus()

  const onBlur = (name: string) => {
    const value = inputs[name]
    handleUpdate && handleUpdate(name, value, addStatus)
  }

  return (
    <FormContext.Provider
      value={{
        onBlur,
        updateInput,
        inputs,
        statuses
      }}
    >
      <FormWrapperStyled isEmbeddedForm={false}>
        {children}
      </FormWrapperStyled>
    </FormContext.Provider>
  )
}

export default Form