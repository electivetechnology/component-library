import React from 'react'
import TextField from 'atoms/TextField/TextField'
import SelectField from './SelectField'
import { AutoCompleteContainerStyled } from './style'

const SelectTemplate = (args: any) => <SelectField {...args} />

const SelectLightThemeTemplate = (args: any) => (
  <AutoCompleteContainerStyled>
    <SelectField {...args} />
  </AutoCompleteContainerStyled>
)

// Light
export const Light: any = SelectTemplate.bind({})

Light.args = {
  label: 'Label',
  options: []
}

// Dark
export const Dark: any = SelectLightThemeTemplate.bind({})

Dark.args = {
  label: 'Label',
  options: [],
  darkMode: true
}
// Disabled
export const Disabled: any = SelectTemplate.bind({})

Disabled.args = {
  label: 'Label',
  disabled: true,
  options: []
}

// Filled
export const Filled: any = SelectTemplate.bind({})

Filled.args = {
  label: 'Label',
  value: { value: 'Filled', label: 'Filled' },
  options: []
}

// Options
export const Options: any = SelectTemplate.bind({})

Options.args = {
  label: 'Label',
  options: [
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
    { label: 'Option 5', value: 'Option 5' },
    { label: 'Option 6', value: 'Option 6' },
    { label: 'Option 7', value: 'Option 7' },
    { label: 'Option 8', value: 'Option 8' },
    { label: 'Option 9', value: 'Option 9' },
    { label: 'Option 10', value: 'Option 10' },
    { label: 'Option 11', value: 'Option 11' },
    { label: 'Option 12', value: 'Option 12' },
    { label: 'Option 13', value: 'Option 13' },
    { label: 'Option 14', value: 'Option 14' },
    { label: 'Option 15', value: 'Option 15' },
    { label: 'Option 16', value: 'Option 16' }
  ]
}

export default {
  title: 'atoms/SelectField',
  component: TextField
}
