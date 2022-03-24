import React, { Children, FunctionComponent, useEffect } from 'react'
import { useFormItems } from 'organisms/Form/hooks'
import { FormProps, FormContext } from 'organisms/Form/base'
import isEmpty from 'lodash/isEmpty'
import isNull from 'lodash/isNull'
import { isUndefined } from 'lodash'

const Form: FunctionComponent<FormProps> = ({
  children,
  handleUpdate,
  handleUpdateAll,
  statuses,
  disableForm = false,
  darkMode = false,
  outlineInputs = true
}) => {
  const { items: inputs, updateItem: updateInput } = useFormItems()

  const { items: requiredErrors, updateItem: updateRequired } = useFormItems()

  const onBlur = (name: string) => {
    const value = inputs[name]

    if (handleUpdate) {
      let error = false
      const isRequired = !isUndefined(requiredErrors[name])

      if (isRequired) {
        error = isEmpty(value) || isNull(value)
        updateRequired(name, error)
      }

      !error && handleUpdate(name, value)
    }

    if (handleUpdateAll) {
      const hasErrors = Object.keys(requiredErrors).filter((inputName: any) => {
        const inputValue = inputs[inputName]
        const error = isEmpty(inputValue) || isNull(inputValue)

        updateRequired(inputName, error)

        return error
      })

      isEmpty(hasErrors) && handleUpdateAll(inputs)
    }
  }

  useEffect(() => {
    Children.map(children, (child: any) => {
      const { required, name } = child?.props || {}
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
