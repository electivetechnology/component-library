import React, { FC, useState } from 'react'
import { Form, FormSave, FormInput } from 'organisms/Form'
import AddIcon from '@material-ui/icons/Add'
import { AddStatusType } from 'organisms/Form/base'

const TestForm: FC = () => {
  const [name, setName] = useState('some name')

  const handleUpdate = (
    name: string,
    value: string,
    addStatus: AddStatusType,
  ) => {
    // setName('updated by test')
    addStatus('pending', name)
    addStatus('error', name, "there' been a terrible mistake")
    addStatus('success', name)
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
    >
      <FormInput
        label='Name'
        name='name'
        value={name}
        type='text'
        options={{ affix: 'affix me' }}
      />
      <FormSave label={'Save'} handleSave={handleSave} icon={<AddIcon />} />
    </Form>
  )
}

export default TestForm
