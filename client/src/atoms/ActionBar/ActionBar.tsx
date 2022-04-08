import React, { FunctionComponent } from 'react'
import { ActionBarContainerStyled, ActionBarStyled } from './styles'
import { MajorColoursType, majorThemeColours } from 'styles/theme'

type Props = {
  colour: MajorColoursType
}

const ActionBar: FunctionComponent<Props> = ({ colour, children }) => {
  const themeColour = majorThemeColours[colour]

  console.group('debug')
  console.log(themeColour)
  console.groupEnd()

  return (
    <ActionBarContainerStyled>
      <ActionBarStyled colour={themeColour}>{children}</ActionBarStyled>
    </ActionBarContainerStyled>
  )
}

export default ActionBar
