import { theme } from 'styles/theme'
import styled from 'styled-components'
import { PositionType } from 'utils/types'

export const ActionBarContainerStyledOld = styled.div`
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

export const ActionBarContainerStyled = styled.div`
  background-color: ${theme.white};
  bottom: 0;
  position: absolute;
  width: 100vw;
  z-index: 1000;
  height: 80px;
  box-shadow: inset 0px 26px 12px -20px ${theme.shadow}08;
  @media screen and (min-width: 750px) {
    position: relative;
    top: 0;
    width: -webkit-fill-available;
  }
  @media screen and (min-width: 960px) {
    box-shadow: inset 0px -26px 12px -20px ${theme.shadow}08;
  }

  display: grid;
  grid-template-columns: 33% 33% 33%;
  overflow: scroll;
  border: 1px solid red;
  align-items: center;
  padding: 0 2%;
`

type ActionBarProps = {
  colour: string
  align: 'left' | 'center' | 'right'
}

export const ActionBarStyled = styled.div<ActionBarProps>`
  background-color: rgba(255, 255, 255, 0.8);
  text-align: left;
  ${(props) =>
    `
    text-align: ${props.align};
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

export const ActionBarStyledOld = styled.div<ActionBarProps>`
  width: 100%;
  height: 100%;
  ${(props) =>
    `
    background-color: ${props.colour}15;
`};
`
