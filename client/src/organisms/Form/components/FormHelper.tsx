import React, { FunctionComponent, memo, useContext, Fragment } from 'react'
import { FormContext, InputContext } from 'organisms/Form/base'
import { AffixStyled } from 'organisms/Form/styles'
import { Font } from 'atoms'
import { theme } from 'styles/theme'

type Props = {
  helperText?: string
}
const FormHelper: FunctionComponent<Props> = ({ helperText }) => {
  const { status, requiredError } = useContext(InputContext)

  const { statusType, message } = status || {}

  if (requiredError) {
    return (
      <Font variant='body2' color={theme.primaryRed}>{message ? message : 'Required field'}</Font>
    )
  }

  if (statusType === 'error') {
    return (
      <Font variant='body2' color={theme.primaryRed}>{message ? message : 'Error saving input'}</Font>
    )
  }

  if (helperText) {
    return (
      <Font variant='body1'>{helperText}</Font>
    )
  }

  return null
}

export default memo(FormHelper)
