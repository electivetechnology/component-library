import React from 'react'
import InboxNavigation from './InboxNavigation'

const Template = (args: any) => <InboxNavigation {...args} />

// Nav
export const InboxNav: any = Template.bind({})

export default {
  title: 'atoms/Nav',
  component: InboxNavigation
}
