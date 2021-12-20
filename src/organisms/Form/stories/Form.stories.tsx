import React, { Fragment } from 'react'
import {
  Form,
  FormInfo,
  FormInput,
  FormRow,
  FormTitle,
} from 'organisms/Form/index'
import AddIcon from '@material-ui/icons/Add'

const handleUpdate = () => {}

const Template = (args: any) => <Form {...args} handleUpdate={handleUpdate} />

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
      <FormInput
        label='Checkbox'
        name='checkbox'
        value={true}
        type='checkbox'
        required={true}
      />
    </Fragment>
  )
}

// FormColourPicker
export const ColourPicker: any = Template.bind({})

ColourPicker.args = {
  handleUpdate,
  children: (
    <Fragment>
      <FormInput
        label='Colour Picker'
        name='colorPicker'
        value='#DCE1E8'
        type='colourPicker'
      />
      <FormInput
        label='Colour Picker'
        name='colorPicker'
        value='#DCE1E8'
        type='colourPicker'
        required={true}
      />
    </Fragment>
  )
}

// Date
export const Date: any = Template.bind({})

Date.args = {
  handleUpdate,
  children: (
    <Fragment>
      <FormInput label='Date' type='date' name='date' value='' />
      <FormInput
        label='Date'
        type='date'
        name='date'
        value=''
        required={true}
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

// FormPhone
export const Phone: any = Template.bind({})

Phone.args = {
  handleUpdate,
  children: (
    <Fragment>
      <FormInput label='Phone number' name='phone' value={'44'} type='phone' />
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
    <Fragment>
      <FormInput
        label='Form Select'
        name='select'
        value={status}
        type='select'
        options={{ selectOptions: [{ value: '', label: '' }] }}
      />
      <FormInput
        label='Form Select prefix'
        name='select'
        value={status}
        type='select'
        options={{
          selectOptions: [{ value: '', label: '' }],
          prefix: true,
          icon: <AddIcon style={{position: 'relative', top: '44px'}} />
        }}
      />
      <FormInput
        label='Form Select suffix'
        name='select'
        value={status}
        type='select'
        options={{
          selectOptions: [{ value: '', label: '' }],
          suffix: true,
          icon: <AddIcon style={{position: 'relative', top: '44px'}} />
        }}
      />
      <FormInput
        label='Form Select suffix'
        name='select'
        value={status}
        type='select'
        required={true}
        options={{
          selectOptions: [{ value: '', label: '' }],
          suffix: true,
          icon: <AddIcon style={{position: 'relative', top: '44px'}} />
        }}
      />
      <FormInput
        label='Form Select suffix'
        name='select'
        value={status}
        type='select'
        required={true}
        handleDelete={() => {}}
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
    <Fragment>
      <div style={{ paddingBottom: '8px' }}>
        <FormInput label='Toggle' name='toggle' value={true} type='toggle' />
      </div>
      <FormInput
        label='Toggle'
        name='toggle'
        value={true}
        type='toggle'
        required={true}
      />
    </Fragment>
  )
}

export default {
  title: 'organisms/Form/Standard',
  component: Form
}
