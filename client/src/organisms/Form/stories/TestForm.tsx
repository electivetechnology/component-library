import React, { FC, useState } from 'react'
import { Form, FormSave, FormInput } from 'organisms/Form'
import AddIcon from '@material-ui/icons/Add'
import { HandleStatusType } from 'organisms/Form/base'
import { candidateStatusOptions } from 'organisms/Form/mock'

const TestForm: FC = () => {
  const [name, setName] = useState('some name')
  const [status, setStatus] = useState('available')

  const handleUpdate = (
    candidate: {[key: string]: string},
    addStatus: HandleStatusType,
  ) => {
    console.group('handleUpdate')
    console.log(candidate)
    console.groupEnd()
    // setName('updated by test')
    addStatus('pending')
    addStatus('error', "there' been a terrible mistake")
    addStatus('success')
  }

  const handleSave = (
    inputs: object,
  ) => {
    console.group('handleSave')
    console.log(inputs)
    console.groupEnd()
  }

  return (
    <Form
      handleUpdate={handleUpdate}
      darkMode={true}
    >
      <FormInput
        label='Name'
        name='name'
        value={name}
        type='text'
        options={{ affix: 'affix me' }}
      />
      <FormInput
        label='Candidate'
        name='candidate'
        value={status}
        type='select'
        options={{ selectOptions: candidateStatusOptions }}
      />
      <FormSave label={'Save'} handleSave={handleSave} icon={<AddIcon />} />
    </Form>
  )
}

export default TestForm
