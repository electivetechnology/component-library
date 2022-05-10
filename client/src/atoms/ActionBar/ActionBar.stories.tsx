import { ActionBar } from 'atoms'
import React, { Fragment } from 'react'
import Button from 'atoms/Button/Button'

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
  colour: 'secondaryAccent900',
  contentStart: (
    <Button theme={'primary'} label={'Left make it large'} onClick={() => {}} />
  ),
  contentMiddle: (
    <Button theme={'primary'} label={'Centre'} onClick={() => {}} />
  ),
  contentEnd: (
    <Button
      theme={'primary'}
      label={'Right make it large'}
      onClick={() => {}}
    />
  )
}

export default {
  title: 'atoms/ActionBar',
  component: ActionBar
}
