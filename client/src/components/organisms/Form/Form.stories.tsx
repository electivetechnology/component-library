import React from 'react'
import {
  Form,
  FormInput,
  FormRow,
} from 'components/organisms/Form'

const handleUpdate = (formData: any) => {
  console.group('handleUpdate')
  console.log(formData)
  console.groupEnd()
}

const Template = (args: any) => <Form {...args} handleUpdate={handleUpdate} />

// InputSingle
export const InputSingle: any = Template.bind({})

InputSingle.args = {
  handleUpdate,
  children: <FormInput label='Name' name='name' value='some name' type='text' />
}

// InputRow
export const InputRow: any = Template.bind({})

InputRow.args = {
  handleUpdate,
  children: (
    <FormRow>
      <FormInput label='Name' name='name' value='some name' type='text' />
      <FormInput label='Desc' name='desc' value='some desc' type='text' />
    </FormRow>
  )
}

export default {
  title: 'organisms/Form',
  component: Form
}
