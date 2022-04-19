import React, { Children } from 'react'
import { theme, ThemeType } from 'styles/theme'

export const TabGroupContext = React.createContext({
  colour: '',
  activeColour: ''
})

export const TabContext = React.createContext({
  tabsActive: '',
  setTabsActive: null as any
})

const createGrid = (children: any) => {
  const count = Children.count(children)

  return new Array(count + 1).join('auto ')
}

export const useTabGroup = (
  children: any,
  colour: keyof ThemeType,
  activeColour?: keyof ThemeType
) => {
  const themeColour = theme[colour ? colour : 'secondaryAccent900']
  const activeThemeColour = activeColour ? theme[activeColour] : ''

  return {
    themeColour,
    grid: createGrid(children),
    activeThemeColour
  }
}

export const useTabBar = (children: any) => {
  return {
    grid: createGrid(children)
  }
}
