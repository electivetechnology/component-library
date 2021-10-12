import styled from "styled-components"
import { theme } from "styles/theme"

type ListContainerProps = {
  startIcon?: boolean
  endIcon?: boolean
}

export const ListContainerStyled = styled.div<ListContainerProps>`
  min-height: 64px;
  width: calc(100% - 24px);
  padding: 12px;
  grid-gap: 8px;
  ${(props) =>
    props.startIcon && props.endIcon &&
    `
      display: grid;
      grid-template-columns: 10% 78% 10%;
    `};
  ${(props) =>
    props.startIcon && !props.endIcon &&
    `
      display: grid;
      grid-template-columns: 10% 90%;
    `};
  ${(props) =>
    !props.startIcon && props.endIcon &&
    `
      display: grid;
      grid-template-columns: 90% 10%;
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
}

export const ListFontStyled = styled.div<ListFontProps>`
  color: ${theme.shadow};
  ${(props) =>
    props.header &&
    `
      opacity: 0.6;
      padding: 0px;
    `};
  ${(props) =>
    props.additionalInformationAlign &&
    `
      text-align: ${props.additionalInformationAlign};
    `};
`
