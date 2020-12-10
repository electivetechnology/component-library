import React, { FunctionComponent, memo, useContext } from 'react'
import { InputContainerStyled } from './styles'
import FormInputTypes from './FormInputTypes'
import FormHelperText from '@material-ui/core/FormHelperText'
import { makeStyles } from '@material-ui/core/styles'
import { FormContext } from './Form'

type Props = {
  input: any
}

const useStyles = makeStyles({
  root: {
    marginTop: '0'
  }
})

const FormInput: FunctionComponent<Props> = ({ input }) => {
  const classes = useStyles()
  const { isEmbeddedForm } = useContext(FormContext)
  const { width, value, download, label, helperText, type } = input

  const isEmbeddedFormField = isEmbeddedForm && type !== 'title'
  const isTitle = type === 'title'

  console.group('debug')
  console.log(input)
  console.groupEnd()

  // render the FormInputTypes which handles all input types
  // render delete, helper text and download components if applicable
  return (
    <InputContainerStyled
      isTitle={isTitle}
      width={width}
      isEmbeddedForm={isEmbeddedFormField}
      textList={type === 'text' && width}
    >
      <FormInputTypes input={input} />
      {helperText && !width && type !== 'phone' && (
        <FormHelperText className={classes.root}>{helperText}</FormHelperText>
      )}
    </InputContainerStyled>
  )
}

export default memo(FormInput)
