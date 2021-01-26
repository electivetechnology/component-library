import React from 'react'
import { FormInput, Form } from 'organisms/Form'

const FormTextTemplate = (args: any) => {
  const handleUpdate = () => {}
  return (
    <Form handleUpdate={handleUpdate}>
      <FormInput {...args} />
    </Form>
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

export default {
  title: 'atoms/TextField',
  component: FormInput
}
