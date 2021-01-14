import React, { FunctionComponent, memo, useContext, Fragment } from 'react'
import { useFormInput } from 'organisms/Form/hooks'
import { FormTextContainerStyled } from 'organisms/Form/styles'
import { FormContext, InputContext } from 'organisms/Form/base'
import FormTextArea from 'organisms/Form/components/FormTextArea'

const FormText: FunctionComponent = () => {
  const { inputValue, name, type, label, options, outlined } = useContext(
    InputContext
  )

  const { onBlur } = useContext(FormContext)

  const { value, onChange } = useFormInput(name, inputValue)

  const handleBlur = () => {
    onBlur(name)
  }

  return (
    <FormTextContainerStyled>
      <Fragment>
        <label htmlFor={name}>{label}</label>
        {options?.multiline ? (
          <FormTextArea
            name={name}
            onChange={onChange}
            handleBlur={handleBlur}
            value={value}
          />
        ) : (
          <input
            id={name}
            onChange={onChange}
            onBlur={handleBlur}
            type={type}
            value={value}
          />
        )}
      </Fragment>
    </FormTextContainerStyled>
  )
}

export default memo(FormText)
