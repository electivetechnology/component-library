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

// FormCheckbox
export const Checkbox: any = Template.bind({})

Checkbox.args = {
  handleUpdate,
  children: (
    <Fragment>
      <FormInput
        label='Checkbox'
        name='checkbox'
        value={true}
        type='checkbox'
      />
    </Fragment>
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

// Date
export const Date: any = Template.bind({})

Date.args = {
  handleUpdate,
  children: (
    <FormInput
      label='Date'
      type='date'
      name="date"
      value=''
    />
  )
}

// FormInfo
export const Info: any = Template.bind({})

Info.args = {
  handleUpdate,
  children: <FormInfo info={'Some Info'} />
}

// FormPhone
export const Phone: any = Template.bind({})

Phone.args = {
  handleUpdate,
  children: (
    <Fragment>
      <FormInput
        label="Phone number"
        name="phone"
        value={'44'}
        type="phone"
      />
    </Fragment>
  )
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

// Select
export const Select: any = Template.bind({})

Select.args = {
  handleUpdate,
  children: (
    <FormRow>
      <FormInput
        label='Form Select'
        name='select'
        value={status}
        type='select'
        options={{ selectOptions: [{ value: '', label: '' }] }}
      />
    </FormRow>
  )
}

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

// FormDelete
export const TextDelete: any = Template.bind({})

TextDelete.args = {
  handleUpdate,
  children: (
    <Fragment>
      <FormInput
        label='Text Area'
        name='text'
        value='some text'
        type='text'
        deletable={true}
      />
      <FormInput
        label='Text'
        name='textarea'
        value='some textarea'
        type='text'
        options={{ multiline: true }}
        deletable={true}
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

// FormTitle
export const Title: any = Template.bind({})

Title.args = {
  handleUpdate,
  children: <FormTitle label={'Some Title'} />
}

// FormToggle
export const Toggle: any = Template.bind({})

Toggle.args = {
  handleUpdate,
  children: (
    <FormInput
      label='Toggle'
      name='toggle'
      value={true}
      type='toggle'
    />
  )
}

export default {
  title: 'organisms/Form',
  component: Form
}
