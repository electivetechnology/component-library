import React from 'react'
import { TabGroupStyled, TabTitleStyled } from 'molecules/Tabs/styles'
import { theme, ThemeType } from 'styles/theme'
import Chip from '@mui/material/Chip'
import { TabGroupContext, useTabGroup } from 'molecules/Tabs/base'

type Props = {
  children: JSX.Element
  title?: string
  colour?: string
  activeColour?: string
}
const TabGroup: React.FC<Props> = ({
  children,
  title,
  colour = theme.secondaryAccent900,
  activeColour
}) => {
  const { grid } = useTabGroup(children)

  return (
    <TabGroupContext.Provider value={{ colour, activeColour }}>
      <TabGroupStyled columns={grid} borderColour={colour}>
        {title && (
          <TabTitleStyled>
            <Chip
              key={title}
              style={{
                backgroundColor: `${colour}15`,
                color: colour
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
