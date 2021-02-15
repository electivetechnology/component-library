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
}
export const ColumnsStyled = styled.div<ColumnsStyledProps>`
  display: inline-flex;
  padding-right: 8px;
  width: 100%;
  @media screen and (min-width: 750px) {
    grid-template-rows: unset%;
    grid-gap: unset;
    display: flex;
  }
  ${(props) =>
    props.width &&
    `
      width: ${props.width}px;
    `};
`

type ColumnStyledProps = {
  columnWidth: number
  isHidden: boolean
  align: 'left' | 'right'
  backgroundColor?: string
}
export const ColumnStyled = styled.div<ColumnStyledProps>`
  display: inline-flex;
  width: 91vw;
  z-index: 100;
  background-color: ${theme.grayAthens};
  @media screen and (min-width: 750px) {
    width: unset;
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
