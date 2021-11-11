import React from 'react'
import Divider from './Divider'

const DividerTemplate = (args: any) => <Divider />

// Default
export const Default: any = DividerTemplate.bind({})

Default.args = {
}

export default {
  title: 'atoms/Divider',
  component: Divider
}
