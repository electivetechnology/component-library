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
  display: block;
  @media screen and (min-width: 750px) {
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
}
export const ColumnStyled = styled.div<ColumnStyledProps>`
  display: inline-flex;
  ${(props) =>
    props.align &&
    `
      align-content: ${props.align};
    `};
  ${(props) =>
    props.columnWidth &&
    `
      width: ${props.columnWidth}px;
    `};
  ${(props) =>
    props.isHidden &&
    `
      width: 20px;
    `};
`

export const ColumnBorderStyled = styled.div`
  width: 16px;
  background-color: ${theme.grayAthens};
  height: 100%;
  box-shadow: 3px 0px 3px ${theme.borderGrey};
`
