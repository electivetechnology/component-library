import React, { FunctionComponent, memo, useContext, Fragment } from 'react'
import { FormContext, InputContext } from 'organisms/Form/base'
import { AffixStyled } from 'organisms/Form/styles'
import { Font } from 'atoms'
import { theme } from 'styles/theme'

type Props = {
  helperText?: string
}
const FormHelper: FunctionComponent<Props> = ({ helperText }) => {
  const { status } = useContext(InputContext)

  const { statusType, message } = status || {}

  if (statusType === 'error') {
    return (
      <Font variant='body2' color={theme.primaryRed}>{message ? message : 'Input is pending'}</Font>
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
