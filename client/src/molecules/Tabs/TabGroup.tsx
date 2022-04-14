import React from 'react'
import { TabGroupStyled, TabTitleStyled } from 'molecules/Tabs/styles'
import { theme, ThemeType } from 'styles/theme'
import Chip from '@material-ui/core/Chip'
import { TabGroupContext, useTabGroup } from 'molecules/Tabs/base'

type Props = {
  title: string
  colour: keyof ThemeType
}
const TabGroup: React.FC<Props> = ({ children, title, colour }) => {
  const { themeColour, grid } = useTabGroup(children, colour)

  return (
    <TabGroupContext.Provider value={{ colour: themeColour }}>
      <TabGroupStyled columns={grid} borderColour={themeColour}>
        <TabTitleStyled>
          <Chip
            key={title}
            style={{
              backgroundColor: themeColour,
              color: theme.white
            }}
            label={title}
          />
        </TabTitleStyled>
        {children}
      </TabGroupStyled>
    </TabGroupContext.Provider>
  )
}

export default TabGroup
