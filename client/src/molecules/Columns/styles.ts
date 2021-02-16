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
  overflow: scroll;
  @media screen and (min-width: 750px) {
    width: 100vw;
    display: grid;
    grid-template-columns: 35% auto auto;
  }
  @media screen and (min-width: 960px) {
    display: inline-flex;
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
}
export const ColumnStyled = styled.div<ColumnStyledProps>`
  display: grid;
  width: 91vw;
  z-index: 100;
  background-color: ${theme.grayAthens};
  @media screen and (min-width: 750px) {
    display: inline-flex;
    width: 100%;
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
  @media screen and (min-width: 750px) {
    ${(props) =>
      props.backgroundColor &&
      `
        background-color: ${props.backgroundColor};
      `};
  }
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

export const SideColumnStyled = styled.div`
  display: inlnie-flex;
`

export const ColumnContentStyled = styled.div`
  display: inlnie-flex;
  width: inherit;
  @media screen and (min-width: 750px) {
    width: 100%;
  }
`

export const SideColumnMobiledStyled = styled.div`
  display: inline-flex;
  @media screen and (min-width: 750px) {
    display: none;
  }
`

export const SideColumnDesktopdStyled = styled.div`
  display: none;
  @media screen and (min-width: 750px) {
    display: flex;
  }
`

export const MobileButtonLabelStyled = styled.span`
  font-size: 14px;
  color: ${theme.primaryGrey};
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  padding: 2px 0 0 4px;
`
