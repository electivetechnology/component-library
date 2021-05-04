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
  ${(props) =>
    props.darkMode &&
    `
      color: ${theme.white};
  `};
  ${(props) =>
    props.disabled &&
    `
      color: ${theme.disabledGrey};
  `};
`

export const CheckboxWithStyled = {
  root: {
    '&$checked': {
      color: theme.primaryColorValencia
    },
    padding: '8px 8px 8px 0'
  },
  checked: {}
}
