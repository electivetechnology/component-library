import React, { Children, FunctionComponent, useEffect, useState } from 'react'
import { useFormItems } from 'organisms/Form/hooks'
import { FormProps, FormContext } from 'organisms/Form/base'

const Form: FunctionComponent<FormProps> = ({
  children,
  handleUpdate,
  statuses,
  disableForm = false,
  darkMode = false,
  outlineInputs = true,
  setSubmit
}) => {
  const { items: inputs, updateItem: updateInput } = useFormItems()

  const { items: requiredErrors, updateItem: updateRequired } = useFormItems()

  const onBlur = (name: string) => {
    const value = inputs[name]

    handleUpdate && handleUpdate(name, value)
    setSubmit && setSubmit(inputs)
  }

  useEffect(() => {
    Children.map(children, (child: any) => {
      const { required, name } = child.props
      required && updateRequired(name, false)
    })
  }, [])

  useEffect(() => {
    setSubmit(inputs)
  }, [inputs])

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
