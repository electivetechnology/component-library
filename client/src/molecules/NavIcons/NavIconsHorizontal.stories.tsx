import React, { Fragment } from 'react'
import { FolderSharedOutlined, MeetingRoomOutlined, DomainOutlined, WorkOffOutlined, ArchiveOutlined, VisibilityOutlined, Inbox as InboxIcon, CheckCircleOutline as CheckCircleIcon, CancelOutlined as CancelIcon} from '@material-ui/icons'
import NavIcon from 'molecules/NavIcons/NavIcon'
import NavToggle from 'molecules/NavIcons/NavToggle'
import NavIcons from 'molecules/NavIcons/NavIcons'
import { DividerType } from 'molecules/NavIcons/base'
import NavMulti from 'molecules/NavIcons/NavMulti'

const Template = (args: any) => <NavIcons {...args} />

const handleUpdate = () => {}

const renderLabels = () => (
  <NavToggle initial='Shortlist' title='Label'>
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
