import React, { FunctionComponent, ReactElement } from 'react'
import {
  ActionBarColourStyled,
  ActionBarContainerStyled,
  ActionBarStyled
} from './styles'

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
    <ActionBarContainerStyled colour={colour}>
      <ActionBarColourStyled colour={colour}>
        <ActionBarStyled align={'left'}>{contentStart}</ActionBarStyled>
        <ActionBarStyled align={'center'}>{contentMiddle}</ActionBarStyled>
        <ActionBarStyled align={'right'}>{contentEnd}</ActionBarStyled>
      </ActionBarColourStyled>
    </ActionBarContainerStyled>
  )
}

export default ActionBar
