import styled from 'styled-components'
import { theme } from 'styles/theme'

export const closedIconStyle = {
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
  hide: boolean
}
export const ColumnStyled = styled.div<ColumnStyledProps>`
  ${(props) =>
    props.columnWidth &&
    `
      width: ${props.columnWidth};
    `};
  @media screen and (min-width: 750px) {
    ${(props) =>
      props.hide &&
      `
        display: none;
      `};
  }
`
