import React  from 'react'
import { Form, FormInput, FormRow } from 'components/organisms/Form'

const handleUpdate = (formData: any) => {
  console.group('handleUpdate')
  console.log(formData)
  console.groupEnd()
}

const Template = (args: any) => <Form {...args} handleUpdate={handleUpdate} />

// Form
export const InputSingle: any = Template.bind({})

InputSingle.args = {
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

export const InputRow: any = Template.bind({})

InputRow.args = {
  handleUpdate,
  children: (
    <FormRow>
      <FormInput
        input={{
          label: 'Name',
          value: 'some name',
          type: 'text',
          required: true
        }}
      />
      <FormInput
        input={{
          label: 'Desc',
          value: 'some desc',
          type: 'text',
          required: true
        }}
      />
    </FormRow>
  )
}

export default {
  title: 'organisms/Form',
  component: Form
}
