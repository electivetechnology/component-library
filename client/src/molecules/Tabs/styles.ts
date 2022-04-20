import styled from 'styled-components'
import { theme } from 'styles/theme'

type TabBarProps = {
  columns?: string
  borderColour?: string
}

// Tab bar
export const TabGroupStyled = styled.div<TabBarProps>`
  width: auto;
  display: grid;
  ::-webkit-scrollbar {
    display: none;
  }
  // hide scroll bar on firefox
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ${(props) =>
    props.columns &&
    `
          grid-template-columns: ${props.columns} max-content;
      `}
  ${(props) =>
    props.borderColour &&
    `
          border-bottom: 3px solid ${props.borderColour};
      `}
`

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
    width: auto;
  }
  ${(props) =>
    props.columns &&
    `
          grid-template-columns: ${props.columns} max-content;
      `}
  ${(props) =>
    props.borderColour &&
    `
          border-bottom: 3px solid ${props.borderColour};
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
  colour: string
  isActiveTab: boolean
  darkMode: boolean
  activeColour?: string
}

export const TabStyled = styled.div<TabProps>`
  cursor: pointer;
  height: 36px;
  width: 141px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: rgba(91, 99, 122, 0.12); // theme.secondary
  }
  ${(props) =>
    props.isActiveTab &&
    `
         border-left: 3px solid ${props.colour};
         border-top: 3px solid ${props.colour};
         border-right: 3px solid ${props.colour};
         ${
           props.activeColour !== '' &&
           `background-color: ${props.activeColour}15;`
         }

          &:hover {
            padding-bottom: 0;
          }
      `}
  ${(props) =>
    props.darkMode &&
    `
        &:hover {
          padding-bottom: 3px;
        }
      `}
  ${(props) =>
    props.isActiveTab &&
    props.darkMode &&
    `
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

export const TabTitleStyled = styled.div`
  cursor: pointer;
  height: 36px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.secondary};
`
