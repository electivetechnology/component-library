import styled from "styled-components"
import { font, theme } from "styles/theme"

type ListContainerProps = {
  startIcon?: boolean
  endIcon?: boolean
  selected: boolean
  nonClickable: boolean
}

export const ListContainerStyled = styled.div<ListContainerProps>`
  height: auto;
  width: calc(100% - 24px);
  padding: 12px;
  grid-gap: 12px;
  &:hover {
    background: rgba(91, 99, 122, 0.12); // theme.secondary
  }
  ${(props) =>
    props.startIcon && props.endIcon &&
    `
      display: grid;
      grid-template-columns: min-content auto min-content;
    `};
  ${(props) =>
    props.nonClickable &&
    `
      &:hover {
        background: transparent
      }
    `};
  ${(props) =>
    props.startIcon && !props.endIcon &&
    `
      display: grid;
      grid-template-columns: min-content auto;
    `};
  ${(props) =>
    !props.startIcon && props.endIcon &&
    `
      display: grid;
      grid-template-columns: auto min-content;
    `};
  ${(props) =>
    props.selected &&
    `
      background: rgba(91, 99, 122, 0.08); // theme.secondary
      &:hover {
        background: rgba(91, 99, 122, 0.08);
      }
    `};
`

type IconProps = {
  iconCenterAlign?: boolean
}

export const IconContainerStyled = styled.div<IconProps>`
  ${(props) =>
    props.iconCenterAlign &&
    `
      margin: auto;
    `};
`

export const MainContainerStyled = styled.div`
`

export const EndContainerStyled = styled.div`
`

type ListFontProps = {
  header?: boolean
  additionalInformationAlign?: string
  overline?: boolean
  additionalInformation?: boolean
}

export const ListFontStyled = styled.div<ListFontProps>`
  color: rgb(${theme.shadow});
  font-family: ${font.primary};
  ${(props) =>
    props.header &&
    `
      font-size: 16px;
      line-height: 24px;
    `};
  ${(props) =>
    props.additionalInformationAlign &&
    `
      text-align: ${props.additionalInformationAlign};
    `};
  ${(props) =>
    props.additionalInformation &&
    `
      font-size: 14px;
      opacity: 0.6;
    `};
  ${(props) =>
    props.overline &&
    `
      font-size: 10px;
      opacity: 0.6;
      text-transform: uppercase;
      font-weight: bold;
    `};
`
