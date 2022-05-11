import { theme } from 'styles/theme'
import styled from 'styled-components'

type ActionBarContainerProps = {
  colour: string
}

export const ActionBarColourStyled = styled.div<ActionBarContainerProps>`
  overflow: scroll;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  width: 100%;
  height: 100%;
  ${(props) =>
    `
    background-color: ${props.colour}15;
`};
`
export const ActionBarContainerStyled = styled.div<ActionBarContainerProps>`
  background-color: white
  bottom: 0;
  position: absolute;
  z-index: 1000;
  height: 80px;
  width: 96vw;
  box-shadow: inset 0px 26px 12px -20px ${theme.shadow}08;
  @media screen and (min-width: 750px) {
    position: relative;
    top: 0;
    width: -webkit-fill-available;
  }
  @media screen and (min-width: 960px) {
    box-shadow: inset 0px -26px 12px -20px ${theme.shadow}08;
  }
`

type ActionBarProps = {
  align?: 'left' | 'center' | 'right'
}

export const ActionBarStyled = styled.div<ActionBarProps>`
  ${(props) =>
    `
    text-align: ${props.align};
`};
  ${(props) =>
    props.align === 'left' &&
    `
    padding-left: 5%;
    `};
  ${(props) =>
    props.align === 'right' &&
    `
    padding-right: 5%;
    `};
`
