import styled from 'styled-components'
import { theme } from 'styles/theme'

export const CheckboxContainerStyled = styled.div`
  display: inline-flex;
`

type CheckboxLabelProps = {
  darkMode?: boolean
  disabled: boolean
}

export const CheckboxLabelStyled = styled.div<CheckboxLabelProps>`
  padding: 12px 0 0;
  font-size: 16px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
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
    '&$checked': {
      color: theme.primaryColor
    },
    padding: '8px 8px 8px 0'
  },
  checked: {}
}
