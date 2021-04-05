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
      <FormInput label='Text Area' name='text' value='some text' type='text' />
      <FormInput
        label='Text'
        name='textarea'
        value='some textarea'
        type='text'
        options={{ multiline: true }}
      />
    </Fragment>
  )
}

// FormTextRequired
export const TextRequired: any = Template.bind({})

TextRequired.args = {
  handleUpdate,
  children: (
    <Fragment>
      <FormInput label='Text Area' name='text' value='some text' type='text' required={true} />
      <FormInput
        label='Text'
        name='textarea'
        value='some textarea'
        type='text'
        options={{ multiline: true }}
        required={true}
      />
    </Fragment>
  )
}

// FormTextArea
export const TextError: any = Template.bind({})

TextError.args = {
  handleUpdate,
  statuses: {
    text: { statusType: 'error' },
    textArea: { statusType: 'error' }
  },
  children: (
    <Fragment>
      <FormInput label='Text Area' name='text' value='some text' type='text' />
      <FormInput
        label='Text'
        name='textArea'
        value='some textarea'
        type='text'
        options={{ multiline: true }}
      />
    </Fragment>
  )
}

// FormDownload
export const TextDownload: any = Template.bind({})

TextDownload.args = {
  handleUpdate,
  children: (
    <Fragment>
      <FormInput
        label='Text Area'
        name='text'
        value='some text'
        type='text'
        download={true}
      />
      <FormInput
        label='Text'
        name='textarea'
        value='some textarea'
        type='text'
        options={{ multiline: true }}
        download={true}
      />
    </Fragment>
  )
}

// FormCopy
export const TextCopy: any = Template.bind({})

TextCopy.args = {
  handleUpdate,
  children: (
    <Fragment>
      <FormInput
        label='Text Area'
        name='text'
        value='some text'
        type='text'
        options={{ copy: true }}
      />
      <FormInput
        label='Text'
        name='textarea'
        value='some textarea'
        type='text'
        options={{ multiline: true, copy: true }}
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
