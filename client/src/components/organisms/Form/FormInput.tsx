import React, { FunctionComponent, memo, useContext, useEffect } from 'react'
import { InputContainerStyled } from './styles'
import FormInputs from './FormInputs'
import { FormContext } from './Form'

type Props = {
  input: any
}

const FormInput: FunctionComponent<Props> = ({ input }) => {
  const { dispatch } = useContext(FormContext)
  const { width, value, label, type } = input

  useEffect(() => {
    dispatch({ type: 'add', value, label })
  }, [])

  return (
    <InputContainerStyled
      isTitle={true}
      width={width}
      isEmbeddedForm={true}
      textList={type === 'text' && width}
    >
      <FormInputs input={input} />
    </InputContainerStyled>
  )
}

export default memo(FormInput)
