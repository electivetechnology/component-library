import React, { Fragment } from 'react'
import FolderSharedOutlined from '@mui/icons-material/FolderSharedOutlined'
import MeetingRoomOutlined from '@mui/icons-material/MeetingRoomOutlined'
import DomainOutlined from '@mui/icons-material/DomainOutlined'
import WorkOffOutlined from '@mui/icons-material/WorkOffOutlined'
import ArchiveOutlined from '@mui/icons-material/ArchiveOutlined'
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined'
import NavIcon from 'molecules/NavIcons/NavIcon'
import NavToggle from 'molecules/NavIcons/NavToggle'
import NavIcons from 'molecules/NavIcons/NavIcons'
import { DividerType } from 'molecules/NavIcons/base'
import NavMulti from 'molecules/NavIcons/NavMulti'
import InboxIcon from '@mui/icons-material/Inbox'
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutline'
import CancelIcon from '@mui/icons-material/CancelOutlined'

const Template = (args: any) => <NavIcons {...args} />

const handleUpdate = () => {}

const handleMenu = () => {}

const renderLabels = () => (
  <NavToggle initial='Shortlist' title='Labels:'>
    <NavIcon name='Shortlist' handleUpdate={handleUpdate}>
      <FolderSharedOutlined />
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
      <ArchiveOutlined />
    </NavIcon>
    <NavIcon name='Seen' handleUpdate={handleUpdate} roundIcon>
      <VisibilityOutlined />
    </NavIcon>
  </NavToggle>
)

const renderHorizontal = (divider: DividerType) => (
  <NavMulti initial={['Inbox', 'Accepted']} divider={divider}>
    <NavIcon name='Inbox' handleUpdate={handleMenu}>
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

export const CollapsibleMobileView: any = Template.bind({})

CollapsibleMobileView.args = {
  layout: 'horizontal',
  children: <Fragment>{renderHorizontal('start')}</Fragment>,
  subMenuContents: <Fragment>{renderHorizontal('start')}</Fragment>,
  subMenu: true
}

export default {
  title: 'molecules/NavIcons/Horizontal',
  component: NavIcons
}
