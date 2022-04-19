import { theme } from 'styles/theme'
import styled from 'styled-components'
import { PositionType } from 'utils/types'

export const ActionBarContainerStyled = styled.div`
  background-color: ${theme.white};
  bottom: 0;
  position: absolute;
  width: 100vw;
  z-index: 1000;
  height: 80px;
  box-shadow: inset 0px 26px 12px -20px ${theme.shadow}08;
  @media screen and (min-width: 750px) {
    display: inline-flex;
    position: relative;
    top: 0;
    width: -webkit-fill-available;
  }
  @media screen and (min-width: 960px) {
    box-shadow: inset 0px -26px 12px -20px ${theme.shadow}08;
  }
`

type ActionBarProps = {
  colour: string
}

export const ActionBarStyled = styled.div<ActionBarProps>`
  width: 100%;
  height: 100%;
  ${(props) =>
    `
      background-color: ${props.colour}15;
    `};
`

type ActionBarContentProps = {
  position: PositionType
}
export const ActionBarContentStyled = styled.div<ActionBarContentProps>`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  ${(props) =>
    `
      ${props.position === 'start' ? `left: 6px;` : ``}
      ${
        props.position === 'middle'
          ? `left: 50%; transform: translate(-50%, -50%);`
          : ``
      }
      ${props.position === 'end' ? `right: 6px;` : ``}
    `};
`
