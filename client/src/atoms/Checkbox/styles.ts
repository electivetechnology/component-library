import styled from 'styled-components'
import { theme } from 'styles/theme'

export const CheckboxContainerStyled = styled.div`
  display: inline-flex;
`

export const CheckboxLabelStyled = styled.div`
  padding: 12px 0 0;
  font-size: 16px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
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
