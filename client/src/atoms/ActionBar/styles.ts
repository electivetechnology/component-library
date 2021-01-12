import styled from 'styled-components'
import { theme } from 'styles/theme'

export const ActionBarContainerStyled = styled.div`
  background-color: ${theme.grayAthens};
  box-shadow: 0px 1px 3px ${theme.borderGrey};
  border-radius: 12px;
  padding: 4px 24px;
  display: grid;
  grid-template-columns: auto auto;
`

export const ActionLeftTitleStyled = styled.div`
  padding-right: 8px;
  margin: auto 0;
`

export const ActionRightTitleStyled = styled.div`
  padding-right: 8px;
  margin: auto 0;
  margin-left: auto;
`

export const ActionBarItemsStyled = styled.div`
  display: inline-flex;
`
