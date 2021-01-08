import React from 'react'
import { SelectField, TextField } from 'atoms'
import { AutoCompleteContainerStyled } from 'atoms/SelectField/style'

const SelectTemplate = (args: any) => <SelectField {...args} />

const SelectLightThemeTemplate = (args: any) => (
  <AutoCompleteContainerStyled>
    <SelectField {...args} />
  </AutoCompleteContainerStyled>
)

// Dark
export const Dark: any = SelectTemplate.bind({})

Dark.args = {
  label: 'Label',
  options: [],
  theme: 'dark'
}

export default {
  title: 'atoms/ActionBar',
  component: TextField
}
