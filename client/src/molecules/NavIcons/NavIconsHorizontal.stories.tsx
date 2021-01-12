import React, { Fragment } from 'react'
import { TextField } from 'atoms'
import FolderSharedOutlined from '@material-ui/icons/FolderSharedOutlined'
import MeetingRoomOutlined from '@material-ui/icons/MeetingRoomOutlined'
import DomainOutlined from '@material-ui/icons/DomainOutlined'
import WorkOffOutlined from '@material-ui/icons/WorkOffOutlined'
import ArchiveOutlined from '@material-ui/icons/ArchiveOutlined'
import VisibilityOutlined from '@material-ui/icons/VisibilityOutlined'
import NavIcon from 'molecules/NavIcons/NavIcon'
import NavToggle from 'molecules/NavIcons/NavToggle'
import NavIcons from 'molecules/NavIcons/NavIcons'
import { DividerType } from 'molecules/NavIcons/base'
import NavMulti from 'molecules/NavIcons/NavMulti'
import InboxIcon from '@material-ui/icons/Inbox'
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline'
import CancelIcon from '@material-ui/icons/CancelOutlined'

const Template = (args: any) => <NavIcons {...args} />

const iconLeftStyle = {
  height: '30px',
  width: '30px'
}

const handleUpdate = () => {}

const renderLabels = () => (
  <NavToggle initial='Shortlist' title='Label' divider='end'>
    <NavIcon name='Shortlist' handleUpdate={handleUpdate}>
      <FolderSharedOutlined style={iconLeftStyle} />
    </NavIcon>
    <NavIcon name='Meeting' handleUpdate={handleUpdate}>
      <MeetingRoomOutlined />
    </NavIcon>
    <NavIcon name='WithClient' handleUpdate={handleUpdate}>
      <DomainOutlined />
    </NavIcon>
    <NavIcon name='Unsuccessful' handleUpdate={handleUpdate}>
      <WorkOffOutlined />
    </NavIcon>
  </NavToggle>
)

const renderActions = () => (
  <NavToggle initial='' title='Actions' position='end'>
    <NavIcon name='Download' handleUpdate={handleUpdate} roundIcon>
      <ArchiveOutlined style={iconLeftStyle} />
    </NavIcon>
    <NavIcon name='Seen' handleUpdate={handleUpdate} roundIcon>
      <VisibilityOutlined style={iconLeftStyle} />
    </NavIcon>
  </NavToggle>
)

const renderHorizontal = (divider: DividerType) => (
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

// Nav
export const Actions: any = Template.bind({})

Actions.args = {
  layout: 'horizontal',
  children: (
    <Fragment>
      {renderLabels()}
      {renderActions()}
    </Fragment>
  )
}

export const Both: any = Template.bind({})

Both.args = {
  layout: 'horizontal',
  children: <Fragment>{renderHorizontal('start')}</Fragment>
}

export default {
  title: 'molecules/NavIcons/Horizontal',
  component: NavIcons
}
