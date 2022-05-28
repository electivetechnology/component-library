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

import makeStyles from '@mui/styles/makeStyles'

export const useStyles = makeStyles({
  datepicker: (props: any) => ({
    // width: props.fullWidth ? '100%' : '50%'
    minWidth: '100%'
  })
})
