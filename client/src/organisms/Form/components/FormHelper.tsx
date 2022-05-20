import React, { FunctionComponent, memo, useContext } from 'react'
import { InputContext } from 'organisms/Form/base'
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
      <Font variant='h6' color={theme.primary}>
        {message ? message : 'Required field'}
      </Font>
    )
  }

  if (statusType === 'error') {
    return (
      <Font variant='h6' color={theme.primary}>
        {message ? message : 'Error saving input'}
      </Font>
    )
  }

  if (helperText) {
    return (
      <Font variant='h6' color={theme.grey}>
        {helperText}
      </Font>
    )
  }

  return null
}

export default memo(FormHelper)
