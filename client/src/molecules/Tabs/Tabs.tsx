import React from 'react'
import { TabBarContainer, TabScroll } from 'molecules/Tabs/styles'

export const tabContext = React.createContext({ active: 0 })

const { Provider } = tabContext

type Props = {
  active: number
}

const Tabs: React.FC<Props> = ({ children, active }) => {
  return (
    <Provider value={{ active }}>
      <TabBarContainer>
        <TabScroll>{children}</TabScroll>
      </TabBarContainer>
    </Provider>
  )
}

export default Tabs
