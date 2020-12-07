import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline'
import CancelIcon from '@material-ui/icons/CancelOutlined'
import InboxIcon from '@material-ui/icons/Inbox'
import Navigation from './Navigation'
import { DeviderStyled, iconStyle } from './styles'
import { theme } from 'styles/theme'
import IconContainer from './IconContainer'

const Template = (args: any) => <Navigation {...args} />

// Nav
export const InboxNavigation: any = Template.bind({})

InboxNavigation.args = {
  children: (
    <div style={{ marginLeft: '16px' }}>
      <IconContainer toolTipText='Inbox' placement='right'>
        <InboxIcon style={iconStyle} />
      </IconContainer>
      <IconContainer toolTipText='Accepted' placement='right'>
        <CheckCircleIcon style={iconStyle} />
      </IconContainer>
      <IconContainer toolTipText='Rejected' placement='right'>
        <CancelIcon style={iconStyle} />
      </IconContainer>
      <DeviderStyled />
    </div>
  )
}

export default {
  title: 'atoms/Navigation',
  component: InboxNavigation
}
