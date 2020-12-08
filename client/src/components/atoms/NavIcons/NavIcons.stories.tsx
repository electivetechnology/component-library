import React, { Fragment } from 'react'
import NavIcons from './NavIcons'
import NavIcon from './NavIcon'
import InboxIcon from '@material-ui/icons/Inbox'
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline'
import CancelIcon from '@material-ui/icons/CancelOutlined'
import NavToggle from 'components/atoms/NavIcons/NavToggle'
import NavMulti from 'components/atoms/NavIcons/NavMulti'
import { DividerType } from 'components/atoms/NavIcons/base'

const renderToggle = (divider: DividerType) => (
  <NavToggle initial='b' divider={divider}>
    <NavIcon id='a' toolTipText='Inbox'>
      <InboxIcon />
    </NavIcon>
    <NavIcon id='b' toolTipText='Accepted'>
      <CheckCircleIcon />
    </NavIcon>
    <NavIcon id='c' toolTipText='Rejected'>
      <CancelIcon />
    </NavIcon>
  </NavToggle>
)

const renderMulti = (divider: DividerType) => (
  <NavMulti initial={['a', 'b']} divider={divider}>
    <NavIcon id='a' toolTipText='Inbox'>
      <InboxIcon />
    </NavIcon>
    <NavIcon id='b' toolTipText='Accepted'>
      <CheckCircleIcon />
    </NavIcon>
    <NavIcon id='c' toolTipText='Rejected'>
      <CancelIcon />
    </NavIcon>
  </NavMulti>
)

const Template = (args: any) => <NavIcons {...args} />

// Nav
export const NavVerticalToggle: any = Template.bind({})

NavVerticalToggle.args = {
  layout: 'vertical',
  children: renderToggle('end')
}

export const NavVerticalMulti: any = Template.bind({})

NavVerticalMulti.args = {
  layout: 'vertical',
  children: renderMulti('end')
}

export const NavVerticalBoth: any = Template.bind({})

NavVerticalBoth.args = {
  layout: 'vertical',
  children: (
    <Fragment>
      {renderMulti('start')}
      {renderToggle('end')}
    </Fragment>
  )
}

export const NavHorizontalBoth: any = Template.bind({})

NavHorizontalBoth.args = {
  layout: 'horizontal',
  children: (
    <Fragment>
      {renderMulti('start')}
      {renderToggle('both')}
    </Fragment>
  )
}

export default {
  title: 'atoms/NavIcons',
  component: NavIcons
}
