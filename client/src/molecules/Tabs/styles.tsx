import styled from 'styled-components'
import { theme } from 'styles/theme'

type TabBarProps = {
  columns?: string
}

// Tab bar
export const TabBarStyled = styled.div<TabBarProps>`
  overflow: scroll;
  width: 90vw;
  display: grid;
  ::-webkit-scrollbar {
    display: none;
  }
  // hide scroll bar on firefox
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  @media screen and (min-width: 750px) {
    width: 0 auto;
  }
  ${(props) =>
    props.columns &&
    `
          grid-template-columns: ${props.columns};          
      `}
`

export const TabScrollStyled = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
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
          background-color: ${theme.primaryGrey};
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
  height: 100%;
`

// Tab Panel
export const TabPanelStyled = styled.div`
  width: 100%;
  height: 100%;
`
