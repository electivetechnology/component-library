import { theme } from 'styles/theme'
import styled from 'styled-components'

type CardContainerProps = {
  selected?: boolean
  hover?: boolean
  theme: string
  padding?: boolean
  fullWidth?: boolean
  fullHeight?: boolean
}

export const CardContainerStyled = styled.div<CardContainerProps>`
  min-width: 290px;
  min-height: 215px;
  width: max-content;
  display: grid;
  border-radius: 16px;
  height: max-content;

  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.fullHeight &&
    `
      height: -webkit-fill-available;
    `};
  ${(props) =>
    props.fullWidth &&
    `
      overflow: scroll;
      width: 100%;
    `};
  ${(props) =>
    props.padding &&
    `
      padding: 12px 24px;
    `};
  ${(props) =>
    props.theme === 'primary' &&
    props.theme &&
    `
      border: 1px solid ${theme.grayGeyser};
      box-shadow: 0px 1px 3px ${theme.grayGeyser};
      background-color: ${theme.white};
    `};
  ${(props) =>
    props.theme === 'secondary' &&
    props.theme &&
    `
      background-color: ${theme.grayAthens};
    `};
  ${(props) =>
    props.hover &&
    `
      &:hover {
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
      }
    `};
  ${(props) =>
    props.selected &&
    `
      border: 1px solid ${theme.grayComment};
      box-shadow: none;
    `};
`

export const CardBorderStyled = styled.div`
  border: 1px solid ${theme.grayGeyser};
`

// Component card
export const ComponentCardFooterStyled = styled.div`
  width: 100%;
`

export const ComponentCardHeaderStyled = styled.div``
