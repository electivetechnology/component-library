import React, { Children } from 'react'

export const TabGroupContext = React.createContext({
  colour: '',
  activeColour: ''
} as { colour: string; activeColour?: string })

export const TabContext = React.createContext({
  tabsActive: '',
  setTabsActive: null as any
})

const createGrid = (children: any) => {
  const count = Children.count(children)

  return new Array(count + 1).join('auto ')
}

export const useTabGroup = (children: any) => {
  return {
    grid: createGrid(children)
  }
}

export const useTabBar = (children: any) => {
  return {
    grid: createGrid(children)
  }
}
