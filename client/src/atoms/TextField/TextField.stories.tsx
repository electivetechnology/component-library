import React from 'react'
import { FormInput, Form } from 'organisms/Form'
import { DarkModeTemplateStyled } from './styles'

const FormTextTemplate = (args: any) => {
  const handleUpdate = () => {}
  return (
    <Form handleUpdate={handleUpdate}>
      <FormInput {...args} />
    </Form>
  )
}

const FormTextDarkModeTemplate = (args: any) => {
  const handleUpdate = () => {}
  return (
    <DarkModeTemplateStyled>
      <Form handleUpdate={handleUpdate} darkMode={args.darkMode}>
        <FormInput {...args} />
      </Form>
    </DarkModeTemplateStyled>
  )
}

// Default
export const Default: any = FormTextTemplate.bind({})

Default.args = {
  label: 'Text Area Input ',
  name: 'Text Area Input',
  value: 'Input',
  type: 'text'
}

// Multi
export const Multi: any = FormTextTemplate.bind({})

Multi.args = {
  label: 'Text Area Input ',
  name: 'Text Area Input',
  value: 'Input',
  type: 'text',
  options: { multiline: true }
}

// DarkMode
export const DarkMode: any = FormTextDarkModeTemplate.bind({})

DarkMode.args = {
  label: 'Text Area Input ',
  name: 'Text Area Input',
  value: 'Input',
  type: 'text',
  darkMode: true
}

// DarkModeMulti
export const DarkModeMulti: any = FormTextDarkModeTemplate.bind({})

DarkModeMulti.args = {
  label: 'Text Area Input ',
  name: 'Text Area Input',
  value: 'Input',
  type: 'text',
  options: { multiline: true },
  darkMode: true
}

// Disabled
export const Disabled: any = FormTextTemplate.bind({})

Disabled.args = {
  label: 'Text Area Input ',
  name: 'Text Area Input',
  value: 'Input',
  type: 'text',
  disabled: true
}

// DisabledMulti
export const DisabledMulti: any = FormTextTemplate.bind({})

DisabledMulti.args = {
  label: 'Text Area Input ',
  name: 'Text Area Input',
  value: 'Input',
  type: 'text',
  options: { multiline: true },
  disabled: true
}

// Suffix
export const Suffix: any = FormTextTemplate.bind({})

Suffix.args = {
  label: 'Text Area Input ',
  name: 'Text Area Input',
  value: 'Input',
  type: 'text',
  options: { multiline: true, suffix: true, icon: '%' },
  disabled: true
}

export default {
  title: 'atoms/TextField',
  component: FormInput
}
