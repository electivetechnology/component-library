import React, { Fragment } from 'react'
import { Form, FormInput } from 'organisms/Form'
import AddIcon from '@mui/icons-material/Add'
import { selectOptions } from 'organisms/Form/stories/base'

const handleUpdate = () => {}

const Template = (args: any) => <Form {...args} handleUpdate={handleUpdate} />
// Select
export const Select: any = Template.bind({})
export const SelectPrefix: any = Template.bind({})
export const SelectSuffix: any = Template.bind({})
export const SelectRequired: any = Template.bind({})
export const SelectDelete: any = Template.bind({})

Select.args = {
  handleUpdate,
  children: (
    <FormInput
      label='Form Select'
      name='select'
      value=''
      type='select'
      options={{
        selectOptions
      }}
    />
  )
}

SelectPrefix.args = {
  handleUpdate,
  children: (
    <FormInput
      label='Form Select prefix'
      name='select'
      value=''
      type='select'
      options={{
        selectOptions,
        prefix: true,
        icon: <AddIcon style={{ position: 'relative', top: '44px' }} />
      }}
    />
  )
}

SelectSuffix.args = {
  handleUpdate,
  children: (
    <FormInput
      label='Form Select suffix'
      name='select'
      value=''
      type='select'
      options={{
        selectOptions,
        suffix: true,
        icon: <AddIcon style={{ position: 'relative', top: '44px' }} />
      }}
    />
  )
}

SelectRequired.args = {
  handleUpdate,
  children: (
    <FormInput
      label='Form Select suffix'
      name='select'
      value=''
      type='select'
      required={true}
      options={{
        selectOptions,
        suffix: true,
        icon: <AddIcon style={{ position: 'relative', top: '44px' }} />
      }}
    />
  )
}

SelectDelete.args = {
  handleUpdate,
  children: (
    <FormInput
      label='Form Select suffix'
      name='select'
      value=''
      type='select'
      required={true}
      handleDelete={() => {}}
    />
  )
}

export default {
  title: 'organisms/Form/Standard/Select',
  component: Form
}
