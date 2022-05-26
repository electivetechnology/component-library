import styled from 'styled-components'
import { font, theme } from 'styles/theme'

export const CheckboxContainerStyled = styled.div`
  display: inline-flex;
`

type CheckboxLabelProps = {
  darkMode?: boolean
  disabled: boolean
}

export const CheckboxLabelStyled = styled.div<CheckboxLabelProps>`
  margin: auto;
  font-size: 16px;
  font-family: ${font.primary};
  color: ${theme.grey};
  display: flex;
  align-content: center;
  ${(props) =>
    props.darkMode &&
    `
      color: ${theme.white};
  `};
  ${(props) =>
    props.disabled &&
    `
      color: ${theme.disabledButton};
  `};
`

export const CheckboxWithStyled = {
  root: {
    '&:checked': {
      color: theme.primaryColor
    }
  },
  checked: {}
}
