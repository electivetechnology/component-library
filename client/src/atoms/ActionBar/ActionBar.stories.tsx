import React, { Fragment } from 'react'
import { TextField } from 'atoms'
import ActionBar from './ActionBar'
import FolderSharedOutlined from '@material-ui/icons/FolderSharedOutlined'
import MeetingRoomOutlined from '@material-ui/icons/MeetingRoomOutlined'
import DomainOutlined from '@material-ui/icons/DomainOutlined'
import WorkOffOutlined from '@material-ui/icons/WorkOffOutlined'
import ArchiveOutlined from '@material-ui/icons/ArchiveOutlined'
import VisibilityOutlined from '@material-ui/icons/VisibilityOutlined'
import NavIcon from 'molecules/NavIcons/NavIcon'
import NavToggle from 'molecules/NavIcons/NavToggle'
import NavIcons from 'molecules/NavIcons/NavIcons'

const ActionTemplate = (args: any) => <ActionBar {...args} />
const Template = (args: any) => <NavIcons {...args} />



const iconLeftStyle = {
  height: '30px',
  width: '30px'
}

const handleUpdate = () => {}

const renderLabels = () => (
  <NavToggle initial='Shortlist' title='Label'>
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
  <NavToggle initial='' title='Actions'>
    <NavIcon name='Download' handleUpdate={handleUpdate} roundIcon>
      <ArchiveOutlined style={iconLeftStyle} />
    </NavIcon>
    <NavIcon name='Seen' handleUpdate={handleUpdate} roundIcon>
      <VisibilityOutlined style={iconLeftStyle} />
    </NavIcon>
  </NavToggle>
)

// Nav
export const NavHorizontal: any = Template.bind({})

NavHorizontal.args = {
  layout: 'horizontal',
  children: (
    <Fragment>
      {renderLabels()}
      {renderActions()}
    </Fragment>
  )
}

// Standard
export const Standard: any = ActionTemplate.bind({})
Standard.args = {
  labelTitle: 'Labels:',
  actionTitle: 'Actions',
  labelItems: renderLabels(),
  actionItems: renderActions()
}

export default {
  title: 'molecules/ActionBar',
  component: TextField
}