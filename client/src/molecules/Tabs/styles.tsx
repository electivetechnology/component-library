import styled from 'styled-components'
import { theme } from 'styles/theme'

// Tab bar
export const TabBarStyled = styled.div`
  display: inline-flex;
`

export const TabContainerStyled = styled.div`
  display: grid;
`

export const TabScrollStyled = styled.div`
  display: flex;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`

type TabProps = {
  active: string
}

export const TabStyled = styled.div<TabProps>`
  cursor: pointer;
  height: 36px;
  width: 141px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.primaryGrey};
  &:hover {
    background-color: ${theme.hoverBlue};
    padding-bottom: 3px;
  }
  ${(props) =>
    props.active &&
    props.active === 'active' &&
    `
          border-bottom: 3px solid ${theme.primaryColorValencia};
          &:hover {
            background-color: unset;
            padding-bottom: 0;
          }
      `}
`

export const TabsStyled = styled.div`
  overflow: hidden;
`
