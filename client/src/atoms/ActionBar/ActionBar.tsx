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
      <ActionBarStyled colour={colour} align={'left'}>
        {contentStart}
      </ActionBarStyled>
      <ActionBarStyled colour={colour} align={'center'}>
        {contentMiddle}
      </ActionBarStyled>
      <ActionBarStyled colour={colour} align={'right'}>
        {contentEnd}
      </ActionBarStyled>
    </ActionBarContainerStyled>
  )
}

export default ActionBar
