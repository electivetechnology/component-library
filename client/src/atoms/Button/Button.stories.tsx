import React from 'react'
import Button from 'atoms/Button/Button'
import AddIcon from '@material-ui/icons/Add'
import Save from '@material-ui/icons/Save'

const Template = (args: any) => <Button {...args} />

// FAB desktop
export const FABDesktop: any = Template.bind({})

FABDesktop.args = {
  theme: 'primary',
  label: 'New',
  icon: <AddIcon />
}

// FAB mobile
export const FABMobile: any = Template.bind({})

FABMobile.args = {
  theme: 'mobile',
  label: 'Create',
  icon: <AddIcon />
}

// Primary
export const Primary: any = Template.bind({})

Primary.args = {
  theme: 'primary',
  label: 'Primary'
}

// Secondary
export const Secondary: any = Template.bind({})

Secondary.args = {
  theme: 'secondary',
  label: 'Secondary'
}

// Tertiary
export const Tertiary: any = Template.bind({})

Tertiary.args = {
  theme: 'tertiary',
  label: 'Tertiary'
}

// Disabled
export const Disabled: any = Template.bind({})

Disabled.args = {
  theme: 'primary',
  label: 'Disabled',
  disabled: true
}

// FullWidth
export const FullWidth: any = Template.bind({})

FullWidth.args = {
  theme: 'primary',
  label: 'Full Width',
  fullWidth: true
}

// Icon
export const Icon: any = Template.bind({})

Icon.args = {
  theme: 'primary',
  label: 'Icon',
  icon: <Save />
}

// Quaternary
export const Quaternary: any = Template.bind({})

Quaternary.args = {
  theme: 'quaternary',
  icon: <Save />
}

export default {
  title: 'atoms/Button',
  component: Button
}
