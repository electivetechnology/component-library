import React, { FunctionComponent, memo, useContext, Fragment } from 'react'
import { useFormInput } from './hooks'
import { FormTextContainerStyled } from './styles'
import { FormContext, InputContext } from 'components/organisms/Form/base'

const FormText: FunctionComponent = () => {
  const { name, type, label, options } = useContext(InputContext)

  const { onBlur, inputs } = useContext(FormContext)

  const inputValue = inputs[name] ? inputs[name] : null

  const { value } = useFormInput(name, inputValue)

  const handleBlur = () => {
    onBlur(name)
  }

  return (
    <FormTextContainerStyled>
      {options?.multiline ? (
        <Fragment>
          <label id={name}>{label}</label>
          <textarea id={name} onBlur={handleBlur}>
            {value}
          </textarea>
        </Fragment>
      ) : (
        <Fragment>
          <label id={name}>{label}</label>
          <input id={name} type={type} onBlur={handleBlur} value={value} />
        </Fragment>
      )}
    </FormTextContainerStyled>
  )
}

export default memo(FormText)
