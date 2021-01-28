import styled from 'styled-components'
import { theme } from 'styles/theme'

type TextareaProps = {
  disabled?: boolean
  darkMode: boolean
}

export const TextareaStyled = styled.textarea<TextareaProps>`
  border: none;
  width: 100%;
  font-size: 14px;
  border-bottom: 1px solid ${theme.dividerGrey};
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.disabled &&
    `
    border: none;
    color: ${theme.disabledTextGrey};
    border-bottom: 1px dotted ${theme.dividerGrey};
    background-color: transparent;
    `}
  ${(props) =>
    props.darkMode &&
    `
    border: none;
    color: ${theme.white};
    border-bottom: 1px solid ${theme.white};
    background-color: transparent;
    `}
`