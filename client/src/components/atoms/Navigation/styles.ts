import { theme } from 'styles/theme'
import styled from 'styled-components'

export const iconStyle = {
  fill: theme.primaryGrey,
  paddingBottom: '8px'
}

export const NavigationContainerStyled = styled.div`
  height: 100vh;
  width: 60px;
  background-color: ${theme.grayAthens};
`

export const NavigationContentStyled = styled.div`
  padding: 32px 0 0 0;
`

export const DeviderStyled = styled.div`
  border: 1px solid ${theme.dividerGrey};
  margin: 16px 0;
`

export const IconStyled = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 4px;
  &:hover {
    background-color: ${theme.dividerGrey};
  }
`
