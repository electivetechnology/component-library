import styled from 'styled-components'
import { theme, themeColours } from 'styles/theme'
import { ColoursType } from 'molecules/Tabs/base'

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
    width: auto;
  }
  ${(props) =>
    props.columns &&
    `
          grid-template-columns: ${props.columns};
      `}
`

// TabGroup
// TODO
export const TabGroupStyled = styled.div`
  // display: -webkit-box;
  // display: -webkit-flex;
  // display: -ms-flexbox;
  // display: flex;
  // -webkit-box-pack: center;
  // -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  overflow: scroll;
  width: 90vw;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
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
  colour: typeof themeColours
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
  color: ${theme.secondary};
  &:hover {
    background: rgba(91, 99, 122, 0.12); // theme.secondary
    padding-bottom: 3px;
  }
  ${(props) =>
    `

      `}
  ${(props) =>
    props.active === 'active'
      ? `
         border-left: 3px solid ${props.colour};
         border-top: 3px solid ${props.colour};
         border-right: 3px solid ${props.colour};

          &:hover {
            background-color: unset;
            padding-bottom: 0;
          }
      `
      : `border-bottom: 3px solid ${props.colour};`}
  ${(props) =>
    props.darkMode &&
    `
        color: ${theme.white};
        &:hover {
          background-color: ${theme.secondary};
          padding-bottom: 3px;
        }
      `}
  ${(props) =>
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

export const TabTitleStyled = styled.div`
  cursor: pointer;
  height: 36px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.secondary};
`
