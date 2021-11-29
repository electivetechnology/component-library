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
      background-color: rgb(${theme.secondaryLight}, .15);
    `};
  ${(props) =>
    props.theme === ActionBarThemes.CLIENT &&
    `
      background-color: rgb(${theme.primaryAccent600}, .15);
    `};
  ${(props) =>
    props.theme === ActionBarThemes.OUTLINE &&
    `
      background-color: rgb(${theme.onSurface}, .15);
    `};
  ${(props) =>
    props.theme === ActionBarThemes.ENGAGEMENT &&
    `
      background-color: rgb(${theme.onSurface}, .15);
    `};
  ${(props) =>
    props.theme === ActionBarThemes.CONVERSATION_TEMPLATE &&
    `
      background-color: rgb(${theme.onSurface}, .15);
    `};
  ${(props) =>
    props.theme === ActionBarThemes.QUESTION &&
    `
      background-color: rgb(${theme.tertiaryAccent500}, .15);
    `};
  ${(props) =>
    props.theme === ActionBarThemes.MESSAGE_TEMPLATE &&
    `
      background-color: rgb(${theme.secondaryAccent900}, .15);
    `};
  ${(props) =>
    props.theme === ActionBarThemes.LABEL &&
    `
      background-color: rgb(${theme.secondaryAccent300}, .15);
    `};
  ${(props) =>
    props.theme === ActionBarThemes.COMPANY &&
    `
      background-color: rgb(${theme.grey700}, .15);
    `};
  ${(props) =>
    props.theme === ActionBarThemes.PROFILE &&
    `
      background-color: rgb(${theme.primaryDark}, .15);
    `};
`
