import styled from 'styled-components'
import { theme } from 'styles/theme'

export const TabScrollStyled = styled.div`
  overflow-x: scroll;
  display: flex;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const TabStyled = styled.div`
  border: 1px solid ${theme.blue};
`

export const TabsStyled = styled.div`
  overflow: hidden;
`

type TabContainerProps = {
  active: boolean
}

export const TabContainerStyled = styled.div<TabContainerProps>`
  ${props =>
  props.active &&
  `
        height: 48px;
        border-bottom: 2px solid red;
    `}
`
