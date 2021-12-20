import { theme } from 'styles/theme'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const LinearProgressWithStyled = {
  colorPrimary: {
    backgroundColor: theme.primaryColorLight
  },
  barColorPrimary: {
    backgroundColor: theme.primaryColor
  }
}
