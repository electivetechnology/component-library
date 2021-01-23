import React, { FC, Fragment, useState } from 'react'
import { Form, FormSave, FormInput } from 'organisms/Form'
import AddIcon from '@material-ui/icons/Add'
import { HandleStatusType } from 'organisms/Form/base'
import { candidateStatusOptions } from 'organisms/Form/mock'

const TestForm: FC = () => {
  const [name, setName] = useState('some name')
  const [status, setStatus] = useState('available')

  const handleUpdate = (
    candidate: { [key: string]: string },
    addStatus: HandleStatusType
  ) => {
    console.group('handleUpdate')
    console.log(candidate)
    console.groupEnd()
    // setName('updated by test')
    addStatus('pending')
    addStatus('error', "there' been a terrible mistake")
    addStatus('success')
  }

  const handleSave = (inputs: object) => {
    console.group('handleSave')
    console.log(inputs)
    console.groupEnd()
  }

  return (
    <Form handleUpdate={handleUpdate}>
      <FormInput
        label='Text Area Input'
        name='Text Area Input'
        value='some input textarea'
        type='text'
        options={{ multiline: true }}
      />
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
        download={true}
      />
      <FormInput
        label='Select Input'
        name='select'
        value={status}
        type='select'
        options={{ selectOptions: candidateStatusOptions }}
      />
      <FormSave label={'Save'} handleSave={handleSave} icon={<AddIcon />} />
    </Form>
  )
}

export default TestForm
