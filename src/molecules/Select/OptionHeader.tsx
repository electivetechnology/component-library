import React, { FC } from 'react'
import { OptionHeaderStyled } from 'molecules/Select/styles'

type Props = {
  label: string
}
const OptionHeader: FC<Props> = ({ label }) => {
  return (
    <OptionHeaderStyled>
      {label}
    </OptionHeaderStyled>
  )
}

export default OptionHeader
