import React from 'react'
import Pill from './Pill'

const PillTemplate = (args: any) => <Pill {...args} />

// Default
export const Default: any = PillTemplate.bind({})

Default.args = {
  color: 'blue',
  align: 'left'
}

// Right
export const Right: any = PillTemplate.bind({})

Right.args = {
  color: 'blue'
}

export default {
  title: 'atoms/Pill',
  component: Pill
}
