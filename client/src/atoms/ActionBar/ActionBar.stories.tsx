import { ActionBar } from 'atoms'
import React, { Fragment } from 'react'
import Button from 'atoms/Button/Button'
import { theme } from 'styles/theme'

const Template = (args: any) => <ActionBar {...args} />

// DEFAULT
export const DEFAULT: any = Template.bind({})

DEFAULT.args = {}

// RED
export const RED: any = Template.bind({})

RED.args = {
  colour: 'primaryAccent900'
}

// BLUE
export const BLUE: any = Template.bind({})

BLUE.args = {
  colour: 'tertiaryAccent800'
}

// GREEN
export const GREEN: any = Template.bind({})

GREEN.args = {
  colour: theme.secondaryAccent900,
  contentStart: (
    <div style={{ width: '80px', border: '1px solid red' }}>Start</div>
  ),
  contentMiddle: (
    <div style={{ width: '520px', border: '1px solid red' }}>Middle</div>
  ),
  contentEnd: <div style={{ width: '20px', border: '1px solid red' }}>End</div>
}

export default {
  title: 'atoms/ActionBar',
  component: ActionBar
}
