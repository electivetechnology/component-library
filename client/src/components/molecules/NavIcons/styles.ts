import { theme } from 'styles/theme'
import styled from 'styled-components'

export const NavigationContainerStyled = styled.div`
  height: 100vh;
  width: 60px;
  background-color: ${theme.grayAthens};
`

export const NavigationContentStyled = styled.div`
  padding: 32px 0 0 0;
  margin-left: 16px;
`

export const VerticalDividerStyled = styled.div`
  border: 1px solid ${theme.dividerGrey};
  margin: 16px 0;
`

export const HorizontalDividerStyled = styled.div`
  border: 1px solid ${theme.dividerGrey};
  margin: 16px 0;
`

type IconStyledProps = {
  selected: boolean
}

export const IconStyled = styled.div<IconStyledProps>`
  height: 30px;
  width: 30px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  &:hover {
    background-color: ${theme.dividerGrey};
  }
  ${(props) =>
    props.selected &&
    `
      background-color: ${theme.primaryGrey};
    `};
`
