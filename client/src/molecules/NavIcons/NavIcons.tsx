import React, { useState } from 'react'
import {
  NavigationContainerStyled,
  NavigationContentStyled,
  SubMenuStyled
} from 'molecules/NavIcons/styles'
import { LayoutType } from 'molecules/NavIcons/base'
import MoreHoriz from '@mui/icons-material/MoreHoriz'
import { theme } from 'styles/theme'

export const navContext = React.createContext({
  layout: 'vertical'
})

const { Provider } = navContext

type Props = {
  children?: JSX.Element | JSX.Element[]
  layout: LayoutType
  subMenu?: boolean
  subMenuContents?: any
  backgroundColor?: string
  border?: boolean
}

const NavIcons: React.FC<Props> = ({
  children,
  layout,
  subMenu = false,
  subMenuContents,
  backgroundColor = 'transparent',
  border = true
}) => {
  const horizontal = layout === 'horizontal'
  const [expandSubMenu, setExpandSubMenu] = useState(false)

  const handleExpendSubMenu = () => {
    setExpandSubMenu(!expandSubMenu)
  }
  return (
    <Provider value={{ layout }}>
      <NavigationContainerStyled
        horizontal={horizontal}
        expandSubMenu={expandSubMenu}
        backgroundColor={backgroundColor}
        border={border}
      >
        <NavigationContentStyled horizontal={horizontal}>
          {children}
          {subMenu && (
            <SubMenuStyled onClick={handleExpendSubMenu}>
              <MoreHoriz />
            </SubMenuStyled>
          )}
        </NavigationContentStyled>
      </NavigationContainerStyled>
      {expandSubMenu && (
        <NavigationContainerStyled
          horizontal={horizontal}
          showSubMenu={expandSubMenu}
          backgroundColor={backgroundColor}
          border={border}
        >
          <NavigationContentStyled horizontal={horizontal}>
            {subMenuContents}
          </NavigationContentStyled>
        </NavigationContainerStyled>
      )}
    </Provider>
  )
}

export default NavIcons
