import { theme } from 'styles/theme'
import styled from 'styled-components'
import { ActionBarTheme, ActionBarThemes } from './base'

export const ActionBarContainerStyled = styled.div`
  background-color: ${theme.white};
  bottom: 0;
  position: absolute;
  width: 100vw;
  z-index: 1000;
  height: 80px;
  box-shadow: inset 0px 26px 12px -20px rgb(${theme.shadow}, .08);
    @media screen and (min-width: 750px) {
      display: inline-flex;
      position: relative;
      top: 0;
      width: -webkit-fill-available;
    }
    @media screen and (min-width: 960px) {
      box-shadow: inset 0px -26px 12px -20px rgb(${theme.shadow}, .08);
    }
`

type ActionBarProps = {
  theme: ActionBarTheme
}

export const ActionBarStyled = styled.div<ActionBarProps>`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.theme === ActionBarThemes.CAMPAIGN &&
    `
      background-color: rgb(${theme.secondaryLight}, .15)
    `};
`
