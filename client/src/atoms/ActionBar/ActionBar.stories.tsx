import { ActionBar } from 'atoms'
import React from 'react'

const Template = (args: any) => <ActionBar {...args} />

// DEFAULT
export const DEFAULT: any = Template.bind({})

DEFAULT.args = {}

// RED
export const RED: any = Template.bind({})

RED.args = {
  colour: 'red'
}

// BLUE
export const BLUE: any = Template.bind({})

BLUE.args = {
  colour: 'blue'
}

// GREEN
export const GREEN: any = Template.bind({})

GREEN.args = {
  colour: 'green'
}

export default {
  title: 'atoms/ActionBar',
  component: ActionBar
}
