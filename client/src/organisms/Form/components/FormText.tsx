import React, { FunctionComponent, memo, useContext, Fragment } from 'react'
import { useFormInput } from 'organisms/Form/hooks'
import { FormTextContainerStyled } from 'organisms/Form/styles'
import { FormContext, InputContext } from 'organisms/Form/base'

const FormText: FunctionComponent = () => {
  const { name, type, label, options } = useContext(InputContext)

  const { onBlur, inputs } = useContext(FormContext)

  const inputValue = inputs[name] ? inputs[name] : null

  const { value, onChange } = useFormInput(name, inputValue)

  const handleBlur = () => {
    onBlur(name)
  }

  return (
    <FormTextContainerStyled>
      {options?.multiline ? (
        <Fragment>
          <label htmlFor={name}>{label}</label>
          <textarea
            id={name}
            onChange={onChange}
            onBlur={handleBlur}
            value={value}
            rows={4}
            cols={50}
          />
        </Fragment>
      ) : (
        <Fragment>
          <label id={name}>{label}</label>
          <input
            id={name}
            onChange={onChange}
            onBlur={handleBlur}
            type={type}
            value={value}
          />
        </Fragment>
      )}
    </FormTextContainerStyled>
  )
}

export default memo(FormText)
