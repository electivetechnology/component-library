import React from 'react'
import Divider from './Divider'

const DividerTemplate = (args: any) => <Divider {...args} />

// Default
export const Default: any = DividerTemplate.bind({})

Default.args = {
  padding: false
}

export default {
  title: 'atoms/Divider',
  component: Divider
}
