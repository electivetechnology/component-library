import styled from 'styled-components'
import { theme } from 'styles/theme'

export const iconStyle = {
  cursor: 'pointer',
  fill: `${theme.grey}`,
  width: '18px'
}

export const ColumnsStyled = styled.div`
  display: block;
  @media screen and (min-width: 750px) {
    display: flex;
  }
`

type ColumnStyledProps = {
  columnWidth: string
  isHidden: boolean
}
export const ColumnStyled = styled.div<ColumnStyledProps>`
  border: 1px ${theme.Gray} solid;
  ${(props) =>
    props.columnWidth &&
    `
      width: ${props.columnWidth};
    `};
  ${(props) =>
    props.isHidden &&
    `
      width: 20px;
    `};
`
