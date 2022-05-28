import styled from 'styled-components'
import { font, theme } from 'styles/theme'

type DateLabelProps = {
  darkMode?: boolean
  disabled: boolean
}

export const DateLabelStyled = styled.div<DateLabelProps>`
  background-color: transparent;
  color: ${theme.shadow};
  font-size: 12px;
  font-family: ${font.primary};
  ${(props) =>
    props.darkMode &&
    `
      color: ${theme.white};
    `}
  ${(props) =>
    props.disabled &&
    `
      color: ${theme.disabledButton};
    `}
`
