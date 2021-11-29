import { ActionBar } from 'atoms'
import React from 'react'

const Template = (args: any) => <ActionBar {...args} />

// Default
export const Default: any = Template.bind({})

Default.args = {
  theme: 'messageTemplate',
}

export default {
  title: 'atoms/ActionBar',
  component: ActionBar
}
