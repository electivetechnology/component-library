import React, { Fragment } from 'react'
import NavIcons from 'components/molecules/NavIcons/NavIcons'
import NavIcon from 'components/molecules/NavIcons/NavIcon'
import InboxIcon from '@material-ui/icons/Inbox'
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline'
import CancelIcon from '@material-ui/icons/CancelOutlined'
import NavToggle from 'components/molecules/NavIcons/NavToggle'
import NavMulti from 'components/molecules/NavIcons/NavMulti'
import { DividerType } from 'components/molecules/NavIcons/base'

const handleUpdate = () => {}

const renderToggle = (divider: DividerType) => (
  <NavToggle initial='Inbox' divider={divider}>
    <NavIcon name='Inbox' handleUpdate={handleUpdate}>
      <InboxIcon />
    </NavIcon>
    <NavIcon name='Accepted' handleUpdate={handleUpdate}>
      <CheckCircleIcon />
    </NavIcon>
    <NavIcon name='Rejected' handleUpdate={handleUpdate}>
      <CancelIcon />
    </NavIcon>
  </NavToggle>
)

const renderMulti = (divider: DividerType) => (
  <NavMulti initial={['Inbox', 'Accepted']} divider={divider}>
    <NavIcon name='Inbox' handleUpdate={handleUpdate}>
      <InboxIcon />
    </NavIcon>
    <NavIcon name='Accepted' handleUpdate={handleUpdate}>
      <CheckCircleIcon />
    </NavIcon>
    <NavIcon name='Rejected' handleUpdate={handleUpdate}>
      <CancelIcon />
    </NavIcon>
  </NavMulti>
)

const renderHorizontal = (divider: DividerType) => (
  <NavMulti initial={['Inbox', 'Accepted']} divider={divider}>
    <NavIcon name='Inbox' handleUpdate={handleUpdate} horizontal={true}>
      <InboxIcon />
    </NavIcon>
    <NavIcon name='Accepted' handleUpdate={handleUpdate} horizontal={true}>
      <CheckCircleIcon />
    </NavIcon>
    <NavIcon name='Rejected' handleUpdate={handleUpdate} horizontal={true}>
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
  horizontal: true,
  children: <Fragment>{renderHorizontal('start')}</Fragment>
}

export default {
  title: 'atoms/NavIcons',
  component: NavIcons
}
