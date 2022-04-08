import React from 'react'

export type ColoursType = 'red' | 'blue'
export const TabGroupContext = React.createContext({
  colour: ''
})

export const TabContext = React.createContext({
  tabsActive: '',
  setTabsActive: null as any
})
