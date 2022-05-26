import React, { Fragment } from 'react'
import { Form, FormInput } from 'organisms/Form'
import AddIcon from '@mui/icons-material/Add'

const handleUpdate = () => {}

const Template = (args: any) => <Form {...args} handleUpdate={handleUpdate} />

export const Text: any = Template.bind({})
export const TextIcons: any = Template.bind({})
export const TextRequired: any = Template.bind({})
export const TextCopy: any = Template.bind({})
export const TextDelete: any = Template.bind({})
export const TextDownload: any = Template.bind({})
export const TextError: any = Template.bind({})

Text.args = {
  handleUpdate,
  children: (
    <Fragment>
      <FormInput label='Text field' name='text' value='some text' type='text' />
      <FormInput label='Text Area' name='text' value='some text' type='text' />
      <FormInput
        label='Text suffix'
        name='text'
        value='some text'
        type='text'
      />
      <FormInput
        label='Text multiline'
        name='textarea'
        value='some textarea'
        type='text'
        options={{
          multiline: true
        }}
      />
    </Fragment>
  )
}

TextIcons.args = {
  handleUpdate,
  children: (
    <Fragment>
      <FormInput
        label='Text Area'
        name='text'
        value='some text'
        type='text'
        options={{
          prefix: true,
          icon: <AddIcon />,
          suffix: true
        }}
      />
      <FormInput
        label='Text multiline'
        name='textarea'
        value='some textarea'
        type='text'
        options={{
          multiline: true,
          prefix: true,
          icon: <AddIcon style={{ margin: 'auto' }} />,
          suffix: true
        }}
      />
    </Fragment>
  )
}

TextCopy.args = {
  handleUpdate,
  children: (
    <Fragment>
      <FormInput
        label='Text field'
        name='text'
        value='some text'
        type='text'
        options={{ copy: true }}
      />
      <FormInput
        label='Text multiline'
        name='textarea'
        value='some textarea'
        type='text'
        options={{ multiline: true, copy: true }}
      />
    </Fragment>
  )
}

TextDelete.args = {
  handleUpdate,
  children: (
    <Fragment>
      <FormInput
        label='Text field'
        name='text'
        value='some text'
        type='text'
        handleDelete={() => {}}
      />
      <FormInput
        label='Text multiline'
        name='textarea'
        value='some textarea'
        type='text'
        handleDelete={() => {}}
        options={{ multiline: true }}
      />
    </Fragment>
  )
}

TextDownload.args = {
  handleUpdate,
  children: (
    <Fragment>
      <FormInput
        label='Text field'
        name='text'
        value='some text'
        type='text'
        download={true}
      />
      <FormInput
        label='Text multiline'
        name='textarea'
        value='some textarea'
        type='text'
        options={{ multiline: true }}
        download={true}
      />
    </Fragment>
  )
}

TextError.args = {
  handleUpdate,
  statuses: {
    text: { statusType: 'error' },
    textArea: { statusType: 'error' }
  },
  children: (
    <Fragment>
      <FormInput label='Text field' name='text' value='some text' type='text' />
      <FormInput
        label='Text multiline'
        name='textArea'
        value='some textarea'
        type='text'
        options={{ multiline: true }}
      />
    </Fragment>
  )
}

TextRequired.args = {
  handleUpdate,
  children: (
    <Fragment>
      <FormInput
        label='Text field'
        name='text'
        value='some text'
        type='text'
        required={true}
      />
      <FormInput
        label='Text multiline'
        name='textarea'
        value='some textarea'
        type='text'
        options={{ multiline: true }}
        required={true}
      />
    </Fragment>
  )
}

export default {
  title: 'organisms/Form/Standard/Text',
  component: Form
}
