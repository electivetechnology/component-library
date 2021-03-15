import styled from 'styled-components'
import { theme } from 'styles/theme'

export const iconStyle = {
  cursor: 'pointer',
  fill: `${theme.grey}`,
  width: '18px'
}

export const iconLeftStyle = {
  cursor: 'pointer',
  fill: `${theme.grey}`,
  width: '12px',
  paddingLeft: '4px'
}

type ColumnsStyledProps = {
  width?: number
  height?: number
}
export const ColumnsStyled = styled.div<ColumnsStyledProps>`
  display: inline-flex;
  padding-right: 8px;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  // hide scroll bar on firefox
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  @media screen and (min-width: 750px) {
    overflow: hidden;
    width: 100vw;
  }
  ${(props) =>
    props.width &&
    `
      width: 100vw;
      @media screen and (min-width: 750px) {
        width: ${props.width}px;
      }
    `};
  ${(props) =>
    props.height &&
    `
      height: ${props.height}px;
    `};
`

type ColumnStyledProps = {
  columnWidth: number
  isHidden: boolean
  align: 'left' | 'right'
  backgroundColor?: string
  scroll?: boolean
}
export const ColumnStyled = styled.div<ColumnStyledProps>`
  display: grid;
  width: 91vw;
  z-index: 100;
  background-color: ${theme.grayAthens};
  margin: auto;
  @media screen and (min-width: 750px) {
    width: 100%;
    height: calc(100vh - 72px);
    overflow: hidden;
    ${(props) =>
      props.scroll &&
      `
        overflow: ${props.scroll};
      `};
    ${(props) =>
      props.backgroundColor &&
      `
        background-color: ${props.backgroundColor};
      `};
  }
  @media screen and (min-width: 960px) {
    display: inline-flex;
    height: calc(100vh - 114px);
    ${(props) =>
      props.columnWidth &&
      `
        width: ${props.columnWidth}px;
      `};
  }
  ${(props) =>
    props.align &&
    `
      align-content: ${props.align};
    `}
  ${(props) =>
    props.isHidden &&
    `
      width: 20px;
    `};
`

export const ColumnBorderStyled = styled.div`
  display: none;
  @media screen and (min-width: 750px) {
    display: block;
    width: 16px;
    background-color: ${theme.grayAthens};
    height: 100%;
    box-shadow: 3px 0px 3px ${theme.borderGrey};
  }
`

export const ColumnContentStyled = styled.div`
  display: inlnie-flex;
  width: inherit;
  @media screen and (min-width: 750px) {
    width: 100%;
  }
`

type SideColumnMobiledProps = {
  isClosable: boolean
}

export const SideColumnMobiledStyled = styled.div<SideColumnMobiledProps>`
  display: none;
  ${(props) =>
    props.isClosable &&
    `
      display: inline-flex;
    `};
  @media screen and (min-width: 960px) {
    display: none;
  }
`

export const SideColumnDesktopdStyled = styled.div`
  display: none;
  @media screen and (min-width: 960px) {
    display: flex;
  }
`

export const MobileButtonLabelStyled = styled.span`
  font-size: 14px;
  color: ${theme.primaryGrey};
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  padding: 4px 0 0 4px;
`
