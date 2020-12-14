import React from 'react'
import {
  Form,
  FormAction,
  FormInfo,
  FormInput,
  FormRow,
  FormTitle
} from 'organisms/Form/index'
import AddIcon from '@material-ui/icons/Add'

const handleUpdate = () => {}
const handleAction = () => {}

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

// InputTitle
export const InputTitleInfo: any = Template.bind({})

InputTitleInfo.args = {
  handleUpdate,
  children: (
    <FormRow>
      <FormTitle label={'Some Header'} />
      <FormInput label='Name' name='name' value='some name' type='text' />
      <FormInput label='Desc' name='desc' value='some desc' type='text' />
      <FormInfo info={'Some Info'} />
    </FormRow>
  )
}

// InputAction
export const InputAction: any = Template.bind({})

InputAction.args = {
  handleUpdate,
  children: (
    <FormRow>
      <FormInput label='Name' name='name' value='some name' type='text' />
      <FormAction
        label='Set Primary'
        handleAction={handleAction}
        icon={<AddIcon />}
      />
    </FormRow>
  )
}

export default {
  title: 'organisms/Form',
  component: Form
}
