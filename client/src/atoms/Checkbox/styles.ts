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


export const ToggleStyled:any = {
  root: {
    width: '48px',
    height: '32px',
    position: 'relative',
    top: '2px',
    '@media screen and (min-width: 750px)': {
      top: '21px',
    },
  },
  switchBase: {
    color: theme.Gray,
    '&$checked': {
      color: theme.primaryColorValencia,
    },
    '&$checked + $track': {
      backgroundColor: theme.primaryColorValencia,
    },
  },
  thumb: {
    height: '14px',
    width: '14px',
  },
  checked: {},
  track: {},
}

