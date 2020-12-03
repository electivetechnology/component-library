import React from 'react'
import Navigation from './Navigation'
import InboxNavigation from './InboxNavigation'

const Template = (args: any) => <Navigation {...args} />

// Nav
export const InboxNav: any = Template.bind({})

InboxNav.args = {
  children: <InboxNavigation />
}

export default {
  title: 'atoms/Navigation',
  component: InboxNavigation
}
