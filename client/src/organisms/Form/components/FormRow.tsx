import React, { FunctionComponent, memo } from 'react'
import { FormRowStyled } from '../styles'

type Props = {
  children: any
}

const FormRow: FunctionComponent<Props> = ({ children }) => {
  return <FormRowStyled>{children}</FormRowStyled>
}

export default memo(FormRow)
