import styled from 'styled-components'
import { theme } from 'styles/theme'

type DividerProps = {
  padding: boolean
}

export const DividerStyled = styled.div<DividerProps>`
  height: 1px;
  width: auto;
  background: ${theme.highlight};
  margin: 8px 0;
  ${(props) =>
    props.padding &&
    `
      margin: 8px 16px;
    `};
`
