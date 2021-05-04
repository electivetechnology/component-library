import React, { FC } from 'react'
import { AlignTypes } from 'molecules/Pages/base'
import { PageStyled } from 'molecules/Pages/styles'
import { Button } from 'atoms'

type Props = {
  handleClick: () => void
  label: string
  align?: AlignTypes
}
const Page: FC<Props> = ({ handleClick, label, align = 'right' }) => {
  return (
    <PageStyled align={align}>
      <Button label={label} theme="secondary" onClick={handleClick} />
    </PageStyled>
  )
}

export default Page
