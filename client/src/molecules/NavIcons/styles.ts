import { theme } from 'styles/theme'
import styled from 'styled-components'

type NavigationContainerProps = {
  horizontal?: boolean
}
export const NavigationContainerStyled = styled.div<NavigationContainerProps>`
  height: 100vh;
  width: 60px;
  background-color: ${theme.grayAthens};
  ${(props) =>
    props.horizontal &&
    `
      width: 100%;
      height: 60px;
    `};
`

type NavigationContentProps = {
  horizontal?: boolean
}

export const NavigationContentStyled = styled.div<NavigationContentProps>`
  padding: 32px 0 0 0;
  margin-left: 16px;
  ${(props) =>
    props.horizontal &&
    `
      display: inline-flex;
      height: 100%;
      width: 100%;
      padding: 0 0 0 8px;
      margin: 0;
    `};
`

export const VerticalDividerStyled = styled.div`
  border: 1px solid ${theme.dividerGrey};
  margin: 16px 0;
`

export const HorizontalDividerStyled = styled.div`
  border: 1px solid ${theme.dividerGrey};
  margin: 0 16px;
`

type IconStyledProps = {
  selected: boolean
  horizontal?: boolean
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
  ${(props) =>
    props.horizontal &&
    `
      margin: auto 8px auto 0;
      justify-content: unset;
    `};
`
