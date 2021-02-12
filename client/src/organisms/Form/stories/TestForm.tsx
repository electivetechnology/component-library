import React, { FC, useState } from 'react'
import { Form, FormSave, FormInput } from 'organisms/Form'
import AddIcon from '@material-ui/icons/Add'
import { HandleStatusSaveType, HandleStatusType } from 'organisms/Form/base'
import { candidateStatusOptions } from 'organisms/Form/mock'

const TestForm: FC = () => {
  const [name, setName] = useState('some name')
  const [status, setStatus] = useState('available')

  const handleUpdate = (
    candidate: { [key: string]: string },
    addStatus: HandleStatusType
  ) => {
    // console.group('handleUpdate')
    // console.log(candidate)
    // console.groupEnd()
    // setName('updated by test')
    addStatus('pending')
    addStatus('error', "there' been a terrible mistake")
    addStatus('success')
  }

  const handleSave = (inputs: object, addStatus: HandleStatusSaveType) => {
    addStatus('Text Input', 'pending', 'some message')
    console.group('handleSave')
    console.log(inputs)
    console.groupEnd()
  }

  return (
    <Form handleUpdate={handleUpdate}>
      <FormInput
        label='Text Input'
        name='Text Input'
        value='some input'
        type='text'
      />
      <FormInput
        label='Text Input'
        name='Text Input'
        value='some input'
        type='text'
      />
      {/*<FormInput*/}
      {/*  label='Select Input'*/}
      {/*  name='select'*/}
      {/*  value={status}*/}
      {/*  type='select'*/}
      {/*  options={{ selectOptions: candidateStatusOptions }}*/}
      {/*/>*/}
      {/*<FormInput*/}
      {/*  label='CheckBox'*/}
      {/*  name='checkbox'*/}
      {/*  value={false}*/}
      {/*  type='checkbox'*/}
      {/*/>*/}
      {/*<FormInput*/}
      {/*  label='Toggle'*/}
      {/*  name='toggle'*/}
      {/*  value={false}*/}
      {/*  type='toggle'*/}
      {/*  options={{ inactiveLabel: 'no', activeLabel: 'yes' }}*/}
      {/*/>*/}
      {/*<FormInput*/}
      {/*  label='Text Input'*/}
      {/*  name='Text Input'*/}
      {/*  value='some input'*/}
      {/*  type='phone'*/}
      {/*/>*/}
      {/*<FormInput*/}
      {/*  label='Date'*/}
      {/*  name='Text Input'*/}
      {/*  value='some input'*/}
      {/*  type='date'*/}
      {/*/>*/}
      {/*<FormInput*/}
      {/*  label='Text Area Input'*/}
      {/*  name='Text Area Input'*/}
      {/*  value='some input textarea'*/}
      {/*  type='text'*/}
      {/*  options={{ multiline: true }}*/}
      {/*/>*/}
      <FormSave label={'Save'} handleSave={handleSave} icon={<AddIcon />} />
    </Form>
  )
}

export default TestForm
