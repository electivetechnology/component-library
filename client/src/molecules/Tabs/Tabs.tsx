import React from 'react'
import { TabsStyled, TabScrollStyled } from 'molecules/Tabs/styles'

export const tabContext = React.createContext({ active: 0 })

const { Provider } = tabContext

type Props = {
  active: number
}

const Tabs: React.FC<Props> = ({ children, active }) => {
  return (
    <Provider value={{ active }}>
      <TabsStyled>
        <TabScrollStyled>{children}</TabScrollStyled>
      </TabsStyled>
    </Provider>
  )
}

export default Tabs
