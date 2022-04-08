import React, { Fragment } from 'react'
import { TabBarStyled, TabGroupStyled, TabTitleStyled } from './styles'
import { themeColours, theme } from 'styles/theme'
import Chip from '@material-ui/core/Chip'
import { ColoursType, TabGroupContext } from 'molecules/Tabs/base'

type Props = {
  title: string
  colour: ColoursType
}
const TabGroup: React.FC<Props> = ({ children, title, colour }) => {
  const themeColour = themeColours[colour]

  return (
    <TabGroupContext.Provider value={{ colour: themeColour }}>
      <TabGroupStyled>
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
        <TabBarStyled>{children}</TabBarStyled>
      </TabGroupStyled>
    </TabGroupContext.Provider>
  )
}

export default TabGroup
