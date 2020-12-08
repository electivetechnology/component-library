import React from 'react'

import NavIcons from './NavIcons'
import NavSection from './NavSection'
import NavIcon from './NavIcon'
import InboxIcon from '@material-ui/icons/Inbox'
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline'
import CancelIcon from '@material-ui/icons/CancelOutlined'

const Template = (args: any) => <NavIcons {...args} />

// Nav
export const VerticalNav: any = Template.bind({})

VerticalNav.args = {
  layout: 'vertical',
  children: (
    <NavSection initial='b' divider='end'>
      <NavIcon id='a' toolTipText='Inbox'>
        <InboxIcon />
      </NavIcon>
      <NavIcon id='b' toolTipText='Accepted'>
        <CheckCircleIcon />
      </NavIcon>
      <NavIcon id='c' toolTipText='Rejected'>
        <CancelIcon />
      </NavIcon>
    </NavSection>
  )
}

export default {
  title: 'atoms/NavIcons',
  component: NavIcons
}
