import React, { Fragment } from 'react'
import { Form, FormInput } from 'components/organisms/Form'

const handleUpdate = () => {}

const Template = (args: any) => <Form {...args} handleUpdate={handleUpdate} />

// Form
export const FormInputStory: any = Template.bind({})

FormInputStory.args = {
  handleUpdate,
  children: (
    <FormInput
      input={{
        label: 'Name',
        value: 'some value',
        type: 'text',
        required: true
      }}
    />
  )
}

export default {
  title: 'molecules/Form',
  component: Form
}
