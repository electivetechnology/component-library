import { ActionBar } from 'atoms'
import React from 'react'
import { ActionBarThemesConst } from 'atoms/ActionBar/base'

const Template = (args: any) => <ActionBar {...args} />

// DEFAULT
export const DEFAULT: any = Template.bind({})

DEFAULT.args = {}

// CLIENT
export const CLIENT: any = Template.bind({})

CLIENT.args = {
  theme: ActionBarThemesConst.CLIENT
}

// CAMPAIGN
export const CAMPAIGN: any = Template.bind({})

CAMPAIGN.args = {
  theme: ActionBarThemesConst.CAMPAIGN
}

// OUTLINE
export const OUTLINE: any = Template.bind({})

OUTLINE.args = {
  theme: ActionBarThemesConst.OUTLINE
}

// ENGAGEMENT
export const ENGAGEMENT: any = Template.bind({})

ENGAGEMENT.args = {
  theme: ActionBarThemesConst.ENGAGEMENT
}

// CONVERSATION_TEMPLATE
export const CONVERSATION_TEMPLATE: any = Template.bind({})

CONVERSATION_TEMPLATE.args = {
  theme: ActionBarThemesConst.CONVERSATION_TEMPLATE
}

// QUESTION
export const QUESTION: any = Template.bind({})

QUESTION.args = {
  theme: ActionBarThemesConst.QUESTION
}

// MESSAGE_TEMPLATE
export const MESSAGE_TEMPLATE: any = Template.bind({})

MESSAGE_TEMPLATE.args = {
  theme: ActionBarThemesConst.MESSAGE_TEMPLATE
}

// LABEL
export const LABEL: any = Template.bind({})

LABEL.args = {
  theme: ActionBarThemesConst.LABEL
}

// COMPANY
export const COMPANY: any = Template.bind({})

COMPANY.args = {
  theme: ActionBarThemesConst.COMPANY
}

// PROFILE
export const PROFILE: any = Template.bind({})

PROFILE.args = {
  theme: ActionBarThemesConst.PROFILE
}

export default {
  title: 'atoms/ActionBar',
  component: ActionBar
}
