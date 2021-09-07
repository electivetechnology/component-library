import { theme } from 'styles/theme'
import styled from 'styled-components'
import { CardType } from 'atoms/Card/base'

type CardContainerProps = {
  selected?: boolean
  hover?: boolean
  theme: CardType
  padding?: boolean
  fullWidth?: boolean
  fullHeight?: boolean
  noBorder?: boolean
  scroll?: boolean
  width?: string
  height?: string
  overflow: boolean
}

export const CardContainerStyled = styled.div<CardContainerProps>`
  width: auto;
  overflow: hidden;
  width: max-content;
  min-height: 100px;
  display: grid;
  border-radius: 16px;
  height: max-content;
  display: flex;
  flex-direction: column;
  position: relative;
  // Need this for header and footer

  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  ${(props) =>
    props.fullHeight &&
    `
      height: 100%;
      display: block;
    `};
  ${(props) =>
    props.fullWidth &&
    `
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
      border: 1px solid ${theme.selected};
      box-shadow: 0px 1px 3px ${theme.selected};
      background-color: ${theme.white};
    `};
  ${(props) =>
    props.theme === 'secondary' &&
    props.theme &&
    `
      background-color: ${theme.hover};
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
      border: 1px solid ${theme.secondary};
      box-shadow: none;
    `};
  ${(props) =>
    props.noBorder &&
    `
      border: none;
      box-shadow: none;
    `};
  ${(props) =>
    props.scroll &&
    `
      overflow: scroll;
    `};
  ${(props) =>
    props.height &&
    `
      height: ${props.height};
    `};
  ${(props) =>
    props.width &&
    `
      width: ${props.width};
    `};
  ${(props) =>
    props.overflow &&
    `
      overflow: visible;
    `};
`

export const CardBorderStyled = styled.div`
  border: 1px solid ${theme.selected};
`

type ComponentCardFooterProps = {
  padding?: boolean
}
// Component card
export const ComponentCardFooterStyled = styled.div<ComponentCardFooterProps>`
  width: 100%;
  position: absolute;
  bottom: 0;
  ${(props) =>
    props.padding &&
    `
      width: 86%;
    `};
`

export const ComponentCardHeaderStyled = styled.div``

export const CardHeaderStyled = styled.div`
  padding: 12px 24px;
  display: flex;
`
