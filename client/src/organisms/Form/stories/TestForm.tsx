import React, { FC, useState } from 'react'
import { Form, FormSave, FormInput } from 'organisms/Form'
import AddIcon from '@material-ui/icons/Add'
import { HandleStatusType } from 'organisms/Form/base'
import { candidateStatusOptions } from 'organisms/Form/mock'
import { useInputStatus } from 'organisms/Form/hooks'

const TestForm: FC = () => {
  const [name, setName] = useState('some name')
  const [status, setStatus] = useState('available')
  const { statuses, addStatus } = useInputStatus()

  const handleUpdate = (name: string, value: string) => {
    console.group('handleUpdate')
    console.log(name)
    console.log(value)
    console.groupEnd()
    // setName('updated by test')
    addStatus(name, 'pending')
    addStatus(name, 'error', "there' been a terrible mistake")
    addStatus(name, 'success')
  }

  const handleSave = (inputs: object) => {
    addStatus('newInput', 'success', 'some success')
    console.group('handleSave')
    console.log(inputs)
    console.groupEnd()
  }

  return (
    <Form handleUpdate={handleUpdate} statuses={statuses}>
      <FormInput
        label='Text Input'
        name='textInput'
        value='some input'
        type='text'
      />
      <FormInput
        label='New Input'
        name='newInput'
        value='new input'
        type='text'
      />
      <FormInput
        label='Select Input'
        name='select'
        value={status}
        type='select'
        options={{ selectOptions: candidateStatusOptions }}
      />
      <FormInput
        label='CheckBox'
        name='checkbox'
        value={false}
        type='checkbox'
      />
      <FormInput
        label='Toggle'
        name='toggle'
        value={false}
        type='toggle'
        options={{ inactiveLabel: 'no', activeLabel: 'yes' }}
      />
      <FormInput
        label='Text Input'
        name='Text Input'
        value='some input'
        type='phone'
      />
      <FormInput
        label='Date'
        name='Text Input'
        value='some input'
        type='date'
      />
      <FormInput
        label='Text Area Input'
        name='Text Area Input'
        value='some input textarea'
        type='text'
        options={{ multiline: true }}
      />
      <FormSave label={'Save'} handleSave={handleSave} icon={<AddIcon />} />
    </Form>
  )
}

export default TestForm
