import React, { useState } from 'react'
import {
  NavigationContainerStyled,
  NavigationContentStyled,
  SubMenuStyled
} from 'molecules/NavIcons/styles'
import { LayoutType } from 'molecules/NavIcons/base'
import MoreHoriz from '@material-ui/icons/MoreHoriz'

export const navContext = React.createContext({
  layout: 'vertical'
})

const { Provider } = navContext

type Props = {
  layout: LayoutType
  subMenu?: boolean
  subMenuContents?: any
}

const NavIcons: React.FC<Props> = ({ children, layout, subMenu = false, subMenuContents }) => {
  const horizontal = layout === 'horizontal'
  const [expandSubMenu, setExpandSubMenu] = useState(false)

  const handleExpendSubMenu = () => {
    setExpandSubMenu(!expandSubMenu)
  }
  return (
    <Provider value={{ layout }}>
      <NavigationContainerStyled horizontal={horizontal} expandSubMenu={expandSubMenu}>
        <NavigationContentStyled horizontal={horizontal}>
          {children}
          {subMenu && <SubMenuStyled onClick={handleExpendSubMenu}>
            <MoreHoriz />
          </SubMenuStyled>}
        </NavigationContentStyled>
      </NavigationContainerStyled>
      {expandSubMenu && <NavigationContainerStyled horizontal={horizontal} showSubMenu={expandSubMenu}>
        <NavigationContentStyled horizontal={horizontal}>
          {subMenuContents}
        </NavigationContentStyled>
      </NavigationContainerStyled>}
    </Provider>
  )
}

export default NavIcons
