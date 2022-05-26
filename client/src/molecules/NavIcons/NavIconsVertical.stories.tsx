import React, { Fragment } from 'react'
import NavIcons from 'molecules/NavIcons/NavIcons'
import NavIcon from 'molecules/NavIcons/NavIcon'
import InboxIcon from '@mui/icons-material/Inbox'
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutline'
import CancelIcon from '@mui/icons-material/CancelOutlined'
import NavToggle from 'molecules/NavIcons/NavToggle'
import NavMulti from 'molecules/NavIcons/NavMulti'
import { DividerType } from 'molecules/NavIcons/base'

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
    <NavIcon name='Inbox' handleUpdate={handleUpdate}>
      <InboxIcon />
    </NavIcon>
    <NavIcon
      name='Accepted'
      handleUpdate={handleUpdate}
    >
      <CheckCircleIcon />
    </NavIcon>
    <NavIcon
      name='Rejected'
      handleUpdate={handleUpdate}
    >
      <CancelIcon />
    </NavIcon>
  </NavMulti>
)

const Template = (args: any) => <NavIcons {...args} />

// Nav
export const Toggle: any = Template.bind({})

Toggle.args = {
  layout: 'vertical',
  children: renderToggle('end')
}

export const Multi: any = Template.bind({})

Multi.args = {
  layout: 'vertical',
  children: renderMulti('end')
}

export const Both: any = Template.bind({})

Both.args = {
  layout: 'vertical',
  children: (
    <Fragment>
      {renderMulti('start')}
      {renderToggle('end')}
    </Fragment>
  )
}

export default {
  title: 'molecules/NavIcons/Vertical',
  component: NavIcons
}
