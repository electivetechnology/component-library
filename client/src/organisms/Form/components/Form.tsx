import React, { Children, FunctionComponent, useEffect, useState } from 'react'
import { useInputs, useRequired } from 'organisms/Form/hooks'
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

  // TOOD: only update inputs on blur?

  const { requiredErrors, updateRequired } = useRequired()

  const onBlur = (name: string) => {
    const value = inputs[name]

    handleUpdate && handleUpdate(name, value)
  }

  useEffect(() => {
    Children.map(children, (child: any) => {
      const { required, name } = child.props
      required && updateRequired(name, false)
    })
  }, [])

  return (
    <FormContext.Provider
      value={{
        onBlur,
        updateInput,
        inputs,
        statuses,
        requiredErrors,
        updateRequired,
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
