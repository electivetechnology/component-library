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
    border-bottom: 1px solid ${theme.grey};
  }
  &:hover {
    border-bottom: 1px solid ${theme.grey};
  }
  &:active {
    border-bottom: 1px solid ${theme.grey};
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
    border-bottom: 1px solid ${theme.grey};
    background-color: transparent;
      &:hover {
        border-bottom: 1px solid ${theme.white};
      }
      &:active {
        border-bottom: 1px solid ${theme.white};
      }
    `}
`

export const DateWrapperStyled = styled.div`
  position: relative;
  margin-top: 24px;
  padding-top: 8px;
`

export const DateLabelStyled = styled.div`
  position: absolute;
  z-index: 0;
  top: -2px;
  background-color: ${theme.white};
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`

export const FormPhoneStyled = styled.div`
  padding-top: 8px;
`
