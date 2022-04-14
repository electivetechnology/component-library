import React, { Children } from 'react'
import { majorThemeColours } from 'styles/theme'

export type ColoursType = 'red' | 'blue'
export const TabGroupContext = React.createContext({
  colour: ''
})

export const TabContext = React.createContext({
  tabsActive: '',
  setTabsActive: null as any
})

const createGrid = (children: any) => {
  const count = Children.count(children)

  return new Array(count + 1).join('auto ')
}

export const useTabGroup = (children: any, colour: ColoursType) => {
  const themeColour = majorThemeColours[colour]

  return {
    themeColour,
    grid: createGrid(children)
  }
}

export const useTabBar = (children: any) => {
  return {
    grid: createGrid(children)
  }
}
