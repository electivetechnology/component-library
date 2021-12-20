import React, { FC } from 'react'
import { AlignTypes } from 'molecules/Pages/base'
import { PageStyled } from 'molecules/Pages/styles'
import { Button, ThemeType } from 'electivegroup-component-library-v2'

type Props = {
  handleClick: () => void
  label: string
  align?: AlignTypes
  buttonTheme?: ThemeType
}
const Page: FC<Props> = ({ handleClick, label, align = 'right', buttonTheme = 'primary' }) => {
  return (
    <PageStyled align={align}>
      <Button label={label} theme={buttonTheme} onClick={handleClick} />
    </PageStyled>
  )
}

export default Page
