import React from 'react'
import Pill from './Pill'

const PillTemplate = (args: any) => <Pill {...args} />

// Default
export const Default: any = PillTemplate.bind({})

Default.args = {
  status: 'primary'
}

export default {
  title: 'atoms/Pill',
  component: Pill
}
