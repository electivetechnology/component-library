import styled from 'styled-components'
import { theme } from 'styles/theme'

// Tab bar
export const TabBarStyled = styled.div`
  display: inline-flex;
`

export const TabScrollStyled = styled.div`
  overflow-x: scroll;
  display: grid;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`

type TabProps = {
  active: string
  darkMode: boolean
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
  ${(props) =>
    props.darkMode &&
    `
        color: ${theme.white};
        &:hover {
          background-color: ${theme.hoverBlue};
          padding-bottom: 3px;
        }
      `}
  ${(props) =>
    props.active &&
    props.active === 'active' &&
    props.darkMode &&
    `
          border-bottom: 3px solid ${theme.white};
          &:hover {
            background-color: unset;
            padding-bottom: 0;
          }
      `}
`

export const TabsStyled = styled.div`
  overflow: hidden;
`
