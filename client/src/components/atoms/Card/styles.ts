import { theme } from 'styles/theme'
import styled from 'styled-components'

type CardContainerProps = {
  selected?: boolean
  hover?: boolean
  theme: string
  width: string
  height: string
}

export const CardContainerStyled = styled.div<CardContainerProps>`
  border-radius: 16px;
  position: relative;
  ${(props) =>
    props.width &&
    `
      width: ${props.width};
    `};
  ${(props) =>
    props.height &&
    `
      height: ${props.height};
    `};
  ${(props) =>
    props.theme === 'primary' &&
    props.theme &&
    `
      border: 1px solid ${theme.grayGeyser};
      box-shadow: 0px 1px 3px ${theme.grayGeyser};
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
  position: absolute;
  bottom: 0;
  position: absolute;
  width: 100%;
`

export const ComponentCardHeaderStyled = styled.div``
