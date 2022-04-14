import React from 'react'
import { TabGroupStyled, TabTitleStyled } from 'molecules/Tabs/styles'
import { theme, ThemeType } from 'styles/theme'
import Chip from '@material-ui/core/Chip'
import { TabGroupContext, useTabGroup } from 'molecules/Tabs/base'

type Props = {
  title?: string
  colour: keyof ThemeType
  activeColour?: keyof ThemeType
}
const TabGroup: React.FC<Props> = ({
  children,
  title,
  colour,
  activeColour
}) => {
  const { themeColour, grid, activeThemeColour } = useTabGroup(
    children,
    colour,
    activeColour
  )

  return (
    <TabGroupContext.Provider
      value={{ colour: themeColour, activeColour: activeThemeColour }}
    >
      <TabGroupStyled columns={grid} borderColour={themeColour}>
        {title && (
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
        )}
        {children}
      </TabGroupStyled>
    </TabGroupContext.Provider>
  )
}

export default TabGroup
