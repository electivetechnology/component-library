import { theme } from 'styles/theme'
import styled from 'styled-components'
import { ActionBarTheme, ActionBarThemes } from './base'

type ActionBarProps = {
  theme: ActionBarTheme
}

export const ActionBarStyled = styled.div<ActionBarProps>`
  background-color: ${theme.white};
  bottom: 0;
  position: absolute;
  width: 100vw;
  z-index: 1000;
  box-shadow: inset 0px 26px 12px -20px rgb(${theme.shadow}, .08);
  ${(props) =>
    props.theme === ActionBarThemes.CAMPAIGN &&
    `
    background-color: rgb(${theme.secondaryLight}, .15)
    `};
    @media screen and (min-width: 750px) {
      display: inline-flex;
      position: absolute;
      top: 0;
      height: 80px;
      width: -webkit-fill-available;
    }
    @media screen and (min-width: 960px) {
      box-shadow: inset 0px -26px 12px -20px rgb(${theme.shadow}, .08);
    }
`
