import React, { FC, memo } from 'react'
import { FormRowStyled } from '../styles'

type Props = {
  children: any
}

const FormRow: FC<Props> = ({ children }) => {
  return <FormRowStyled>{children}</FormRowStyled>
}

export default memo(FormRow)
