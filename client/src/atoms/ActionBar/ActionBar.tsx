import React, { FunctionComponent, ReactElement } from 'react'
import { ActionBarContainerStyled, ActionBarStyled } from './styles'
import { theme, ThemeType } from 'styles/theme'

type Props = {
  colour: string
  contentStart: ReactElement
  contentMiddle: ReactElement
  contentEnd: ReactElement
}
const ActionBar: FunctionComponent<Props> = ({
  colour,
  contentStart,
  contentMiddle,
  contentEnd
}) => {
  return (
    <ActionBarContainerStyled>
      <ActionBarStyled colour={colour}>{contentStart}</ActionBarStyled>
      <ActionBarStyled colour={colour}>{contentMiddle}</ActionBarStyled>
      <ActionBarStyled colour={colour}>{contentEnd}</ActionBarStyled>
    </ActionBarContainerStyled>
  )
}

export default ActionBar
