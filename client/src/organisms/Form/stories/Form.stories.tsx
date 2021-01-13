import React, { Fragment } from 'react'
import {
  Form,
  FormAction,
  FormInfo,
  FormInput,
  FormRow,
  FormTitle
} from 'organisms/Form'
import AddIcon from '@material-ui/icons/Add'

const handleUpdate = () => {}
const handleAction = () => {}

const Template = (args: any) => <Form {...args} handleUpdate={handleUpdate} />

// FormText
export const Text: any = Template.bind({})

Text.args = {
  handleUpdate,
  children: (
    <Fragment>
      <FormInput
        label='Text Area'
        name='textarea'
        value='some textarea'
        type='text'
        options={{ multiline: true }}
      />
      <FormInput label='Text Input' name='text' value='some text' type='text' />
    </Fragment>
  )
}

export const DownloadText: any = Template.bind({})

DownloadText.args = {
  handleUpdate,
  children: (
    <Fragment>
      <FormInput
        label='Text Area'
        name='textarea'
        value='some textarea'
        type='text'
        options={{ multiline: true }}
        download={true}
      />
      <FormInput
        label='Text Input'
        name='text'
        value='some text'
        type='text'
        download={true}
      />
    </Fragment>
  )
}

export const CopyText: any = Template.bind({})

CopyText.args = {
  handleUpdate,
  children: (
    <Fragment>
      <FormInput
        label='Text Area'
        name='textarea'
        value='some textarea'
        type='text'
        options={{ multiline: true, copy: true }}
      />
      <FormInput
        label='Text Input'
        name='text'
        value='some text'
        type='text'
        options={{ copy: true }}
      />
    </Fragment>
  )
}

// FormInfo
export const Info: any = Template.bind({})

Info.args = {
  handleUpdate,
  children: <FormInfo info={'Some Info'} />
}

// FormTitle
export const Title: any = Template.bind({})

Title.args = {
  handleUpdate,
  children: <FormTitle label={'Some Title'} />
}

// FormRow
export const Row: any = Template.bind({})

Row.args = {
  handleUpdate,
  children: (
    <FormRow>
      <FormInput label='Name' name='name' value='some name' type='text' />
      <FormInput label='Desc' name='desc' value='some desc' type='text' />
    </FormRow>
  )
}

// FormAction
export const Action: any = Template.bind({})

Action.args = {
  handleUpdate,
  children: (
    <FormAction
      label='Set Primary'
      handleAction={handleAction}
      icon={<AddIcon />}
    />
  )
}

// FormColourPicker
export const ColourPicker: any = Template.bind({})

ColourPicker.args = {
  handleUpdate,
  children: (
    <FormInput
      label='Colour Picker'
      name='name'
      value='#DCE1E8'
      type='colourPicker'
    />
  )
}

export default {
  title: 'organisms/Form',
  component: Form
}
