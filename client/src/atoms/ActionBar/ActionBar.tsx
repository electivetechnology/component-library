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
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  return (
    <ActionBarContainerStyled vh={vh}>
      <ActionBarColourStyled colour={colour}>
        <ActionBarStyled align={'left'}>{contentStart}</ActionBarStyled>
        <ActionBarStyled align={'center'}>{contentMiddle}</ActionBarStyled>
        <ActionBarStyled align={'right'}>{contentEnd}</ActionBarStyled>
      </ActionBarColourStyled>
    </ActionBarContainerStyled>
  )
}

export default ActionBar
